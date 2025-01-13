document.addEventListener("DOMContentLoaded", function () {
    const driver = window.driver.js.driver;

    // Create an instance of the Driver.js object
    const driverObj = new driver({
        // showProgress: true,
        //  overlayColor: '#007a33',
        //  allowClose: false,
        popoverClass: 'driverjs-theme',
        showButtons: true, // Ensures buttons are displayed
        steps: [
            {
                popover: {
                    title: 'Welcome',
                    description: 'Welcome to Qmulos Product toor ! Click Next to start the tour.',
                    side: 'center',
                    align: 'center',
                    doneBtnText: 'Next',
                }
            },
            {
                element: '#conf-open',
                popover: {
                    title: 'Step 1',
                    description: 'Open the Configuration Dropdown.',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Next'
                }
            },
            {
                element: '#conf-2-opener > li:nth-child(4)',
                popover: {
                    title: 'Step 2',
                    description: 'Click On Compliance Indicators',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Next'
                }
            },
            {
                element: '#conf-3-opener li:last-child',
                popover: {
                    title: 'Step 3',
                    description: 'Click On Data Sources.',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Next'
                }
            },
            {
                element: '#toggle-e38b4cf5-642c-428d-8e72-12ab28e3650a',
                popover: {
                    title: 'Step 4',
                    description: 'Select Control Library from Dropdown',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Finish'
                }
            },
            {
                element: '.ff-div-highlights',
                popover: {
                    title: 'Step 5',
                    description: 'Select Any Control Source',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Finish'
                }
            },
            {
                element: '#system-managemenet',
                popover: {
                    title: 'Step 6',
                    description: 'Click System Organization.',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Click'
                }
            },
            {
                element: '#btnSelectOrgInitial',
                popover: {
                    title: 'Step 7',
                    description: 'Click Select Organization and System',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Click'
                }
            },
            {
                element: '#org_2121',
                popover: {
                    title: 'Step 8',
                    description: 'Select Any Global Organization',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Click'
                }
            },
            {
                element: '#btnSelectOrg.real',
                popover: {
                    title: 'Step 9',
                    description: 'Click "Select Organization and System"',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Click'
                }
            },
            {
                element: '#sys_55555',
                popover: {
                    title: 'Step 10',
                    description: 'Select System',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Click'
                }
            },
            {
                element: '#sys-manag-content',
                popover: {
                    title: 'Step 11',
                    description: 'Compliance Settings',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Click'
                }
            },

            {
                element: '#custombaseselect',
                popover: {
                    title: 'Step 12',
                    description: 'Select Overlay',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Click'
                }
            },
            {
                element: '#controltable-body-9891',
                popover: {
                    title: 'Step 13',
                    description: 'List of Current Applicable Controls',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Click'
                }
            },
            {
                element: '#ivc-cch',
                popover: {
                    title: 'Step 14',
                    description: 'Open Control Compliance Hub from The Investigate Controls',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Click'
                }
            },
            {
                element: '#btnSelectOrgInitial.cch',
                popover: {
                    title: 'Step 15',
                    description: 'Select Organization and System',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Click'
                }
            },
            {
                element: '#modalOrgSelect .org-child-new',
                popover: {
                    title: 'Step 16',
                    description: 'Select Organization and System',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Click'
                }
            },
            {
                element: '#modalOrgSelect.sssss #btnSelectOrg',
                popover: {
                    title: 'Step 17',
                    description: 'Click on selection',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Click'
                }
            },
            {
                element: '#ami-indi',
                popover: {
                    title: 'About Account Management Indicator',
                    description: 'Description',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Click'
                }
            },
            {
                element: '#amo-indi',
                popover: {
                    title: 'ACCOUNT MANAGEMENT OVER TIME BY App',
                    description: 'Description',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Click'
                }
            },

            {
                element: '#top-action-indi',
                popover: {
                    title: 'Top Account Managers by Action',
                    description: 'Description',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Click'
                }
            },
            {
                element: '#top-indi',
                popover: {
                    title: 'Top Actions by Account Type',
                    description: 'Description',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Click'
                }
            },

            {
                element: '#acc-last-month',
                popover: {
                    title: 'Accounts Created Compared to Last Month',
                    description: 'Description',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Click'
                }
            },

            {
                element: '#acc-delete-last',
                popover: {
                    title: 'Accounts Deleted Compared to Last Month',
                    description: 'Description',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Click'
                }
            },
            {
                element: '#acc-disable-last',
                popover: {
                    title: 'Accounts Disabled Compared to Last Month',
                    description: 'Description',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Click'
                }
            },
            {
                element: '#singlevalue.special-item',
                popover: {
                    title: 'Accounts Disabled Compared to Last Month',
                    description: 'Description',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Click'
                }
            },
            {
                element: '#qc-compliance-btttn',
                popover: {
                    title: 'Create Q-Compliance',
                    description: 'By clicking this Create Q-Compliance',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Click'
                }
            },



            {
                element: '#alert-managemenet-title',
                popover: {
                    title: 'Alert Managemenet',
                    description: '',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Click'
                }
            },
            {
                element: '#a-control_status_alert_action-check',
                popover: {
                    title: 'Set Control Status',
                    description: 'By clicking the toggle ',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Click'
                }
            },
            {
                element: '#selected-reviews',
                popover: {
                    title: 'Select the status',
                    description: 'Select the value from the dropdown ',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Click'
                }
            },
            {
                element: '#ttc-save',
                popover: {
                    title: 'Save the Process',
                    description: ' ',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Click'
                }
            },


            {
                element: '#ssl-status',
                popover: {
                    title: 'SECURITY SCAN STATISTICS FOR ALL CONTROL',
                    description: ' ',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Click'
                }
            },
            {
                element: '#evidence_assigned',
                popover: {
                    title: 'Assigned Evidence',
                    description: 'Data of Assigned Evidence ',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Click'
                }
            },
            {
                element: '#evidence-dropdown',
                popover: {
                    title: 'Select from existing evidence',
                    description: 'Select evidence from the dropdown ',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Click'
                }
            },

            {
                element: ' #assessment_status',
                popover: {
                    title: 'Check the Assesment Status',
                    description: 'Click on the Assesment Status',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Click'
                }
            },

            {
                element: ' #ac-status-flex',
                popover: {
                    title: 'Check the Past Assesment Status ',
                    description: 'Click on the Assesment Status',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Click'
                }
            },

            {
                element: ' #assessment-new-status',
                popover: {
                    title: 'Select the New Assesment Status',
                    description: 'By choosing from the dropdown',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Click'
                }
            },
            {
                element: ' #assessment_update_btn.real-final',
                popover: {
                    title: 'Submit the assessment status',
                    description: 'Hit the submit button',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Click'
                }
            },

            {
                element: ' #assessment_status',
                popover: {
                    title: 'Assestment Status will update here based on the selection',
                    description: '',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Click'
                }
            },
        
            {
                element: ' #sys-overview-dropdown',
                popover: {
                    title: 'Click on System Overview to locate the System Authorization page',
                    description: '',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Click'
                }
            },
            {
                element: ' #sys-highliss',
                popover: {
                    title: 'Select the system Authorization',
                    description: '',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Click'
                }
            },

            
            {
                element: ' #status-icon-info',
                popover: {
                    title: 'Authorization Status',
                    description: '',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Click'
                }
            },
            {
                element: ' #status-icon-ii',
                popover: {
                    title: 'Authorization Information Icon based on status',
                    description: '',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Click'
                }
            },
          {
            popover: {
                description: "<span>Congratulations Demo is completed (Redirecting to the main page).</span>",
              }
          }



            

           













        ],
        onHighlightStarted: (element) => {
            const currentStepIndex = driverObj.getActiveIndex();
            console.log(`Step ${currentStepIndex} highlighted.`);

            switch (currentStepIndex) {

                case 1: // Step 2

                    break;
                case 2: // Step 3

                    $('#conf-open').click();
                    break;
                case 3: // Step 4

                    $('#inner-sel').click();
                    break;
                case 4: // Step 4

                    $('#conf-open').click();

                    $('.step-1').addClass('none');
                    $('.step-2').removeClass('none');

                    break;
                case 5:
                    $('#pct-row').removeClass('none');
                    $('html, body').animate({
                        scrollTop: $("#pct-row").offset().top
                    }, 2000);
                    $('#backbtc').click();

                    break;
                case 6:
                    $('.step-2').addClass('none');
                    $('#conf-open').click();

                    break;
                case 7:
                    $('#conf-open').click();
                    $('.step-2').addClass('none');
                    $('.step-3').removeClass('none');
                    break;
                case 8:
                    $('#btnSelectOrgInitial').click();
                    $('#btnSelectOrg').toggleClass('open');

                    $('#org_2121').addClass('hover-effect');
                    break;
                case 9:
                    $('#org_2121').click();
                    break;
                case 10:

                    break;
                case 11:
                    $('#btnSelectOrgInitial').click();
                    $('#sys-manag-content').removeClass('none');
                    $('#btnSelectOrgInitial').text('Qmulos / Windows');
                    $('html, body').animate({
                        scrollTop: $("#sys-manag-content").offset().top
                    }, 2000);
                    break;
                case 12:
                    $('#custombaseselect').val('41');
                    break;
                case 13:

                    break;
                case 14:
                    $('#ivc-control').click();


                    break;
                case 15:
                    $('#ivc-control').click();
                    $('.main-section-body.dashboard-body.step-3').addClass('none');
                    $('.main-section-body.dashboard-body.step-4').removeClass('none');
                    break;

                case 16:
                    $('#btnSelectOrgInitial').click();
                    $('#btnSelectOrg').toggleClass('open');
                    break;
                case 17:

                    break;
                case 18:
                    $('#btnSelectOrgInitial').click();
                    $('#btnSelectOrg').toggleClass('open');
                    $('.s4-rock').addClass('open');
                    break;

                case 24:
                    $('#singlevalue.special-item').addClass('open')
                    break;
                case 27:
                    $('.step-4').addClass('none');
                    $('.step-5').removeClass('none');
                    break;
                case 29:
                    $('#a-control_status_alert_action-check').click();
                    break;
                case 30:
                    $('#selected-reviews').val('failed');
                    break;
                case 31:
                    $('.step-5').addClass('none');
                    $('.step-4').removeClass('none');

                    break;
                case 35:
                    $('#assessment_status').click();

                    break;
                case 36:
                    $('#assessment-new-status').val('Failed')

                    break;
                case 38:
                    $('#assessment_status').click();

                    break;
                    case 39:
                        $('#sys-overview-dropdown').click();
    
                        break;
                        case 41:
                            $('#sys-overview-dropdown').click();
        
                            break;
                    case 40:
                        $('.step-4').addClass('none');
                        $('.step-6').removeClass('none');
    
                        break;
                case 45:
                   

                    break;

                default:
                    console.log('Default logic');
            }
        },
        onNext: (element) => {
            const currentStepIndex = driverObj.getActiveIndex();

        }
    });

    // Start the tour
    driverObj.drive();
    document.addEventListener('click', function () {
        const closeButton = document.querySelector('.driver-close-btn');
        const prevButton = document.querySelector('.driver-prev-btn');

        if (closeButton) closeButton.style.display = 'none'; // Hide close button
        if (prevButton) prevButton.style.display = 'none'; // Hide previous button
    });
});
