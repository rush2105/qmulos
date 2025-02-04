

$(document).ready(function () {
    const orgName = sessionStorage.getItem('orgName');
    if (orgName) {
        $('.selected-mat').text(orgName); // Optionally set it back to the element
    }


    $('#btnSelectOrgInitial').text(orgName + ' / ' + 'Windows');
})

const driver = window.driver.js.driver;
let driverObj;
function createTourProgressBox() {
    // Create main container
    const progressBox = document.createElement('div');
    progressBox.id = 'tourProgressBox';
    progressBox.innerHTML = `
        <div class="progress-header">
            <span>Tour Progress</span>
            <i class="fas fa-chevron-down"></i>
        </div>
        <div class="progress-content" style="display: none;">
           
            <ul class="progress-steps">
                <li data-step="0" class="step-item">
                    <i class="far fa-square"></i>
                    <span>Introduction</span>
                </li>
                <li data-step="2" class="step-item">
                    <i class="far fa-square"></i>
                    <span>Assessment Score and Heatmap</span>
                </li>
                <li data-step="3" class="step-item">
                    <i class="far fa-square"></i>
                    <span>Review Current Authorization</span>
                </li>
                <li data-step="5" class="step-item">
                    <i class="far fa-square"></i>
                    <span>Initiate the Approval of Workflow</span>
                </li>
                <li data-step="6" class="step-item">
                    <i class="far fa-square"></i>
                    <span>Assign Approvers</span>
                </li>
              
                <li data-step="7" class="step-item">
                    <i class="far fa-square"></i>
                    <span>Save Assessment</span>
                </li>
            
            
            </ul>
        </div>
    `;

    // Add styles
    const styles = document.createElement('style');
    styles.textContent = `
        #tourProgressBox {
            position: fixed;
            bottom: 20px;
            left: 20px;
            background: white;
            border-radius: 5px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            z-index: 1000;
            min-width: 150px;
            font-family: Arial, sans-serif;
        }
        .progress-header {
            padding: 10px 15px;
            background: #007a33;
            color: white;
            border-radius: 5px;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .progress-content {
            padding: 15px;
            background: white;
            border-radius: 0 0 5px 5px;
        }
        .progress-close {
            text-align: right;
            margin-bottom: 10px;
            cursor: pointer;
        }
        .progress-steps {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        .step-item {
            padding: 8px 0;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .step-item.completed {
            text-decoration: line-through;
        }
        .step-item.completed i {
            color: #007a33;
        }
    `;

    document.head.appendChild(styles);
    document.body.appendChild(progressBox);

    // Event Listeners
    const header = progressBox.querySelector('.progress-header');
    const content = progressBox.querySelector('.progress-content');
    

    header.addEventListener('click', () => {
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
        header.querySelector('i').classList.toggle('fa-chevron-down');
        header.querySelector('i').classList.toggle('fa-chevron-up');
    });

  

  

    return progressBox;
}

document.addEventListener("DOMContentLoaded", function () {


   driverObj = new driver({
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
       {
        element: '#aajao',
        popover: {
            title: '',
            description: 'The system has been granted an authority to operate for one year with the condition that the overall assessment score must be above 90% to maintain the authorization.',
            side: 'top',
            align: 'start',
            doneBtnText: 'Next'
        }
       },
       {
        element: '#auth_icon',
        popover: {
            title: '',
            description: 'You can set up an automation that will automatically renew the authorization if the assessment score remains above 90%, thus enabling Continuous Authority to Operate (cATO).',
            side: 'top',
            align: 'start',
            doneBtnText: 'Next'
        }
       },
       {
        element: '#aajao',
        popover: {
            title: '',
            description: 'Once the system’s control assessments have been completed, you can initiate a workflow in which multiple approvers can review the system’s overall assessment scores, drill into individual controls, review remediation actions and decide whether or not the system should be authorized to go live into production.',
            side: 'top',
            align: 'start',
            doneBtnText: 'Next',
            showButtons: ['close', 'previous', 'next']
        }
       },
       {
       
        popover: {
            title: 'Congratulations! ',
            description: 'Congratulations! You’ve completed this guided demo of some of the core features of Q-Compliance. You’ve successfully created an organization and system, applied controls, reviewed automated technical evidence and reviewed automation options. This only scratches the surface of Qmulos’ capabilities.',
            side: 'top',
            align: 'start',
            doneBtnText: 'Next',
            showButtons: ['close', 'previous', 'next'] 
        }
       }
        
      ],
      onHighlightStarted: (element, step) => {
          const currentStep = driverObj.getActiveIndex();
          sessionStorage.setItem('highlightStep', currentStep);
          const progressBox = document.querySelector('#tourProgressBox');
          const steps = progressBox.querySelectorAll('.step-item');
          // Mark all steps up to current step as completed
          steps.forEach((stepItem, index) => {
              if (index < currentStep) {
                  stepItem.classList.add('completed');
              }
          });
          if(currentStep === 9){
           $('.acd').each(function(){
            $(this).text($(this).attr('data-score'));
           });

          }
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
          }, 1000);
      }
   
  });
  const progressBox = createTourProgressBox();
  driverObj.drive();
  const steps = progressBox.querySelectorAll('.step-item');

  steps.forEach(step => {
      step.addEventListener('click', () => {
      $('.progress-header').click();
          const stepIndex = parseInt(step.dataset.step);
          if(stepIndex === 6 || stepIndex === 7){
            driverObj.drive(4);
          }
     else{
          driverObj.drive(stepIndex);
     }
      });
  });
//   $('#start-approval-workflow-button').click(function(){
//     driverObj.drive(6);
//   });
  $('#ato_workflow_submit_btn.real').click(function(){
    $('#status-icon-ii').replaceWith('<i id="status-icon-ii" style="color:#006400;margin-right:10px;" class="fa-solid fa-circle-check fa-1x"></i>');
setTimeout(() => {
    driverObj.drive(9);
}, 1000);
    
  });
  $('#start-approval-workflow-button').click(function(){
    driverObj.destroy();
    driverObj.drive(6);
  });
  $('#ato_inputs').submit(function(e){
    e.preventDefault();
  
  });
  // Start the tour when needed
});
// You can call startTour() when needed, for example:
$(document).ready(function() {


  $('#start-approval-workflow-button,#ato_workflow_submit_btn.real,#canci-buddy').click(function(e){
    
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
