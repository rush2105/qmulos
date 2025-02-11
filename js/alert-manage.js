document.addEventListener("DOMContentLoaded", function () {
    const orgNames = sessionStorage.getItem('orgName') ?? "Qmulos";
    if(orgNames != 'Qmulos'){
        $('#btnSelectOrgInitial').addClass('filled');
    }
    $('#btnSelectOrgInitial').text(orgNames + ' / ' + 'Windows');
    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            if (!anchor.classList.contains('no-lan')) {
                event.preventDefault();
            }
        });
    });

});
const driver = window.driver.js.driver;
function createTourProgressBox() {
    // Create main container
    const progressBox = document.createElement('div');
    progressBox.id = 'tourProgressBox';
    progressBox.innerHTML = `
        <div class="progress-header">
            <span>Tour Progress</span>
            <i class="fas fa-chevron-down"></i>
        </div>
        <div class="progress-content" style="display: none;">
           
            <ul class="progress-steps">
                <li data-step="0" class="step-item">
                    <i class="far fa-square"></i>
                    <span>Set Control Status</span>
                </li>
                <li data-step="1" class="step-item">
                    <i class="far fa-square"></i>
                    <span>Save Control Status</span>
                </li>
            
                
            </ul>
        </div>
    `;

    // Add styles
    const styles = document.createElement('style');
    styles.textContent = `
        #tourProgressBox {
            position: fixed;
            bottom: 20px;
            left: 20px;
            background: white;
            border-radius: 5px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            z-index: 1000;
            min-width: 150px;
            font-family: Arial, sans-serif;
        }
        .progress-header {
            padding: 10px 15px;
            background: #007a33;
            color: white;
            border-radius: 5px;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .progress-content {
            padding: 15px;
            background: white;
            border-radius: 0 0 5px 5px;
        }
        .progress-close {
            text-align: right;
            margin-bottom: 10px;
            cursor: pointer;
        }
        .progress-steps {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        .step-item {
            padding: 8px 0;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .step-item.completed {
            text-decoration: line-through;
        }
        .step-item.completed i {
            color: #007a33;
        }
    `;

    document.head.appendChild(styles);
    document.body.appendChild(progressBox);

    // Event Listeners
    const header = progressBox.querySelector('.progress-header');
    const content = progressBox.querySelector('.progress-content');
    

    header.addEventListener('click', () => {
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
        header.querySelector('i').classList.toggle('fa-chevron-down');
        header.querySelector('i').classList.toggle('fa-chevron-up');
    });

  

  

    return progressBox;
}
document.addEventListener("DOMContentLoaded", function () {
 

    // Initial actions on page load
    setTimeout(() => {
        // Trigger click on control status
        $('#control_status_alert_action-check').click();
        
        // Scroll to logar element
        document.querySelector('#logar').scrollIntoView({ 
            behavior: 'smooth',
            block: 'center'
        });

        // Start the tour after scroll and click
        setTimeout(() => {
            startTour();
        }, 1000);
    }, 500);

    function startTour() {
        const driverObj = new driver({
            popoverClass: 'driverjs-theme welcome-popup',
            allowClose: true,
            overlayClickNext: false,
            showProgress: true,
            progressText: 'Step {{current}} of {{total}}',
            steps: [
                {
                    element: '#logar',
                    popover: {
                        title: 'Set Control Status',
                        description: 'Select status type, status and type about Findings',
                        side: 'top',
                        align: 'start',
                        doneBtnText: 'Next',
                        showButtons: ['close', 'next']
                    }
                },
                {
                    element: '#ttc-save',
                    popover: {
                        title: 'Hit the save Button',
                        description: '',
                        side: 'top',
                        align: 'start',
                        prevBtnText: 'Previous',
                        closeBtnText: 'Close',
                        doneBtnText: 'Next',
                        showButtons: ['close', 'previous', 'next'] 
                    }
                }
            ],
            onHighlightStarted: (element,step) => {
                const currentStep = driverObj.getActiveIndex();
    
                sessionStorage.setItem('highlightStep', currentStep);
                const progressBox = document.querySelector('#tourProgressBox');
                const steps = progressBox.querySelectorAll('.step-item');
                // Mark all steps up to current step as completed
                steps.forEach((stepItem, index) => {
                    if (index < currentStep) {
                        stepItem.classList.add('completed');
                    }
                });
            
            },
            onCloseClick: () => {
                driverObj.destroy();
            },
            onPrevClick: (element, step, opts) => {
                const currentStep = driverObj.getActiveIndex();
                if (currentStep > 0) {
                    driverObj.drive(currentStep - 1);
                }
            },
            onNextClick: (element, step, opts) => {
                const currentStep = driverObj.getActiveIndex();
                
                if (currentStep === 0) {
                    // Set the selected-reviews value to 'failed'
                    $('#selected-reviews').val('failed');
                    
                    // Move to next step
                    setTimeout(() => {
                        driverObj.drive(1);
                    }, 500);
                }
                if(currentStep === 1){
                    window.location.href = '/compliance.html';
                }
            },
            onDeselected: (element,step) => {
                // sessionStorage.setItem('highlightStep', step.index);
    
                // When tour is interrupted
                setTimeout(() => {
                    // Create and show continue button if tour wasn't completed
                    if (!sessionStorage.getItem('tourCompleted')) {
                        const continueBtn = document.createElement('button');
                        continueBtn.innerHTML = 'Continue Tour';
                        continueBtn.id = 'continueTourBtn';
                        continueBtn.style.cssText = `
                            position: fixed;
                            bottom: 20px;
                            right: 20px;
                            padding: 10px 20px;
                            background: #007a33;
                            color: white;
                            border: none;
                            border-radius: 5px;
                            cursor: pointer;
                            z-index: 1000;
                        `;
                        
                        document.body.appendChild(continueBtn);
                        
                        continueBtn.addEventListener('click', () => {
                            const savedStep = parseInt(sessionStorage.getItem('highlightStep')) || 0;
                            driverObj.drive(savedStep);
                            continueBtn.remove();
                        });
                    }
                }, 1000); // 10 seconds delay
            }
        });
        const progressBox = createTourProgressBox();
        // Start the tour
        setTimeout(() => {
            driverObj.drive();
        }, 2000);
        const steps = progressBox.querySelectorAll('.step-item');

        steps.forEach(step => {
            step.addEventListener('click', () => {
                const stepIndex = parseInt(step.dataset.step);
                driverObj.drive(stepIndex);
            });
        });
    }
});


// $(document).ready(function () {


//     $('.ace_layer.ace_text-layer').html('');
//   setTimeout(() => {
//     $('html, body').animate({
//         scrollTop: $("#control_status_alert_action-check").offset().top
//     }, 2000);
//     const driver = window.driver.js.driver;

//     const fourthStepDriver = new driver({
//         popoverClass: 'driverjs-theme',
//         allowClose: true,
//         steps: [
//             {
//                 element: '#control_status_alert_action-check',
//                 popover: {
//                     title: 'Click on Set control status to open the selection',
//                     description: '',
//                     side: 'top',
//                     align: 'start',
//                     doneBtnText: 'Next'
//                 }
//             }
//         ],
//         onCloseClick: () => {


//         }
//     });

//     fourthStepDriver.drive();
//     $('#a-control_status_alert_action-check,#control_status_alert_action-check').click(function (e) {
//         fourthStepDriver.destroy(); 
//         const fifthStepDriver = new driver({
//             popoverClass: 'driverjs-theme',
//             allowClose: true,
//             steps: [
//                 {
//                     element: '#selected-reviews',
//                     popover: {
//                         title: 'Select the Assesment status from the dropdown',
//                         description: '',
//                         side: 'top',
//                         align: 'start',
//                         doneBtnText: 'Next'
//                     }
//                 }
//             ],
//             onCloseClick: () => {
    
    
//             }
//         });
//         fifthStepDriver.drive();
//         setTimeout(() => {
//             fifthStepDriver.destroy();
//         },2000)
//         $('#selected-reviews').change(function(){
//             fifthStepDriver.destroy();
//             const sixhStepDriver = new driver({
//                 popoverClass: 'driverjs-theme',
//                 allowClose: true,
//                 steps: [
//                     {
//                         element: '#ttc-save',
//                         popover: {
//                             title: 'Hit the save Button to store the data',
//                             description: '',
//                             side: 'top',
//                             align: 'start',
//                             doneBtnText: 'Next'
//                         }
//                     }
//                 ],
//                 onCloseClick: () => {
        
        
//                 }
//             });
//             sixhStepDriver.drive();
//             $('#ttc-save').click(function(){
//                 sixhStepDriver.destroy();
                              
//             })
//         })

// })

//   }, 2000);
   
// });