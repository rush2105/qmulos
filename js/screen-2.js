document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            if (!anchor.classList.contains('no-lan')) {
                event.preventDefault();
            }
        });
    });

});

$(document).ready(function () {
    $('#data-select').select2();
 
});
function saveStepToSession(step) {
    sessionStorage.setItem('currentStep', step);
}

// Function to retrieve the current step from sessionStorage
function getStepFromSession() {
    return sessionStorage.getItem('currentStep');
}

// Function to retrigger the Driver.js highlight based on session value
function retriggerHighlight(driverInstance, step) {
    // Check if the current step in session matches the desired step
    const sessionStep = getStepFromSession();
    if (sessionStep && parseInt(sessionStep) === step) {
        driverInstance.drive();
    }
}
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
                    <span>Q-Compliance maps</span>
                </li>
                <li data-step="1" class="step-item">
                    <i class="far fa-square"></i>
                    <span>Control Library</span>
                </li>
                <li data-step="2" class="step-item">
                    <i class="far fa-square"></i>
                    <span>Q-Compliance maps Boxes</span>
                </li>
                <li data-step="3" class="step-item">
                    <i class="far fa-square"></i>
                    <span>Organization Management</span>
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
        overlayOpacity: 0,
        progressText: 'Step {{current}} of {{total}}',
        steps: [
            {
                popover: {
                    title: '',
                    description: 'Q-Compliance maps data from your existing cyber security tool set to compliance visualizations and automations, turning your compliance tool into a cyber security tool. Q-Compliance integrates with any cyber security tool, application, device, and platform from on-premises or in the cloud to provide a real-time single source of truth about your system’s actual security state.',
                    side: 'center',
                    align: 'center',
                    doneBtnText: 'Next',
                    showButtons: ['close', 'next'],
                    className: 'wide-popup'
                }
            },
            {
                element: '#dtc-opener',
                popover: {
                    title: 'You can Select the Control Library from here',
                    description: 'Select the Control Library By selecting from the dropdown',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Next',
                    showButtons: ['close', 'previous', 'next']
                }
            },
            {
                element: '#pct-row',
                popover: {
                    title: '',
                    description: 'Q-Compliance maps data from your existing cyber security tool set to compliance visualizations and automations, turning your compliance tool into a cyber security tool. Q-Compliance integrates with any cyber security tool, application, device, and platform from on-premises or in the cloud to provide a real-time single source of truth about your system’s actual security state.',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Next',
                    showButtons: ['close', 'previous', 'next']
                }
            },
            {
                element: '#system-management-org',
                popover: {
                    title: 'Select Organization Management',
                    description: 'To add your Organization',
                    side: 'top',
                    align: 'start',
                    prevBtnText: 'Previous',
                    closeBtnText: 'Close',
                    showButtons: ['close', 'previous','next'] // Removed 'next' to hide finish button
                }
            }
        ],
        onCloseClick: () => {
            driverObj.destroy();
        },
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
            if(currentStep === 3){
              
               if(!$('#conf-1-opener').hasClass('open')){
                $('#conf-1-opener').addClass('open')
               }
            }
        
        },
        onPrevClick: (element, step, opts) => {
            const currentStep = driverObj.getActiveIndex();
            if (currentStep > 0) {
                if (currentStep === 9) { // If going back from last step
                 
                } else {
                    driverObj.drive(currentStep - 1);
                }
            }
        },
        onNextClick: (element, step, opts) => {
            const currentStep = driverObj.getActiveIndex();

            if (currentStep === 0 || currentStep === 1) {
                driverObj.drive(currentStep + 1);
            }
            else if (currentStep === 10) {
               
            }else{
                driverObj.drive(currentStep + 1);
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

    driverObj.drive();
    const steps = progressBox.querySelectorAll('.step-item');

    steps.forEach(step => {
        step.addEventListener('click', () => {
            const stepIndex = parseInt(step.dataset.step);
            driverObj.drive(stepIndex);
        });
    });
    setTimeout(() => {
        $('#data-select').on('change', function(e) {
            // Check if driver instance exists and trigger third step
         
               driverObj.drive(2); // Index 2 represents the third step
           
        });
       }, 2000);
    $('#dtc-opener').click(function (e) {
       
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






