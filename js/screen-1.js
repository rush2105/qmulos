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

    // $('#sys-overview-dropdown,#ivc-control').unbind('click');
});


const alertStep = [1,2,3];
const driver = window.driver.js.driver;
let driverObj;
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
                    <span>Welcome</span>
                </li>
                <li data-step="1" class="step-item">
                    <i class="far fa-square"></i>
                    <span>Overview</span>
                </li>
                <li data-step="2" class="step-item">
                    <i class="far fa-square"></i>
                    <span>Configuration Dropdown</span>
                </li>
                <li data-step="3" class="step-item">
                    <i class="far fa-square"></i>
                    <span>Compliance Indicators</span>
                </li>
                <li data-step="4" class="step-item">
                    <i class="far fa-square"></i>
                    <span>Data Sources</span>
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
    $('#conf-open').click(function (e) {
        driverObj.destroy();
        driverObj.drive(3);
     });
     $('#inner-sel').click(function (e) {
        driverObj.destroy();
        driverObj.drive(4);
     });
    const driverObj = new driver({
        popoverClass: 'driverjs-theme welcome-popup',
        allowClose: true,
        overlayClickNext: false,
        overlayOpacity: 0,
        showProgress: true,
        progressText: 'Step {{current}} of {{total}}',
        steps: [
            {
                popover: {
                    title: 'Welcome',
                    description: 'Thank you for joining this interactive demonstration of Q-Compliance by Qmulos. These prompts will guide you through several common tasks within Q-Compliance. Please note that some sequences have been shortened for demonstration purposes.',
                    side: 'center',
                    align: 'center',
                    doneBtnText: 'Next',
                    showButtons: ['close', 'next'],
                    className: 'wide-popup'
                }
            },
            {
                popover: {
                    title: 'Overview',
                    description: 'Q-Compliance is built on a BigData platform for analytics, automation and scalability, allowing you to take a data driven approach to compliance decisions',
                    side: 'center',
                    align: 'center',
                    doneBtnText: 'Next',
                    showButtons: ['close', 'previous', 'next'],
                    className: 'wide-popup'
                }
            },
            {
                element: '#conf-open',
                popover: {
                    title: 'Configuration Dropdown',
                    description: 'Open the Configuration Dropdown.',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Next',
                    showButtons: ['close', 'previous', 'next']
                }
            },
            {
                element: '#conf-2-opener > li:nth-child(4)',
                popover: {
                    title: 'Compliance Indicators',
                    description: 'Click On Compliance Indicators',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Next',
                    prevBtnText: 'Previous',
                    closeBtnText: 'Close',
                    showButtons: ['close', 'previous', 'next']
                }
            },
            {
                element: '#conf-3-opener li:last-child',
                popover: {
                    title: 'Data Sources',
                    description: 'Click On Data Sources',
                    side: 'top',
                    align: 'start',
                    prevBtnText: 'Previous',
                    closeBtnText: 'Close',
                    doneBtnText: 'Next',
                    showButtons: ['close', 'previous', 'next']  // Add next button
                }
            }
        ],
        onCloseClick: () => {
            driverObj.destroy();
        },
        onDeselected: (element, step) => {
            if (driverObj.getActiveIndex() === driverObj.getSteps().length - 1) {
                // This is the last step, redirect to the next page
                window.location.href = '/data-sources.html';
            }
            
            // Keep the existing tour continuation logic
            setTimeout(() => {
                if (!sessionStorage.getItem('tourCompleted')) {
                    const continueBtn = document.createElement('button');
                    // ... existing continue button code ...
                }
            }, 1000);
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
            if(currentStep === 2){
                if($('#conf-1-opener').hasClass('open')){
                    $('#conf-1-opener').removeClass('open')
                   }
            }

           
            if(currentStep === 3){
                if(!$('#conf-1-opener').hasClass('open')){
                    $('#conf-1-opener').addClass('open')
                   }
               $('#inner-sel').click();

            }
            if(currentStep === 4){
                $('body').addClass('tour-adjusted');
            }else{
                $('body').removeClass('tour-adjusted');
            }
        
        },
        onPrevClick: (element, step, opts) => {
            const currentStep = driverObj.getActiveIndex();
            // sessionStorage.setItem('highlightStep', step.index);

            if (currentStep > 0) {
                if (currentStep === 3) { // If going back from step 5 to 4
                    const backButton = document.querySelector('#backbtc');
                    if (backButton) {
                        backButton.click();
                        setTimeout(() => {
                            driverObj.drive(currentStep - 1);
                        }, 500);
                    }
                } 
                // else if(currentStep === 3){
                //     const confOpenElement = document.querySelector('#conf-open');
                //     if (confOpenElement) {
                //         confOpenElement.click();
                //         setTimeout(() => {
                //             driverObj.drive(currentStep - 1);
                //         }, 500);
                //     }
                // }
                else {
                    driverObj.drive(currentStep - 1);
                }

                
            }
        },
        onNextClick: (element, step, opts) => {
            
            const currentStep = driverObj.getActiveIndex();
            // sessionStorage.setItem('highlightStep', currentStep);
            if (currentStep === 0 || currentStep === 1) {
                driverObj.drive(currentStep + 1);
            }
            else if (currentStep === 2) {
                const confOpenElement = document.querySelector('#conf-open');
                if (confOpenElement) {
                    confOpenElement.click();
                    setTimeout(() => {
                        driverObj.drive(3);
                    }, 500);
                }
            } 
            else if (currentStep === 3) {
                setTimeout(() => {
                                driverObj.drive(4);
                            }, 500);
            }
             else if(currentStep === 4){
                
                if(!$('body').hasClass('tour-adjusted')){
                $('#inner-sel').click();
                }else{
                    window.location.href = 'data-sources.html';
                }
             }
            else{
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
            if(stepIndex === 4){
                driverObj.drive(2);
            }
        });
    });
});
// 

// ... rest of the code ...
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
