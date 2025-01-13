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


    $('.ace_layer.ace_text-layer').html('');
  setTimeout(() => {
    $('html, body').animate({
        scrollTop: $("#control_status_alert_action-check").offset().top
    }, 2000);
    const driver = window.driver.js.driver;

    const fourthStepDriver = new driver({
        popoverClass: 'driverjs-theme',
        allowClose: true,
        steps: [
            {
                element: '#control_status_alert_action-check',
                popover: {
                    title: 'Click on Set control status to open the selection',
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
    $('#a-control_status_alert_action-check,#control_status_alert_action-check').click(function (e) {
        fourthStepDriver.destroy(); 
        const fifthStepDriver = new driver({
            popoverClass: 'driverjs-theme',
            allowClose: true,
            steps: [
                {
                    element: '#selected-reviews',
                    popover: {
                        title: 'Select the Assesment status from the dropdown',
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
        },2000)
        $('#selected-reviews').change(function(){
            fifthStepDriver.destroy();
            const sixhStepDriver = new driver({
                popoverClass: 'driverjs-theme',
                allowClose: true,
                steps: [
                    {
                        element: '#ttc-save',
                        popover: {
                            title: 'Hit the save Button to store the data',
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
            sixhStepDriver.drive();
            $('#ttc-save').click(function(){
                sixhStepDriver.destroy();
                              
            })
        })

})

  }, 2000);
   
});