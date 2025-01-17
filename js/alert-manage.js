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
document.addEventListener("DOMContentLoaded", function () {
    const driver = window.driver.js.driver;

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
                        showButtons: ['close', 'previous']
                    }
                }
            ],
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
            }
        });

        // Start the tour
        driverObj.drive();
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