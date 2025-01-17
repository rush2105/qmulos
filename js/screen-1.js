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

document.addEventListener("DOMContentLoaded", function () {
    $('#conf-open').click(function (e) {
        driverObj.destroy();
        driverObj.drive(3);
     });
    const driverObj = new driver({
        popoverClass: 'driverjs-theme welcome-popup',
        allowClose: true,
        overlayClickNext: false,
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
                    showButtons: ['close', 'previous'] // Removed 'next' to hide finish button
                }
            }
        ],
        onCloseClick: () => {
            driverObj.destroy();
        },
        onHighlightStarted: (element,step) => {
            const currentStep = driverObj.getActiveIndex();

            sessionStorage.setItem('highlightStep', currentStep);
       

            // Store current step in session storage when each step starts
            // const currentStep = driver.currentStep;
            // sessionStorage.setItem('highlightStep', currentStep);
        },
        onPrevClick: (element, step, opts) => {
            const currentStep = driverObj.getActiveIndex();
            // sessionStorage.setItem('highlightStep', step.index);

            if (currentStep > 0) {
                if (currentStep === 4) { // If going back from step 5 to 4
                    const backButton = document.querySelector('#backbtc');
                    if (backButton) {
                        backButton.click();
                        setTimeout(() => {
                            driverObj.drive(currentStep - 1);
                        }, 500);
                    }
                } 
                else if(currentStep === 3){
                    const confOpenElement = document.querySelector('#conf-open');
                    if (confOpenElement) {
                        confOpenElement.click();
                        setTimeout(() => {
                            driverObj.drive(currentStep - 1);
                        }, 500);
                    }
                }
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
                const innerSelElement = document.querySelector('#inner-sel');
                if (innerSelElement) {
                    innerSelElement.click();
                    setTimeout(() => {
                        driverObj.drive(4);
                    }, 500);
                }
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
            }, 10000); // 10 seconds delay
        }
    });

    driverObj.drive();
});


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