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

    $('#sys-overview-dropdown,#ivc-control').unbind('click');
});


const alertStep = [1,2,3];
const driver = window.driver.js.driver;
// document.addEventListener("DOMContentLoaded", function () {


   
//     // Create an instance of the Driver.js object
//     const driverObj = new driver({
//         popoverClass: 'driverjs-theme',
//         allowClose: true,
//         steps: [
//             {
//                 popover: {
//                     title: 'Welcome',
//                     description: 'Welcome to Qmulos Product tour!',
//                     side: 'center',
//                     align: 'center',
//                     doneBtnText: 'Next',


//                 },
//             },
//              {
//                 element: '#conf-open',
//                 popover: {
//                     title: 'Step 1',
//                     description: 'Click on Configuration Dropdown.',
//                     side: 'top',
//                     align: 'start'
                  
//                 }
//             },
           
//         ],
//     onCloseClick: () => {
//         // alert('boom');
   
//         driverObj.destroy();
//         setTimeout(() => {
//             firstStepDriver.drive();
//             scrollToElement(confOpenElement);
//         },1500)
       
//     },
//     });
// driverObj.drive();
// const firstStepDriver = new driver({
//     popoverClass: 'driverjs-theme',
//     allowClose: true,
//     steps: [
//         {
//             element: '#conf-open',
//             popover: {
//                 title: 'Step 1',
//                 description: 'Open the Configuration Dropdown.',
//                 side: 'top',
//                 align: 'start',
//                 doneBtnText: 'Next'
//             }
//         }
//     ],
//     onCloseClick: () => {
//         console.log('Second step tour closed');
//     }
// });


// // Add click event listener to #conf-open
// const confOpenElement = document.querySelector('#conf-open');
// if (confOpenElement) {
//     confOpenElement.addEventListener('click', function () {
//         // Create a new driver instance for the second step
//         const secondStepDriver = new driver({
//             popoverClass: 'driverjs-theme',
//             steps: [
//                 {
//                     element: '#conf-2-opener > li:nth-child(4)',
//                     popover: {
//                         title: 'Step 2',
//                         description: 'Click On Compliance Indicators',
//                         side: 'top',
//                         align: 'start',
//                         doneBtnText: 'Next'
//                     }
//                 }
//             ],
//             onCloseClick: () => {
//                 console.log('Second step tour closed');
//             }
//         });

//         // Start the second step highlight
//         setTimeout(() => {
//             secondStepDriver.drive();
//         },1000)
       
//     });
// }


// const innerSel = document.querySelector('#inner-sel');
// if (innerSel) {
//     innerSel.addEventListener('click', function () {
//         // Create a new driver instance for the second step
//         const thirdStepDriver = new driver({
//             popoverClass: 'driverjs-theme',
//             steps: [
//                 {
//                     element: '#conf-3-opener li:last-child',
//                     popover: {
//                         title: 'Step 2',
//                         description: 'Click On Data Sources',
//                         side: 'top',
//                         align: 'start',
//                         doneBtnText: 'Next'
//                     }
//                 }
//             ],
//             onCloseClick: () => {
//                 console.log('Second step tour closed');
//             }
//         });

//         // Start the second step highlight
//         setTimeout(() => {
//             thirdStepDriver.drive();
//         },1000)
       
//     });
// }



//         // First, drive the initial tour
        
// });
// ... existing code ...


// ... rest of the existing code remains unchanged ...
// ... rest of the existing code remains unchanged ...
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
        onPrevClick: (element, step, opts) => {
            const currentStep = driverObj.getActiveIndex();
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