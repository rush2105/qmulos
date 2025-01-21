document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            if (!anchor.classList.contains('no-lan')) {
                event.preventDefault();
            }
        });
    });

});


document.addEventListener("DOMContentLoaded", function () {
    const orgName = sessionStorage.getItem('orgName');
    if (orgName) {
        $('.selected-mat').text(orgName); // Optionally set it back to the element
    }


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



$(document).ready(function () {




    $('.org-child-new a.btn-pill').click(function () {
        $(this).parent().find('.btn-pill').removeClass('active');
        $(this).addClass('active');
        $('.org-child-new').addClass('partial');
        if ($('.org-child-new .btn-pill.active').length > 1) {
            $('.org-child-new').addClass('full');
            $('#btnSelectOrg.real').addClass('open');
            // openSelecter();
        }
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
                    <span>Select Org/System</span>
                </li>
                <li data-step="1" class="step-item">
                    <i class="far fa-square"></i>
                    <span>Select the Global Organization</span>
                </li>
                <li data-step="2" class="step-item">
                    <i class="far fa-square"></i>
                    <span>Select Your selected Organization</span>
                </li>
                <li data-step="3" class="step-item">
                    <i class="far fa-square"></i>
                    <span>Select System</span>
                </li>
                 <li data-step="4" class="step-item">
                    <i class="far fa-square"></i>
                    <span>Click this to Select Organization and System</span>
                </li>
                 <li data-step="5" class="step-item">
                    <i class="far fa-square"></i>
                    <span>Next, select a baseline to apply to the system, if applicable,</span>
                </li>
                 <li data-step="6" class="step-item">
                    <i class="far fa-square"></i>
                    <span>Now Select an overlay. Then hit save changes.</span>
                </li>
                 <li data-step="7" class="step-item">
                    <i class="far fa-square"></i>
                    <span>Standard Controls have been applied to your system</span>
                </li>
                 <li data-step="8" class="step-item">
                    <i class="far fa-square"></i>
                    <span>Current Applicable Controls section</span>
                </li>
                 <li data-step="9" class="step-item">
                    <i class="far fa-square"></i>
                    <span>Individual Control Compliance</span>
                </li>
                 <li data-step="10" class="step-item">
                    <i class="far fa-square"></i>
                    <span>Control Compliance Hub</span>
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
                element: '#btnSelectOrgInitial',
                popover: {
                    title: 'Select Org/System',
                    description: '',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Next',
                    showButtons: ['close', 'next']
                }
            },
            {
                element: '#org_2121',
                popover: {
                    title: 'Select the Global Organization',
                    description: '',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Next',
                    showButtons: ['close', 'previous', 'next']
                }
            },
            {
                element: '#org_11',
                popover: {
                    title: 'Select Your selected Organization',
                    description: '',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Next',
                    showButtons: ['close', 'previous', 'next']
                }
            },
            {
                element: '#sys_55555',
                popover: {
                    title: 'Select System',
                    description: '',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Next',
                    showButtons: ['close', 'previous', 'next']
                }
            },
            {
                element: '#btnSelectOrg.real',
                popover: {
                    title: 'Click this to Select Organization and System',
                    description: '',
                    side: 'top',
                    align: 'start',
                    prevBtnText: 'Previous',
                    closeBtnText: 'Close',
                    showButtons: ['close', 'previous', 'next']
                }
            },
      
           
            {
                element: '#cg-baseline',
                popover: {
                    title: 'Next, select a baseline to apply to the system, if applicable,',
                    description: 'If applicable',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Next',
                    showButtons: ['close', 'previous', 'next']
                }
            },
            {
                element: '#og-wrapps',
                popover: {
                    title: 'Now Select an overlay. Then hit save changes.',
                    description: '',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Next',
                    showButtons: ['close', 'previous', 'next']
                }
            },
            {
             
                popover: {
                    title: '',
                    description: 'We’ve applied a number of standard controls based on the baseline and overlay that you have selected for this system.',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Next',
                    showButtons: ['close', 'previous', 'next'],
                     className: 'wide-popup'
                }
            },
            {
                element: '#controltable',
                popover: {
                    title: 'Current Applicable Controls section',
                    description: '',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Next',
                    showButtons: ['close', 'previous', 'next']
                }
            },
            {
                popover: {
                    title: '',
                    description: 'Now let’s look at an individual control for your system by navigating to the Control Compliance Hub.',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Next',
                    showButtons: ['close', 'previous', 'next']
                }
            },
            {
                element: '#ivc-cch',
                popover: {
                    title: 'Click Control Compliance Hub',
                    description: '',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Next',
                    showButtons: ['close', 'previous']
                }
            },
            
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
            if (currentStep === 10) { // If going back from last step
                $('#ivc-control').click();
                setTimeout(() => {
                    driverObj.drive(currentStep - 1);
                }, 500);
            }
            else if (currentStep === 6) { // If going back from step 6
                driverObj.drive(0); // Go to step 2 (index 1)
            }
            else {
                driverObj.drive(currentStep - 1);
            }
        },
        onNextClick: (element, step, opts) => {
            const currentStep = driverObj.getActiveIndex();
        //    alert(currentStep);
            if (currentStep === 0) {
                const selectOrgButton = document.querySelector('#btnSelectOrgInitial');
                if (selectOrgButton) {
                    selectOrgButton.click();
                    setTimeout(() => {
                        driverObj.drive(1);
                    }, 500);
                }
            }
            else if (currentStep === 1) {
                const globalOrgButton = document.querySelector('#org_2121');
                if (globalOrgButton) {
                    globalOrgButton.click();
                    setTimeout(() => {
                        driverObj.drive(2);
                    }, 500);
                }
            }
            else if (currentStep === 2) {
                const selectedOrgButton = document.querySelector('#org_11');
                if (selectedOrgButton) {
                    selectedOrgButton.click();
                    setTimeout(() => {
                        driverObj.drive(3);
                    }, 500);
                }
            } else if (currentStep === 3) {
                const sysButton = document.querySelector('#sys_55555');
                if (sysButton) {
                    sysButton.click();
                    setTimeout(() => {
                        driverObj.drive(4);
                    }, 500);
                }
            }
            else if (currentStep === 4) {
               
                $('#btnSelectOrg.real').click();
             
                   
                
            }
            else if (currentStep === 7) {
                driverObj.drive(8);
            }
            else if (currentStep === 8) {
                driverObj.drive(9);
            }
            else if (currentStep === 9) {
                $('#ivc-control').click();
                driverObj.drive(10);
               
                    // driverObj.drive(11);
                
            }
         
            else if (currentStep === 5) {
                driverObj.drive(6);
               
            }
            else if (currentStep === 6) {
               
                    $('#custombaseselect').val('41');
                
                // Trigger save button click
                $('#btnSaveSystem').click();
                setTimeout(() => {
                    driverObj.drive(7);
                }, 1500);
            }else{
               alert(currentStep);
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
    driverObj.drive();
    const steps = progressBox.querySelectorAll('.step-item');
 
    steps.forEach(step => {
        step.addEventListener('click', () => {
            $('.progress-header').click();
            const stepIndex = parseInt(step.dataset.step);
            if(stepIndex < 5){
                driverObj.drive(0);
            }else if(stepIndex === 5){
                $('#sys-manag-content').removeClass('none');
                driverObj.drive(stepIndex);
            }
            else if(stepIndex === 10){
              if(!$('#ivc-control-data').hasClass('open')){
                $('#ivc-control-data').addClass('open');
              }
                driverObj.drive(stepIndex);
            }
            else{
                driverObj.drive(stepIndex);
            }

        });
    });
    // Manual click handlers
    $('#btnSelectOrgInitial').click(function() {
        setTimeout(() => {
            driverObj.drive(1);
        }, 500);
    });

    $('#org_2121').click(function() {
        setTimeout(() => {
            driverObj.drive(2);
        }, 500);
    });

    $('#org_11').click(function() {
        setTimeout(() => {
            driverObj.drive(3);
        }, 500);
    });
    $('#btnSaveSystem').click(function(){
        $('#custombaseselect').val('41');
        setTimeout(() => {
            driverObj.drive(7);
        }, 500);
    });

    // Add system selection click handler
    $('#sys_55555').click(function() {
        setTimeout(() => {
            driverObj.drive(4);
        }, 500);
    });

    // Add final step click handler
    $('#btnSelectOrg.real').click(function() {
        const orgNames = sessionStorage.getItem('orgName') ?? "Qmulos";

        $('#btnSelectOrgInitial').text(orgNames + ' / ' + 'Windows');
        $('#sys-manag-content').removeClass('none');
        driverObj.destroy();
        setTimeout(() => {
            driverObj.drive(5);
        }, 2000);
            $('#btnCancelOrgSelect').click();
        
    });
});



$(document).ready(function () {
    // $('#btnSaveSystem').click(function () {
    //     if ($('#custombaseselect').val() != '' || $('#custombaseselect').val() != null) {
    //         const driversOne = window.driver.js.driver;
    //         const afterSS = new driversOne({
    //             popoverClass: 'driverjs-theme',
    //             allowClose: true,
    //             steps: [
    //                 {
    //                     element: '#systemattributesrow',
    //                     popover: {
    //                         title: 'Now Explore System Attributes here',
    //                         description: '',
    //                         side: 'top',
    //                         align: 'start',
    //                         doneBtnText: 'Next'
    //                     }
    //                 }
    //             ],

    //         });
    //         setTimeout(() => {
    //             afterSS.drive();
    //             setTimeout(() => {
    //                 afterSS.destroy();
    //                 const afterSSa = new driversOne({
    //                     popoverClass: 'driverjs-theme',
    //                     allowClose: true,
    //                     steps: [
    //                         {
    //                             element: '#view_10017',
    //                             popover: {
    //                                 title: 'Current Applicable Controls',
    //                                 description: '',
    //                                 side: 'top',
    //                                 align: 'start',
    //                                 doneBtnText: 'Next'
    //                             }
    //                         }
    //                     ],

    //                 });
    //                 afterSSa.drive();
    //                 setTimeout(() => {
    //                     afterSSa.destroy();
    //                     const afterSSb = new driversOne({
    //                         popoverClass: 'driverjs-theme',
    //                         allowClose: true,
    //                         steps: [
    //                             {
    //                                 element: '#system_association_title',
    //                                 popover: {
    //                                     title: 'Asset Inventory ',
    //                                     description: '',
    //                                     side: 'top',
    //                                     align: 'start',
    //                                     doneBtnText: 'Next'
    //                                 }
    //                             }
    //                         ],

    //                     });
    //                     afterSSb.drive();
    //                     setTimeout(() => {
    //                         afterSSb.destroy();
    //                         $('#ivc-control').click();
    //                         const afterSSc = new driversOne({
    //                             popoverClass: 'driverjs-theme',
    //                             allowClose: true,
    //                             steps: [
    //                                 {
    //                                     element: '#ivc-cch',
    //                                     popover: {
    //                                         title: 'Now click on Control Compliance Hub ',
    //                                         description: '',
    //                                         side: 'top',
    //                                         align: 'start',
    //                                         doneBtnText: 'Next'
    //                                     }
    //                                 }
    //                             ],

    //                         });
    //                         afterSSc.drive();

    //                     }, 3000)
    //                 }, 3000);
    //             }, 4000)


    //         }, 1500)
    //     }
    // })



})