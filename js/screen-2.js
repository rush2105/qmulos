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
                element: '#system-managemenet-org',
                popover: {
                    title: 'Select Organization Management',
                    description: 'To add your Organization',
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
        onPrevClick: (element, step, opts) => {
            const currentStep = driverObj.getActiveIndex();
            if (currentStep > 0) {
                if (currentStep === 3) { // If going back from last step
                    const backButton = document.querySelector('#conf-open');
                    if (backButton) {
                        backButton.click();
                        setTimeout(() => {
                            driverObj.drive(currentStep - 1);
                        }, 500);
                    }
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
            else if (currentStep === 2) {
                const confOpenElement = document.querySelector('#conf-open');
                if (confOpenElement) {
                    confOpenElement.click();
                    setTimeout(() => {
                        driverObj.drive(3);
                    }, 500);
                }
            }
        }
    });

    driverObj.drive();
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






