document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            if (!anchor.classList.contains('no-lan')) {
                event.preventDefault();
            }
        });
    });

});

$(document).ready(function () {
    $('#data-select').select2();
});
function saveStepToSession(step) {
    sessionStorage.setItem('currentStep', step);
}

// Function to retrieve the current step from sessionStorage
function getStepFromSession() {
    return sessionStorage.getItem('currentStep');
}

// Function to retrigger the Driver.js highlight based on session value
function retriggerHighlight(driverInstance, step) {
    // Check if the current step in session matches the desired step
    const sessionStep = getStepFromSession();
    if (sessionStep && parseInt(sessionStep) === step) {
        driverInstance.drive();
    }
}

document.addEventListener("DOMContentLoaded", function () {
    
    const driver = window.driver.js.driver;
    // Create an instance of the Driver.js object


 
  setTimeout(() => {
    const fourthStepDriver = new driver({
        popoverClass: 'driverjs-theme',
        allowClose: true,
        steps: [
            {
                element: '#conf-open',
                popover: {
                    title: 'Select the System Management from the dropdown',
                    description: 'Select the Control Library By selecting from the dropdown',
                    side: 'top',
                    align: 'start',
                    doneBtnText: 'Next'
                }
            }
        ],
        onCloseClick: () => {
          
            fourthStepDriver.destroy();
          
            // $('#conf-open').click();
        }
    });
 
        fourthStepDriver.drive();

        $('#conf-open').click(function(){
            fourthStepDriver.destroy();
            const fifthStepDriver = new driver({
                popoverClass: 'driverjs-theme',
                allowClose: true,
                steps: [
                    {
                        element: '#system-management',
                        popover: {
                            title: 'Click on System Management',
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
         
                fourthStepDriver.drive();
        });
    
    }, 1000);



    

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






