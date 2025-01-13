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
                element: '#custombaseselect',
                popover: {
                    title: 'Select Overlay and Hit Save changes',
                    description: '',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Next',
                    showButtons: ['close', 'previous', 'next']
                }
            },
            {
                element: '#systemattributesrow',
                popover: {
                    title: 'Now Explore System Attributes here',
                    description: '',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Next',
                    showButtons: ['close', 'previous', 'next']
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
           alert(currentStep);
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
                const selectOrgButton = document.querySelector('#btnSelectOrg');
                if (selectOrgButton) {
                    selectOrgButton.click();
                    // Execute the script after clicking
                    const orgNames = sessionStorage.getItem('orgName');
                    $('#btnSelectOrgInitial').text(orgNames + ' / ' + 'Windows');
                    $('#sys-manag-content').removeClass('none');
                    $('#btnCancelOrgSelect').click();
                    setTimeout(() => {
                        driverObj.drive(5);
                    }, 500);
                }
            }
            else if (currentStep === 4) {
                $('#btnSelectOrg.real').click();
                alert('clicked');
            }
            else if (currentStep === 5) {
                // $('#btnCancelOrgSelect').click();
               
            }
            else if (currentStep === 6) {
                // $('#btnCancelOrgSelect').click();
                // Check if custombaseselect has a value
                const selectValue = $('#custombaseselect').val();
                if (!selectValue || selectValue === '') {
                    // If no value, set it to '41'
                    $('#custombaseselect').val('41');
                }
                // Trigger save button click
                $('#btnSaveSystem').click();
                setTimeout(() => {
                    driverObj.drive(7);
                }, 8500);
            }else{
                alert(currentStep);
            }
        }
    });
  

    // Start the tour
    driverObj.drive();

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

    // Add system selection click handler
    $('#sys_55555').click(function() {
        setTimeout(() => {
            driverObj.drive(4);
        }, 500);
    });

    // Add final step click handler
    $('#btnSelectOrg.real').click(function() {
        const orgNames = sessionStorage.getItem('orgName');
        $('#btnSelectOrgInitial').text(orgNames + ' / ' + 'Windows');
        $('#sys-manag-content').removeClass('none');
        driverObj.destroy();
        setTimeout(() => {
            driverObj.drive(6);
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