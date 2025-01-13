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
    //                                         element: '#system-managemenet',
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

document.addEventListener("DOMContentLoaded", function () {
    const driver = window.driver.js.driver;

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
                element: '#system-managemenet',
                popover: {
                    title: 'Select the System Management',
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
            }
        }
    });

    // Start the tour
    driverObj.drive();
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