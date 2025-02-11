$(document).ready(function () {
    $('#addsuborg,#btnCancelOrgCreate').click(function () {
        $('#modalOrgCreate').toggleClass('open');
        $('.modal-backdrop').toggleClass('open');




    })
})

document.addEventListener("DOMContentLoaded", function () {

  

    // setTimeout(() => {
    //     const fourthStepDriver = new driver({
    //         popoverClass: 'driverjs-theme',
    //         allowClose: true,
    //         steps: [
    //             {
    //                 element: '#org_1',
    //                 popover: {
    //                     title: 'Select the Current Global Organization',
    //                     description: 'To add a new sub-organization, select the current global organization.',
    //                     side: 'top',
    //                     align: 'start',
    //                     doneBtnText: 'Next'
    //                 }
    //             }
    //         ],
    //         onCloseClick: () => {

    //             fourthStepDriver.destroy();

    //             // $('#conf-open').click();
    //         }
    //     });

    //     fourthStepDriver.drive();

    //     $('#org_1').click(function () {

    //         fourthStepDriver.destroy();
    //         $('#addsuborg,#btnCancelOrgCreate').click();
    //         $('#layout2').removeClass('none');
    //         $('#layout32').addClass('none');
    //         setTimeout(() => {
    //             const eighthStepDriverStepDriver = new driver({
    //                 popoverClass: 'driverjs-theme',
    //                 allowClose: true,
    //                 steps: [
    //                     {
    //                         element: '#addsuborg',
    //                         popover: {
    //                             title: 'Click Add Organization',
    //                             description: 'To add a new organization',
    //                             side: 'top',
    //                             align: 'start',
    //                             doneBtnText: 'Next'
    //                         }
    //                     }
    //                 ],
    //                 onCloseClick: () => {


    //                 }
    //             });
    //             eighthStepDriverStepDriver.drive();
    //             $('#addsuborg').click(function () {
    //                 eighthStepDriverStepDriver.destroy();
    //                 setTimeout(() => {
    //                     const tenthStepDriver = new driver({
    //                         popoverClass: 'driverjs-theme',
    //                         allowClose: true,
    //                         steps: [
    //                             {
    //                                 element: '#txtorgname',
    //                                 popover: {
    //                                     title: 'Here add the name of the Organization',
    //                                     description: 'Add the name and click on Create Organization Button',
    //                                     side: 'top',
    //                                     align: 'start',
    //                                     doneBtnText: 'Next'
    //                                 }
    //                             }
    //                         ],
    //                         onCloseClick: () => {

    //                             fourthStepDriver.destroy();

    //                             // $('#conf-open').click();
    //                         }
    //                     });
    //                     tenthStepDriver.drive();
    //                     $('#txtorgname').click(function () {
    //                         tenthStepDriver.destroy();
    //                     });
    //                 }, 2000)
    //             });


    //             $('#btnCreateOrg').click(function () {
    //                 if ($('#txtorgname').val() != '' || $('#txtorgname').val() != null) {
    //                     $('#modalOrgCreate').toggleClass('open');
    //                     $('.modal-backdrop').toggleClass('open');
    //                     $('#org_11.real').text($('#txtorgname').val());
    //                     sessionStorage.setItem('orgName', $('#txtorgname').val());
    //                     setTimeout(() => {
    //                         const lastDriver = new driver({
    //                             popoverClass: 'driverjs-theme',
    //                             allowClose: true,
    //                             steps: [
    //                                 {
    //                                     element: '#org_11.real',
    //                                     popover: {
    //                                         title: 'Added Organization name will appear here',
    //                                         description: '',
    //                                         side: 'top',
    //                                         align: 'start',
    //                                         doneBtnText: 'Next'
    //                                     }
    //                                 }
    //                             ],
    //                             onCloseClick: () => {



    //                                 // $('#conf-open').click();
    //                             }
    //                         });

    //                         lastDriver.drive();
    //                         setTimeout(() => {
    //                             lastDriver.destroy();
    //                             $('#conf-open').click();

    //                             const tutuStepDriver = new driver({
    //                                 popoverClass: 'driverjs-theme',
    //                                 allowClose: true,
    //                                 steps: [
    //                                     {
    //                                         element: '#system-management',
    //                                         popover: {
    //                                             title: 'c',
    //                                             description: 'Select the system management from the dropdown',
    //                                             side: 'top',
    //                                             align: 'start',
    //                                             doneBtnText: 'Next'
    //                                         }
    //                                     }
    //                                 ],
    //                                 onCloseClick: () => {


    //                                 }
    //                             });

    //                             tutuStepDriver.drive();
    //                         }, 5000)
    //                     }, 2000)
    //                 }

    //             });
    //         }, 3000)

    //     });
    // }, 2000)




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
                    <span>Info About Organization Management</span>
                </li>
                <li data-step="1" class="step-item">
                    <i class="far fa-square"></i>
                    <span>Add Organization</span>
                </li>
                <li data-step="2" class="step-item">
                    <i class="far fa-square"></i>
                    <span>Add Organization name</span>
                </li>

              
                 <li data-step="3" class="step-item">
                    <i class="far fa-square"></i>
                    <span>Added Organization name will appear here</span>
                </li>
                 <li data-step="4" class="step-item">
                    <i class="far fa-square"></i>
                    <span>System Management</span>
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
   

    const driverObj = new driver({
        popoverClass: 'driverjs-theme welcome-popup',
        allowClose: true,
        overlayClickNext: false,
        showProgress: true,
        progressText: 'Step {{current}} of {{total}}',
        steps: [
            {
                popover: {
                    title: '',
                    description: 'Let’s get started by going to create your organizations and systems in Q-Compliance.  These represent your scopes or accreditation boundaries for your compliance activities. Q-Compliance allows you to create organization hierarchies to any level of breadth and depth and any number of systems in each of those organizations.',
                    side: 'center',
                    align: 'center',
                    doneBtnText: 'Next',
                    showButtons: ['close', 'next'],
                    className: 'wide-popup'
                }
            },
            {
                element: '#addsuborg',
                popover: {
                    title: 'Add Organization',
                    description: '',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Next',
                    showButtons: ['close', 'previous', 'next']
                }
            },
            {
                element: '#modalOrgCreate',
                popover: {
                    title: 'Add Organization name',
                    description: 'Hit the create organization Button',
                    side: 'top',
                    align: 'start',
                    prevBtnText: 'Previous',
                    closeBtnText: 'Close',
                    showButtons: ['close', 'previous','next']
                }
            },
            {
                element: '#org_11.real',
                popover: {
                    title: 'Added Organization name will appear here',
                    description: '',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Next',
                    showButtons: ['close', 'previous', 'next']
                }
            },
            {
                element: '#system-management',
                popover: {
                    title: 'Select the System Management',
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
            const progressBox = document.querySelector('#tourProgressBox');
            const steps = progressBox.querySelectorAll('.step-item');
            // Mark all steps up to current step as completed
            steps.forEach((stepItem, index) => {
                if (index < currentStep) {
                    stepItem.classList.add('completed');
                }
            });
            sessionStorage.setItem('highlightStep', currentStep);
            if(currentStep === 4){
               if(!$('#conf-1-opener').hasClass('open')){
                $('#conf-1-opener').addClass('open')
               }
            }
          
        
        },
        onCloseClick: () => {
            driverObj.destroy();
        },
        onPrevClick: (element, step, opts) => {
                        const currentStep = driverObj.getActiveIndex();

            if (currentStep > 0) {
                if (currentStep === 4) { // Going from 5th to 4th step
                    $('#conf-open').click();
                    setTimeout(() => {
                        driverObj.drive(currentStep - 1);
                    }, 500);
                }
                else if (currentStep === 3) { // Going from 4th to 2nd step (skipping 3rd)
                    driverObj.drive(1); // Drive to 2nd step (index 1)
                }
                else if (currentStep === 2) {
                    $('#btnCancelOrgCreate').click();
                }
                else {
                    driverObj.drive(currentStep - 1);
                }
            }
        },
        onNextClick: (element, step, opts) => {
            const currentStep = driverObj.getActiveIndex();
           
            if (currentStep === 0) {
                driverObj.drive(currentStep + 1);
            }
            else if (currentStep === 1) {
                const addSubOrgButton = document.querySelector('#addsuborg');
                if (addSubOrgButton) {
                    addSubOrgButton.click();
                    setTimeout(() => {
                        driverObj.drive(2);
                    }, 500);
                }
            }
            else if (currentStep === 2) {
                const orgNameInput = $('#txtorgname').val();
                if (orgNameInput && orgNameInput.trim() !== '') {
                    // Save to session storage
                    sessionStorage.setItem('orgName', orgNameInput);
                    // Update the UI
                    $('#org_11.real').text(orgNameInput);
                    // Close the modal
                    $('#btnCancelOrgCreate').click();
                    
                    setTimeout(() => {
                        driverObj.drive(3);
                    }, 500);
                }
                // If input is empty, don't proceed to next step
            }
            else if (currentStep === 3) {
                $('#conf-open').click();
                setTimeout(() => {
                    driverObj.drive(4);
                }, 500);
            }else if(currentStep === 4){
                window.location.href = '/system-management.html';
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
            }, 7000); // 10 seconds delay
        }
    });
    const progressBox = createTourProgressBox();

    // Start the tour
    driverObj.drive();
    const steps = progressBox.querySelectorAll('.step-item');

    steps.forEach(step => {
        step.addEventListener('click', () => {
            const stepIndex = parseInt(step.dataset.step);
            if(stepIndex === 2){
                driverObj.drive(1);
            }else{
            driverObj.drive(stepIndex);
            }
        });
    });
    $('#btnCreateOrg').click(function() {
        const orgNameInput = $('#txtorgname').val();
        if (orgNameInput && orgNameInput.trim() !== '') {
            // Save to session storage
            sessionStorage.setItem('orgName', orgNameInput);
            
            // Update the UI
            $('#org_11.real').text(orgNameInput);
            
            // Close the modal
            $('#btnCancelOrgCreate').click();
            
            // Proceed to next step in the tour
            setTimeout(() => {
                driverObj.drive(3);
            }, 500);
        }
    });
    $('#addsuborg').click(function(){
        driverObj.drive(2);
    });
    $('#btnCancelOrgCreate').click(function(){
        driverObj.destroy();
    });
});
function scrollToElement(element) {
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth', // Smooth scrolling effect
            block: 'center',   // Align the element to the center of the viewport
            inline: 'nearest'  // Maintain horizontal alignment
        });
    } else {
        console.warn('Element not found to scroll to.');
    }
}