

$(document).ready(function () {
    const orgName = sessionStorage.getItem('orgName');
    if (orgName) {
        $('.selected-mat').text(orgName); // Optionally set it back to the element
    }


    $('#btnSelectOrgInitial').text(orgName + ' / ' + 'Windows');
})
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
                  description: 'We’ve walked through the basics of the Control Compliance Hub to review technical and non-technical evidence, set up automations and perform assessments on a system’s applied controls.',
                  side: 'center',
                  align: 'center',
                  doneBtnText: 'Next',
                  showButtons: ['close', 'next'],
                  className: 'wide-popup'
              }
          },
          {
              popover: {
                  title: '',
                  description: 'Now let’s review the entire system by navigating to the System Authorization Page.',
                  side: 'center',
                  align: 'center',
                  doneBtnText: 'Next',
                  showButtons: ['close', 'previous', 'next'],
                  className: 'wide-popup'
              }
          },
          {
              element: '#aajao',
              popover: {
                  title: 'Assessment Score and Heatmap',
                  description: 'Here you can review a combined assessment score and heat map of all of the controls assigned to this system.',
                  side: 'bottom',
                  align: 'start',
                  doneBtnText: 'Next',
                  showButtons: ['close', 'previous', 'next']
              }
          },
          {
              element: '#ATO_status_block',
              popover: {
                  title: 'Review Current Authorization',
                  description: 'Since we have just created this System and only assessed a single control, this system does not yet have an authorization. ',
                  side: 'bottom',
                  align: 'start',
                  doneBtnText: 'Next',
                  showButtons: ['close', 'previous', 'next']
              }
          },
          {
            element: '#ATO_status_block',
            popover: {
                title: '',
                description: 'Once the system’s control assessments have been completed, you can initiate a workflow in which multiple approvers can review the system’s overall assessment scores, drill into individual controls, review remediation actions and decide whether or not the system should be authorized to go live into production.',
                side: 'top',
                align: 'start',
                doneBtnText: 'Next'
            }
        },
        {
            element: '#start-approval-workflow-button',
            popover: {
                title: 'Click this to Initiate the Approval of Workflow',
                description: '',
                side: 'top',
                align: 'start',
                doneBtnText: 'Next'
            }
        },
        {
          element: '#modal_ato_workflow.real',
          popover: {
              title: 'Fill the details and assign it to approvers',
              description: '',
              side: 'top',
              align: 'start',
              doneBtnText: 'Next'
          }
      },
      {
        element: '#ato_workflow_submit_btn.real',
        popover: {
            title: 'Click save Button',
            description: '',
            side: 'top',
            align: 'start',
            doneBtnText: 'Next'
        }
    },
        
      ],
      onHighlightStarted: (element, step) => {
          const currentStep = driverObj.getActiveIndex();
          sessionStorage.setItem('highlightStep', currentStep);
      },
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
          driverObj.drive(currentStep + 1);
      },
      onDeselected: (element, step) => {
          setTimeout(() => {
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
          }, 10000);
      }
   
  });
  driverObj.drive();
  // Start the tour when needed
});
// You can call startTour() when needed, for example:
$(document).ready(function() {
  $('#ato_workflow_submit_btn.real').click(function(){ 
    driverObj.drive(6);

  });
  $('#start-approval-workflow-button,#ato_workflow_submit_btn.real').click(function(){
  $('#modal_ato_workflow.real').toggleClass('none');
  $('#modal_ato_workflow.real').toggleClass('open');

  $('.modal-backdrop.fade.in').toggleClass('open');
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//     const driver = window.driver.js.driver;


//     const fifthStepDriver = new driver({
//         popoverClass: 'driverjs-theme',
//         allowClose: true,
//         steps: [
//             {
//                 element: '#status-icon-info',
//                 popover: {
//                     title: 'Status of System Authorization',
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
//     setTimeout(() => {
//         fifthStepDriver.drive();



//         setTimeout(() => {
//             fifthStepDriver.destroy();
//             const sixthStepDriver = new driver({
//                 popoverClass: 'driverjs-theme',
//                 allowClose: true,
//                 steps: [
//                     {
//                         element: '#status-icon-ii',
//                         popover: {
//                             title: 'Status of System Authorization Icon will be visible here',
//                             description: 'Red Indicate Failture, Green Indicate the passed',
//                             side: 'top',
//                             align: 'start',
//                             doneBtnText: 'Next'
//                         }
//                     }
//                 ],
//                 onCloseClick: () => {


//                 }
//             });
//             sixthStepDriver.drive();

//             setTimeout(() => {
//                 sixthStepDriver.destroy();
//                 const sevenStepDriver = new driver({
//                     popoverClass: 'driverjs-theme',
//                     allowClose: true,
//                     steps: [
//                         {
//                             element: '#control_assessment_single_charts_div',
//                             popover: {
//                                 title: 'Assessment Score Section',
//                                 description: '',
//                                 side: 'top',
//                                 align: 'start',
//                                 doneBtnText: 'Next'
//                             }
//                         }
//                     ],
//                     onCloseClick: () => {


//                     }
//                 });
//                 sevenStepDriver.drive();
//                 setTimeout(() => {
//                     sevenStepDriver.destroy();
//                 },2000);
//                 setTimeout(() => {
//                     redirectHome();

//                     setTimeout(() =>{
//                         // window.location.href = '/index.html';
//                       },7000)
//                 },5000);
//             }, 2000);
//         }, 2000)
//     }, 3000)


// });

function redirectHome(){
    const driverzz = window.driver.js.driver;
    const driverObj = new driverzz({
        popoverClass: "driverjs-theme",
        stagePadding: 4,
      });
      
      driverObj.highlight({
        element: "#highlight-me",
        popover: {
          side: "bottom",
          title: "Congratulations Demo is completed",
          description: "Redirecting you to the main page",
        }
      })
   
}
