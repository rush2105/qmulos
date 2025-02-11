$(document).ready(function () {


$('#btnSelectOrg').click(function(){
    $('#btnCancelOrgSelect').click();
})

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
const driver = window.driver.js.driver;
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
                    <span>Select Organization and System</span>
                </li>
                <li data-step="3" class="step-item">
                    <i class="far fa-square"></i>
                    <span>Review Technical Evidence</span>
                </li>
                <li data-step="5" class="step-item">
                    <i class="far fa-square"></i>
                    <span>Get Details</span>
                </li>
                <li data-step="6" class="step-item">
                    <i class="far fa-square"></i>
                    <span>Account Management over time by App</span>
                </li>
                <li data-step="7" class="step-item">
                    <i class="far fa-square"></i>
                    <span>Security Scan Statistics</span>
                </li>
                <li data-step="8" class="step-item">
                    <i class="far fa-square"></i>
                    <span>Review Control Automation Options</span>
                </li>
                <li data-step="9" class="step-item">
                    <i class="far fa-square"></i>
                    <span>Create a Q-Compliance Alert</span>
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
    

    // Execute initial script
    const orgNames = sessionStorage.getItem('orgName') ?? "Qmulos";
    if(orgNames != 'Qmulos'){
        $('#btnSelectOrgInitial').addClass('filled');
    }
    $('#btnSelectOrgInitial').text(orgNames + ' / ' + 'Windows');

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
                    description: 'The Control Compliance Hub provides a centralized hub to manage and review all of the evidence for controls that have been applied to your system. There is a dedicated dashboard for each control.',
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
                    description: 'In addition, you can perform actions on each control such as capturing implementation statements, auditing/assessing, assigning tasks, capturing remediation actions and much more.',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Next',
                    showButtons: ['close', 'previous', 'next']
                }
            },
            {
                element: '#btnSelectOrgInitial',

                popover: {
                    title: '',
                    description: 'After you’ve selected your organization and system, the dashboard will populate with evidence and artifacts that are available for each control. We’ll walk through the different types of evidence that are available and some of the key actions that can be performed on each control.',
                    side: 'center',
                    align: 'center',
                    doneBtnText: 'Next',
                    showButtons: ['close', 'previous', 'next'],
                    className: 'wide-popup'
                }
            },
            {
                element: '#sfour-rock',
                popover: {
                    title: '',
                    description: 'Let’s start by reviewing the technical evidence that has been automatically collected for each control by Q-Compliance’s underlying Big Data Platform.',
                    side: 'center',
                    align: 'center',
                    doneBtnText: 'Next',
                    showButtons: ['close', 'previous', 'next'],
                    className: 'wide-popup'
                }
            },
            {
              
                popover: {
                    title: '',
                    description: 'The technical evidence is presented through visualizations that are developed by Qmulos’ compliance research and analytics team and pre-mapped to multiple standards and controls. ',
                    side: 'center',
                    align: 'center',
                    doneBtnText: 'Next',
                    showButtons: ['close', 'previous', 'next'],
                    className: 'wide-popup'
                }
            },
            {
                element: '#ami-indi',
                popover: {
                    title: 'Click to get details of the selected record',
                    description: 'Click on the ? icon on each panel for a description of the evidence presented in each visual and how it may be useful to assessing the control’s requirements',
                    side: 'center',
                    align: 'center',
                    doneBtnText: 'Next',
                    showButtons: ['close', 'previous', 'next'],
                    className: 'wide-popup'
                }
            },
            {
                element: '#amo-indi',
                popover: {
                    title: 'Account Management over time by App',
                    description: 'Click on the ? icon on each panel for a description of the evidence presented in each visual and how it may be useful to assessing the control’s requirements',
                    side: 'top',
                    align: 'start',
                    prevBtnText: 'Previous',
                    closeBtnText: 'Close',
                    showButtons: ['close', 'previous','next']
                }
            },
            {
                element: '#panel_3_2',
                popover: {
                    title: 'Check all Security Scan Statistics',
                    description: 'The analytics behind each visualization can also be used to drive automation actions for each control such as automatically passing or failing a control based on events and activities that are detected.',
                    side: 'top',
                    align: 'start',
                    prevBtnText: 'Previous',
                    closeBtnText: 'Close',
                    showButtons: ['close', 'previous','next']
                }
            },
            {
                element: '#singlevalue .menus',
                popover: {
                    title: 'Review Control Automation Options',
                    description: 'Every control visualization in Q-C can be used as the basis for control automation. Hover over a visualization and select the bell icon to open the automation options.  Scroll down to the Security Scan Statistics panel',
                    side: 'top',
                    align: 'start',
                    prevBtnText: 'Previous',
                    closeBtnText: 'Close',
                    showButtons: ['close', 'previous','next']
                }
            },
            
            {
                element: '#qc-compliance-btttn',
                popover: {
                    title: 'Click on the bell icon to create a Q-Compliance Alert',
                    description: '',
                    side: 'top',
                    align: 'start',
                    prevBtnText: 'Previous',
                    closeBtnText: 'Close',
                    doneBtnText: 'Next',
                    showButtons: ['close', 'previous', 'next'] 
                }
            }
          

         



           
        ],
        onHighlightStarted: (element,step) => {
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

            if (currentStep >= 0 && currentStep < 10) {
                driverObj.drive(currentStep + 1);
            }
            if(currentStep === 3){
                $('.boomer').addClass('open');
                                   $('.boomer-hide').addClass('open');
            
            }
            if(  currentStep === 7 || currentStep === 10){
                $('#singlevalue.special-item').click();
            
            } 
            if(currentStep === 9){
                window.location.href = 'alert-management.html';
            }
        },
        onDeselected: (element,step) => {
            // sessionStorage.setItem('highlightStep', step.index);

            // When tour is interrupted
            setTimeout(() => {
                // Create and show continue button if tour wasn't completed
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
            }, 1000); // 10 seconds delay
        }
    });
    const progressBox = createTourProgressBox();
    // Start the tour
    driverObj.drive();
    const steps = progressBox.querySelectorAll('.step-item');

    steps.forEach(step => {
        step.addEventListener('click', () => {
          $('.progress-header').click();
            const stepIndex = parseInt(step.dataset.step);
            if(stepIndex >= 3){
              $('.boomer').addClass('open');
              $('.boomer-hide').addClass('open');
            }
            if(stepIndex >= 6){
              $('#singlevalue.special-item').click();
            }
            driverObj.drive(stepIndex);
        });
    });
    // Add click handler for ami-indi if needed
    $('#ami-indi').click(function() {
        driverObj.destroy(); // Destroy highlight when clicked
    });
});
$('#btnSelectOrgInitial.filled').click(function(){
    driverObj.destroy();
    setTimeout(() => {
        driverObj.drive(4);
    }, 1000);
})

// document.addEventListener("DOMContentLoaded", function () {
//     const orgName = sessionStorage.getItem('orgName');
//     if (orgName) {
//         $('.selected-mat').text(orgName); // Optionally set it back to the element
//     }
//     const driver = window.driver.js.driver;


//     const fourthStepDriver = new driver({
//         popoverClass: 'driverjs-theme',
//         allowClose: true,
//         steps: [
//             {
//                 element: '#btnSelectOrgInitial',
//                 popover: {
//                     title: 'Click to Select Organization and System again',
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
//         fourthStepDriver.drive();
//         $('#btnSelectOrgInitial').click(function () {
//             fourthStepDriver.destroy();
//             getOrganizationdetails();
//         });
//     }, 3000);


// });



// function getOrganizationdetails() {
//     const drivera = window.driver.js.driver;

//     const fifthStepDriver = new drivera({
//         popoverClass: 'driverjs-theme',
//         allowClose: true,
//         steps: [
//             {
//                 element: '#org_2121',
//                 popover: {
//                     title: 'Select Organization and System',
//                     description: '',
//                     side: 'top',
//                     align: 'start',
//                     doneBtnText: 'Next'
//                 }
//             }
//         ],
//     });
//     setTimeout(() => {
//         fifthStepDriver.drive();

//         const sisthStepDriver = new drivera({
//             popoverClass: 'driverjs-theme',
//             allowClose: true,
//             steps: [
//                 {
//                     element: '.org-child-new',
//                     popover: {
//                         title: 'Select Organization and System and Hit the Select button',
//                         description: '',
//                         side: 'top',
//                         align: 'start',
//                         doneBtnText: 'Next'
//                     }
//                 }
//             ],
//         });
//         setTimeout(() => {
//             sisthStepDriver.drive();
//             setTimeout(() => {
//                 sisthStepDriver.destroy();

//                 const seventhStepDriver = new drivera({
//                     popoverClass: 'driverjs-theme',
//                     allowClose: true,
//                     steps: [
//                         {
//                             element: '#btnSelectOrg',
//                             popover: {
//                                 title: 'After saving Dashboard will populate the content',
//                                 description: '',
//                                 side: 'top',
//                                 align: 'start',
//                                 doneBtnText: 'Next'
//                             }
//                         }
//                     ],
//                 });
//                 seventhStepDriver.drive();
//                 $('#btnSelectOrg').click(function () {
//                     seventhStepDriver.destroy();
//                     $('#btnCancelOrgSelect').click();
//                     $('.boomer').addClass('open');
//                     $('.boomer-hide').addClass('open');
//                     const elevanStepDriver = new drivera({
//                         popoverClass: 'driverjs-theme',
//                         allowClose: true,
//                         steps: [
//                             {
//                                 element: '#sfour-rock',
//                                 popover: {
//                                     title: 'Explore All records here',
//                                     description: '',
//                                     side: 'top',
//                                     align: 'start',
//                                     doneBtnText: 'Next'
//                                 }
//                             }
//                         ],
//                     });
//                     setTimeout(() => {
//                         elevanStepDriver.drive();
//                     }, 2000);

//                     const twelveStepDriver = new drivera({
//                         popoverClass: 'driverjs-theme',
//                         allowClose: true,
//                         steps: [
//                             {
//                                 element: '#ami-indi',
//                                 popover: {
//                                     title: 'Click to get details of the selected record',
//                                     description: '',
//                                     side: 'top',
//                                     align: 'start',
//                                     doneBtnText: 'Next'
//                                 }
//                             }
//                         ],
//                     });
//                     setTimeout(() => {
//                         elevanStepDriver.destroy();
//                         twelveStepDriver.drive();
//                         $('#ami-indi').click(function () {
//                             twelveStepDriver.destroy();
//                             const ttinStepDriver = new drivera({
//                                 popoverClass: 'driverjs-theme',
//                                 allowClose: true,
//                                 steps: [
//                                     {
//                                         element: '#amo-indi',
//                                         popover: {
//                                             title: 'Account Management over time by App',
//                                             description: 'lClick on the chart to get details of the selected record',
//                                             side: 'top',
//                                             align: 'start',
//                                             doneBtnText: 'Next'
//                                         }
//                                     }
//                                 ],
//                             });
//                             ttinStepDriver.drive();
//                             setTimeout(() => {
//                                 ttinStepDriver.destroy();
//                                 securityLevel();
//                             },2000)
//                         });
//                     }, 2000);
                    
//                 });
//             },4500);
//         }, 2000)

//     }, 1500);

// }

// function securityLevel(){
    
//     const driverd = window.driver.js.driver;
//     const fotinStepDriver = new driverd({
//         popoverClass: 'driverjs-theme',
//         allowClose: true,
//         steps: [
//             {
//                 element: '#panel_3_2',
//                 popover: {
//                     title: 'Check all Security Scan Statistics',
//                     description: '',
//                     side: 'top',
//                     align: 'start',
//                     doneBtnText: 'Next'
//                 }
//             }
//         ],
//     });
//     fotinStepDriver.drive();

//         setTimeout(() => {  

//             fotinStepDriver.destroy();
//             $('#singlevalue.special-item').click();
            
//             const sixinStepDriver = new driverd({
//                 popoverClass: 'driverjs-theme',
//                 allowClose: true,
//                 steps: [
//                     {
//                         element: '#qc-compliance-btttn',
//                         popover: {
//                             title: 'Click to create Q compliance',
//                             description: '',
//                             side: 'top',
//                             align: 'start',
//                             doneBtnText: 'Next'
//                         }
//                     }
//                 ],
//             });
//             sixinStepDriver.drive();
//         },2500);

 

// }
$(document).ready(function () {
    // $('#btnSelectOrgInitial').click(function() {
    //     modalDriver.drive();
    //     driverObj.destroy(); 
    // });

    // // Add click handler for btnCancelOrgSelect to destroy the highlight
    // $('#btnCancelOrgSelect').click(function() {
    //     modalDriver.destroy();
    // });
    $('.tooltip-element').tooltipster({
        content: function(instance) {
            var element = $(instance.origin);
            return element.attr('data-tooltip-content') || 'No content available';
        },
        trigger: 'click',
        position: 'top',
        theme: 'tooltipster-light',
    });
    $('#singlevalue.special-item').click(function () {
     $(this).toggleClass('open');

    });
});

function chart2() {
        const dataz = {
          labels: [
            "johny_liu", "alfred_ian", "vincent_serf", "benjamin_stax",
            "sam_bhatnagar", "chodray_gosh", "mimi_nguyen", "fred_lim",
            "greg_lee", "sergei_lahv"
          ],
          datasets: [
            {
              label: "created",
              backgroundColor: "lightblue",
              data: [100, 90, 95, 80, 85, 70, 65, 60, 55, 50],
            },
            {
              label: "deleted",
              backgroundColor: "purple",
              data: [50, 45, 40, 35, 30, 25, 20, 15, 10, 5],
            },
            {
              label: "modified",
              backgroundColor: "blue",
              data: [200, 180, 190, 170, 160, 150, 140, 130, 120, 110],
            },
            {
              label: "success",
              backgroundColor: "darkblue",
              data: [150, 140, 130, 120, 110, 100, 90, 80, 70, 60],
            },
          ],
        };
      
        // Config
        const configzzzz = {
          type: "bar",
          data: dataz,
          options: {
            indexAxis: "y", // Horizontal bars
            responsive: true,
            plugins: {
              legend: {
                display: true,
                labels: {
                  color: "white", // Legend label color
                },
                onClick: (e, legendItem, chart) => {
                  const datasetIndex = legendItem.datasetIndex;
      
                  // Check if the dataset is already isolated
                  const activeDatasets = chart.data.datasets.filter((ds) => ds.hidden !== true);
      
                  if (activeDatasets.length === 1 && activeDatasets[0] === chart.data.datasets[datasetIndex]) {
                    // If already isolated, show all datasets
                    chart.data.datasets.forEach((dataset) => {
                      dataset.hidden = false;
                    });
                  } else {
                    // Hide all datasets except the clicked one
                    chart.data.datasets.forEach((dataset, index) => {
                      dataset.hidden = index !== datasetIndex;
                    });
                  }
      
                  chart.update();
                },
              },
            },
            interaction: {
              mode: "index",
              intersect: false,
            },
            scales: {
              x: {
                ticks: { color: "white" },
                stacked: true,
              },
              y: {
                ticks: { color: "white" },
                stacked: true,
              },
            },
          },
        };
      
        // Render Chart
        const myChart = new Chart(document.getElementById("gra-2"), configzzzz);
      }
      
      document.addEventListener("DOMContentLoaded", () => {
        chart2();
      });
      
      function chart3() {
        const data = {
            labels: ["Sun Oct 27 2024", "Tue Oct 29", "Thu Oct 31", "Sat Nov 2"],
            datasets: [
                {
                    label: "chage",
                    backgroundColor: "rgba(0, 0, 255, 0.2)", // Light blue
                    borderColor: "blue",
                    data: [200, 300, 250, 200],
                    fill: true,
                    pointRadius: 5,
                    borderWidth: 2,
                },
                {
                    label: "groupadd",
                    backgroundColor: "rgba(0, 128, 0, 0.2)", // Light green
                    borderColor: "green",
                    data: [150, 200, 180, 150],
                    fill: true,
                    pointRadius: 5,
                    borderWidth: 2,
                },
                {
                    label: "groupdel",
                    backgroundColor: "rgba(255, 0, 0, 0.2)", // Light red
                    borderColor: "red",
                    data: [100, 150, 120, 100],
                    fill: true,
                    pointRadius: 5,
                    borderWidth: 2,
                },
                {
                    label: "groupmod",
                    backgroundColor: "rgba(255, 165, 0, 0.2)", // Light orange
                    borderColor: "orange",
                    data: [200, 250, 230, 200],
                    fill: true,
                    pointRadius: 5,
                    borderWidth: 2,
                },
                {
                    label: "passwd",
                    backgroundColor: "rgba(255, 255, 0, 0.2)", // Light yellow
                    borderColor: "yellow",
                    data: [400, 450, 430, 400],
                    fill: true,
                    pointRadius: 5,
                    borderWidth: 2,
                },
                {
                    label: "useradd",
                    backgroundColor: "rgba(255, 192, 203, 0.2)", // Light pink
                    borderColor: "pink",
                    data: [300, 350, 320, 300],
                    fill: true,
                    pointRadius: 5,
                    borderWidth: 2,
                },
                {
                    label: "userdel",
                    backgroundColor: "rgba(0, 255, 255, 0.2)", // Light cyan
                    borderColor: "cyan",
                    data: [100, 150, 120, 100],
                    fill: true,
                    pointRadius: 5,
                    borderWidth: 2,
                },
                {
                    label: "usermod",
                    backgroundColor: "rgba(128, 0, 128, 0.2)", // Light purple
                    borderColor: "purple",
                    data: [500, 600, 550, 500],
                    fill: true,
                    pointRadius: 5,
                    borderWidth: 2,
                },
                {
                    label: "win:unknown",
                    backgroundColor: "rgba(128, 0, 128, 0.2)", // Light dark purple
                    borderColor: "darkpurple",
                    data: [800, 900, 850, 800],
                    fill: true,
                    pointRadius: 5,
                    borderWidth: 2,
                },
            ],
        };
    
        const config = {
            type: "line",
            data: data,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: true,
                        labels: {
                            color: "#fff", // Change legend text color
                        },
                    },
                },
                interaction: {
                    mode: "index",
                    intersect: false,
                },
                scales: {
                    x: {
                        ticks: { color: "#fff" }, // Change x-axis tick color
                        grid: {
                            color: "rgba(0, 0, 0, 0.1)", // Light grid color
                        },
                    },
                    y: {
                        ticks: { color: "#fff" }, // Change y-axis tick color
                        grid: {
                            color: "rgba(0, 0, 0, 0.1)", // Light grid color
                        },
                    },
                },
                elements: {
                    line: {
                        tension: 0.4, // Smooth lines
                    },
                },
            },
        };
    
        const myChart = new Chart(document.getElementById("gra-1"), config);
    }
    
      document.addEventListener("DOMContentLoaded", () => {
        chart3();
      });
      function chart1() {
        const data = {
          labels: ["modified", "created", "deleted", "success"],
          datasets: [
            {
              label: "group",
              backgroundColor: "green",
              data: [200, 50, 60, 30],
            },
            {
              label: "user",
              backgroundColor: "cyan",
              data: [50, 10, 15, 10],
            },
          ],
        };
    
        const config = {
          type: "bar",
          data: data,
          options: {
            indexAxis: "y", // Horizontal bars
            responsive: true,
            plugins: {
              legend: {
                display: true,
                labels: {
                  color: "white",
                },
              },
              title: {
                display: true,
                text: "TOP ACTIONS BY ACCOUNT TYPE",
                color: "white",
                padding: 10,
                font: {
                  size: 16,
                  family: "Arial",
                },
              },
            },
            interaction: {
              mode: "index",
              intersect: false,
            },
            scales: {
              x: {
                ticks: { color: "white" },
                stacked: true,
                title: {
                  display: true,
                  text: "Count",
                  color: "white",
                },
              },
              y: {
                ticks: { color: "white" },
                stacked: true,
                title: {
                  display: true,
                  text: "Action",
                  color: "white",
                },
              },
            },
          },
        };
    
        const myChart = new Chart(document.getElementById("gra-3"), config);
      }
    
      document.addEventListener("DOMContentLoaded", () => {
        chart1();
      });
