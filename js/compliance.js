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
                <li data-step="1" class="step-item">
                    <i class="far fa-square"></i>
                    <span>Table of Assigned Evidence Data</span>
                </li>
                <li data-step="2" class="step-item">
                    <i class="far fa-square"></i>
                    <span>Evidence Management</span>
                </li>
                <li data-step="3" class="step-item">
                    <i class="far fa-square"></i>
                    <span>Assessment Status</span>
                </li>
                <li data-step="4" class="step-item">
                    <i class="far fa-square"></i>
                    <span>Assessment Details</span>
                </li>
                <li data-step="6" class="step-item">
                    <i class="far fa-square"></i>
                    <span>New Assessment</span>
                </li>
                <li data-step="7" class="step-item">
                    <i class="far fa-square"></i>
                    <span>Save Assessment</span>
                </li>
                <li data-step="8" class="step-item">
                    <i class="far fa-square"></i>
                    <span>Assessment Status</span>
                </li>
                <li data-step="9" class="step-item">
                    <i class="far fa-square"></i>
                    <span>Control Status</span>
                </li>
                <li data-step="10" class="step-item">
                    <i class="far fa-square"></i>
                    <span>System Authorization</span>
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
                    description: 'Now that we have reviewed technical and non-technical evidence, we can document our findings and capture an assessment status for this control.',
                    side: 'center',
                    align: 'center',
                    doneBtnText: 'Next',
                    showButtons: ['close', 'next'],
                    className: 'wide-popup'
                }
            },
            {
                element: '#evidence_assigned',
                popover: {
                    title: 'Table of Assigned Evidence Data',
                    description: '',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Next',
                    showButtons: ['close', 'previous', 'next']
                }
            },
            {
                element: '#evidence_management',
                popover: {
                    title: 'Evidence Management',
                    description: '',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Next',
                    showButtons: ['close', 'previous', 'next']
                }
            },
            {
                element: '#assessment_status',
                popover: {
                    title: 'Assessment Status',
                    description: '',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Next',
                    showButtons: ['close', 'previous', 'next']
                }
            },
            {
                element: '#modalAssessmentDetail',
                popover: {
                    title: 'Assessment Details',
                    description: '',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Next',
                    showButtons: ['close', 'previous', 'next']
                }
            },
        
            {
                element: '#assessment-new-status',
                popover: {
                    title: 'Select the Assessment status from the dropdown',
                    description: '',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Next',
                    showButtons: ['close', 'previous', 'next']
                }
            },
            {
                element: '#assessment-note',
                popover: {
                    title: 'New Assessment finding',
                    description: '',
                    side: 'top',
                    align: 'start',
                    prevBtnText: 'Previous',
                    closeBtnText: 'Close',
                    showButtons: ['close', 'previous', 'next']
                }
            },
            {
                element: '#assessment_update_btn.reals',
                popover: {
                    title: 'Hit the save button to save the Assessment details',
                    description: '',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Next',
                    showButtons: ['close', 'previous', 'next']
                }
            },
            {
                element: '#assessment_status',
                popover: {
                    title: 'Saved Assestment status will show up here',
                    description: 'Red Indicate the Failed status, Green Indicate the Passes',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Next',
                    showButtons: ['close', 'previous', 'next']
                }
            },
            {
                element: '#dabba-box',
                popover: {
                    title: 'Based on save assesment status it will change here',
                    description: 'Red Indicate the Failed status, Green Indicate the Passes',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Next',
                    showButtons: ['close', 'previous', 'next']
                }
            },
            {
                element: '#sys-highliss',
                popover: {
                    title: 'Click to Go to the System Authorization',
                    description: '',
                    side: 'top',
                    align: 'start',
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
          
            if (currentStep > 0 && currentStep != 8) {
                driverObj.drive(currentStep - 1);
            }
            else if(currentStep === 8){
              driverObj.drive(3);
            }
        },
        onNextClick: (element, step, opts) => {
            const currentStep = driverObj.getActiveIndex();
           
            if (currentStep === 2) { // Assessment status step
               driverObj.drive(3);
            }
            else if(currentStep === 3){
                
              $('#assessment_status').click();
            }
            else if(currentStep === 4){
                document.querySelector('#assessment-new-status').scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'center'
                });
                driverObj.drive(currentStep + 1);
            }
            else if (currentStep === 6) { // Assessment new status step
                driverObj.drive(7);
                
            }
            else if (currentStep === 7) { // Update button step
                const selectedStatus = $('#assessment-new-status').val();

                if (selectedStatus && selectedStatus !== '') {
                    // Save to session storage
                    sessionStorage.setItem('assessment_status', selectedStatus);
                    
                }
                const updateButton = document.querySelector('#assessment_update_btn');
                if (updateButton) {
                    updateButton.click();
                    setTimeout(() => {
                        driverObj.drive(8);
                    }, 500);
                }
            }  else if (currentStep === 0) {
                driverObj.drive(1); // Simply move to next step
            }
            else if (currentStep === 9) {
                $('#sys-overview-dropdown').click();
                driverObj.drive(10); // Simply move to next step
            }

            else {
             
                driverObj.drive(currentStep + 1);
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
       
            const stepIndex = parseInt(step.dataset.step);
           
            if(stepIndex === 10){
                   if(!$('#sys-o-opener').hasClass('open')){
                    $('#sys-o-opener').addClass('open');
                   }
            }else{
                $('#sys-o-opener').removeClass('open');
            }
            if(stepIndex === 4){
$('#assessment_status').click();
            }
            if(stepIndex === 7 || stepIndex === 6){
                driverObj.drive(3);
            }else{

            driverObj.drive(stepIndex);
            }
        });
    });
// 
$('#evd-btn').click(function() {
    const currentStep = driverObj.getActiveIndex();
    if (currentStep === 3) {
        setTimeout(() => {
            driverObj.drive(4);
        }, 500);
    }  
});

$('#assessment-new-status').change(function() {
    const currentStep = driverObj.getActiveIndex();
    if (currentStep ) {
        const selectedStatus = $(this).val();
        if (selectedStatus && selectedStatus !== '') {
            // Save to session storage
            sessionStorage.setItem('assessment_status', selectedStatus);
            setTimeout(() => {
                driverObj.drive(currentStep + 1);
            }, 500);
        }
    }
});

$('#assessment_update_btn.reals').click(function() {
    const currentStep = driverObj.getActiveIndex();
  
        setTimeout(() => {
            driverObj.drive(8);
        }, 500);
    
});
$('#assessment_status').click(function() {
    setTimeout(() => {
        driverObj.drive(4);
    }, 500);
});
    // Click handlers for manual navigation
    $('#evd-btn').click(function() {
        setTimeout(() => {
            driverObj.drive(3);
        }, 500);
    });

    // Text typing effect function
  
});
function typeText(elementSelector, text) {
    const element = $(elementSelector);
    let i = 0;
    element.val(''); // Clear existing text
    
    function typeWriter() {
        if (i < text.length) {
            element.val(element.val() + text.charAt(i));
            i++;
            setTimeout(typeWriter, 50); // Adjust typing speed
        } else {
            // When reaching the end, wait a bit and start over
            setTimeout(() => {
                i = 0;
                element.val(''); // Clear text
                typeWriter(); // Start again
            }, 1000); // Wait 1 second before restarting
        }
    }
    
    typeWriter();
}

// To stop the effect when needed:
function stopTypeText(elementSelector) {
    const element = $(elementSelector);
    element.val(''); // Clear the text
    // Store the original text if needed
    element.data('originalText', text);
}


$(document).ready(function () {
typeText('#assessment-note', 'Observed accounts being managed by individuals who aren’t approved account managers based on system policy.  Observed multiple failed STIG configuration checks related to the control');

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
