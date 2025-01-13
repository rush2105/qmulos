

document.addEventListener("DOMContentLoaded", function () {
    const driver = window.driver.js.driver;


    const fourthStepDriver = new driver({
        popoverClass: 'driverjs-theme',
        allowClose: true,
        steps: [
            {
                element: '#evidence_assigned',
                popover: {
                    title: 'Table of Assigned Evidence Data',
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
    }, 2000)
    $('#evidence_assigned').click(function () {
        fourthStepDriver.destroy();

    });
    setTimeout(() => {
        $('#evidence_assigned').click();
        const fifthStepDriver = new driver({
            popoverClass: 'driverjs-theme',
            allowClose: true,
            steps: [
                {
                    element: '#evidence_management',
                    popover: {
                        title: 'Selection of Evidence Managent',
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
        fifthStepDriver.drive();
        setTimeout(() => {
            fifthStepDriver.destroy();
            const sixthStepDriver = new driver({
                popoverClass: 'driverjs-theme',
                allowClose: true,
                steps: [
                    {
                        element: '#evidenceDropdown',
                        popover: {
                            title: 'Selection of Evidence from Dropdown',
                            description: 'Select the previously uploaded evidence',
                            side: 'top',
                            align: 'start',
                            doneBtnText: 'Next'
                        }
                    }
                ],
                onCloseClick: () => {


                }
            });
            sixthStepDriver.drive();
            $('#evidenceDropdown').change(function () {
                sixthStepDriver.destroy();
                $(this).val('prev');


                const seventhStepDriver = new driver({
                    popoverClass: 'driverjs-theme',
                    allowClose: true,
                    steps: [
                        {
                            element: '#evd-btn',
                            popover: {
                                title: 'Hit the Assign Button',
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
                seventhStepDriver.drive();
                $('#evd-btn').click(function () {

                    seventhStepDriver.destroy();

                    const eighthStepDriver = new driver({
                        popoverClass: 'driverjs-theme',
                        allowClose: true,
                        steps: [
                            {
                                element: '#assessment_status',
                                popover: {
                                    title: 'Click on Assessment status',
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
                    eighthStepDriver.drive();
                    $('#assessment_status').click(function () {
                        eighthStepDriver.destroy();
                        setTimeout(() => {

                            const nineStepDriver = new driver({
                                popoverClass: 'driverjs-theme',
                                allowClose: true,
                                steps: [
                                    {
                                        element: '#ac-status-flex',
                                        popover: {
                                            title: 'Check Other Assessment status',
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
                            nineStepDriver.drive();
                            setTimeout(() => {

                                const tenStepDriver = new driver({
                                    popoverClass: 'driverjs-theme',
                                    allowClose: true,
                                    steps: [
                                        {
                                            element: '#assessment-new-status',
                                            popover: {
                                                title: 'Select the New Assesment status from the dropdown',
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
                                tenStepDriver.drive();
                                $('#assessment-new-status').change(function () {
                                    tenStepDriver.destroy();
                                    $(this).val('Failed');
                                    const elevDrive = new driver({
                                        popoverClass: 'driverjs-theme',
                                        allowClose: true,
                                        steps: [
                                            {
                                                element: '#modalAssessmentDetail #assessment_update_btn',
                                                popover: {
                                                    title: 'Hit the save button to save the status of Assessment',
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
                                    elevDrive.drive();
                                    $('#modalAssessmentDetail #assessment_update_btn').click(function () {
                                        elevDrive.destroy();
                                        assesStatus();
                                    })
                                })
                            }, 2000)
                        }, 2000)
                    })
                })
            });

        }, 2000)
    }, 6800)

});
function assesStatus() {
    const drivera = window.driver.js.driver;

    const fretnStepDriver = new drivera({
        popoverClass: 'driverjs-theme',
        allowClose: true,
        steps: [
            {
                element: '#assessment_status',
                popover: {
                    title: 'Saved Assestment status will show up here',
                    description: 'Red Indicate the Failed status, Green Indicate the Passes',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Next'
                }
            }
        ],
    });
    fretnStepDriver.drive();
    setTimeout(() => {
        fretnStepDriver.destroy();

        const srenthStepDriver = new drivera({
            popoverClass: 'driverjs-theme',
            allowClose: true,
            steps: [
                {
                    element: '#dabba-box',
                    popover: {
                        title: 'Based on save assesment status it will change here',
                        description: 'Red Indicate the Failed status, Green Indicate the Passes',
                        side: 'top',
                        align: 'start',
                        doneBtnText: 'Next'
                    }
                }
            ],
        });
        srenthStepDriver.drive();
        setTimeout(() => {
            
            const erethStepDriver = new drivera({
                popoverClass: 'driverjs-theme',
                allowClose: true,
                steps: [
                    {
                        element: '#sys-overview-dropdown',
                        popover: {
                            title: 'Click to open Dropdown',
                            description: 'And select the System Authorization',
                            side: 'top',
                            align: 'start',
                            doneBtnText: 'Next'
                        }
                    }
                ],
            });
            erethStepDriver.drive();
            $('#sys-overview-dropdown').click(function(){
                erethStepDriver.destroy();
                const brathhStepDriver = new drivera({
                    popoverClass: 'driverjs-theme',
                    allowClose: true,
                    steps: [
                        {
                            element: '#sys-highliss',
                            popover: {
                                title: 'Click System Auhtorization',
                                description: '',
                                side: 'top',
                                align: 'start',
                                doneBtnText: 'Next'
                            }
                        }
                    ],
                });
                brathhStepDriver.drive();
            })
        },2000)
    }, 2500)


}

$(document).ready(function () {
    $('#evidence-assign').submit(function (e) {
        e.preventDefault();
    })
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
