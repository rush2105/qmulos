$(document).ready(function () {




    $('.org-child-new a.btn-pill').click(function () {
        $(this).parent().find('.btn-pill').removeClass('active');
        $(this).addClass('active');
        $('.org-child-new').addClass('partial');
        if ($('.org-child-new .btn-pill.active').length > 1) {
            $('.org-child-new').addClass('full');
            $('#btnSelectOrg.real').addClass('open');
            $('#btnSelectOrg').removeAttr('disabled');
            // openSelecter();
        }
    });
});
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
    const driver = window.driver.js.driver;


    const fourthStepDriver = new driver({
        popoverClass: 'driverjs-theme',
        allowClose: true,
        steps: [
            {
                element: '#btnSelectOrgInitial',
                popover: {
                    title: 'Click to Select Organization and System again',
                    description: '',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Next'
                }
            }
        ],
        onCloseClick: () => {


        }
    });
    setTimeout(() => {
        fourthStepDriver.drive();
        $('#btnSelectOrgInitial').click(function () {
            fourthStepDriver.destroy();
            getOrganizationdetails();
        });
    }, 3000);


});



function getOrganizationdetails() {
    const drivera = window.driver.js.driver;

    const fifthStepDriver = new drivera({
        popoverClass: 'driverjs-theme',
        allowClose: true,
        steps: [
            {
                element: '#org_2121',
                popover: {
                    title: 'Select Organization and System',
                    description: '',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Next'
                }
            }
        ],
    });
    setTimeout(() => {
        fifthStepDriver.drive();

        const sisthStepDriver = new drivera({
            popoverClass: 'driverjs-theme',
            allowClose: true,
            steps: [
                {
                    element: '.org-child-new',
                    popover: {
                        title: 'Select Organization and System and Hit the Select button',
                        description: '',
                        side: 'top',
                        align: 'start',
                        doneBtnText: 'Next'
                    }
                }
            ],
        });
        setTimeout(() => {
            sisthStepDriver.drive();
            setTimeout(() => {
                sisthStepDriver.destroy();

                const seventhStepDriver = new drivera({
                    popoverClass: 'driverjs-theme',
                    allowClose: true,
                    steps: [
                        {
                            element: '#btnSelectOrg',
                            popover: {
                                title: 'After saving Dashboard will populate the content',
                                description: '',
                                side: 'top',
                                align: 'start',
                                doneBtnText: 'Next'
                            }
                        }
                    ],
                });
                seventhStepDriver.drive();
                $('#btnSelectOrg').click(function () {
                    seventhStepDriver.destroy();
                    $('#btnCancelOrgSelect').click();
                    $('.boomer').addClass('open');
                    $('.boomer-hide').addClass('open');
                    const elevanStepDriver = new drivera({
                        popoverClass: 'driverjs-theme',
                        allowClose: true,
                        steps: [
                            {
                                element: '#sfour-rock',
                                popover: {
                                    title: 'Explore All records here',
                                    description: '',
                                    side: 'top',
                                    align: 'start',
                                    doneBtnText: 'Next'
                                }
                            }
                        ],
                    });
                    setTimeout(() => {
                        elevanStepDriver.drive();
                    }, 2000);

                    const twelveStepDriver = new drivera({
                        popoverClass: 'driverjs-theme',
                        allowClose: true,
                        steps: [
                            {
                                element: '#ami-indi',
                                popover: {
                                    title: 'Click to get details of the selected record',
                                    description: '',
                                    side: 'top',
                                    align: 'start',
                                    doneBtnText: 'Next'
                                }
                            }
                        ],
                    });
                    setTimeout(() => {
                        elevanStepDriver.destroy();
                        twelveStepDriver.drive();
                        $('#ami-indi').click(function () {
                            twelveStepDriver.destroy();
                            const ttinStepDriver = new drivera({
                                popoverClass: 'driverjs-theme',
                                allowClose: true,
                                steps: [
                                    {
                                        element: '#amo-indi',
                                        popover: {
                                            title: 'Account Management over time by App',
                                            description: 'lClick on the chart to get details of the selected record',
                                            side: 'top',
                                            align: 'start',
                                            doneBtnText: 'Next'
                                        }
                                    }
                                ],
                            });
                            ttinStepDriver.drive();
                            setTimeout(() => {
                                ttinStepDriver.destroy();
                                securityLevel();
                            },2000)
                        });
                    }, 2000);
                    
                });
            },4500);
        }, 2000)

    }, 1500);

}

function securityLevel(){
    
    const driverd = window.driver.js.driver;
    const fotinStepDriver = new driverd({
        popoverClass: 'driverjs-theme',
        allowClose: true,
        steps: [
            {
                element: '#panel_3_2',
                popover: {
                    title: 'Check all Security Scan Statistics',
                    description: '',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Next'
                }
            }
        ],
    });
    fotinStepDriver.drive();

        setTimeout(() => {  

            fotinStepDriver.destroy();
            $('#singlevalue.special-item').click();
            
            const sixinStepDriver = new driverd({
                popoverClass: 'driverjs-theme',
                allowClose: true,
                steps: [
                    {
                        element: '#qc-compliance-btttn',
                        popover: {
                            title: 'Click to create Q compliance',
                            description: '',
                            side: 'top',
                            align: 'start',
                            doneBtnText: 'Next'
                        }
                    }
                ],
            });
            sixinStepDriver.drive();
        },2500);

 

}
$(document).ready(function () {
    $('.tooltip-target').tooltipster({
        content: function () {
            console.log($(this)); // Check the jQuery object
            var content = $(this).attr('data-tooltip-content'); // Get the data attribute
            console.log('Tooltip content:', content); // Log the content
            return content ? content : 'No content available'; // Fallback if content is undefined
        },
        trigger: 'click',
        position: 'top',
        theme: 'tooltipster-light',
    });

    $('#singlevalue.special-item').click(function () {
     $(this).toggleClass('open');

    });
});
