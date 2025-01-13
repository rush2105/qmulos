

$(document).ready(function () {
    const orgName = sessionStorage.getItem('orgName');
    if (orgName) {
        $('.selected-mat').text(orgName); // Optionally set it back to the element
    }


    $('#btnSelectOrgInitial').text(orgName + ' / ' + 'Windows');
})


document.addEventListener("DOMContentLoaded", function () {
    const driver = window.driver.js.driver;


    const fifthStepDriver = new driver({
        popoverClass: 'driverjs-theme',
        allowClose: true,
        steps: [
            {
                element: '#status-icon-info',
                popover: {
                    title: 'Status of System Authorization',
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
        fifthStepDriver.drive();



        setTimeout(() => {
            fifthStepDriver.destroy();
            const sixthStepDriver = new driver({
                popoverClass: 'driverjs-theme',
                allowClose: true,
                steps: [
                    {
                        element: '#status-icon-ii',
                        popover: {
                            title: 'Status of System Authorization Icon will be visible here',
                            description: 'Red Indicate Failture, Green Indicate the passed',
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

            setTimeout(() => {
                sixthStepDriver.destroy();
                const sevenStepDriver = new driver({
                    popoverClass: 'driverjs-theme',
                    allowClose: true,
                    steps: [
                        {
                            element: '#control_assessment_single_charts_div',
                            popover: {
                                title: 'Assessment Score Section',
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
                sevenStepDriver.drive();
                setTimeout(() => {
                    sevenStepDriver.destroy();
                },2000);
                setTimeout(() => {
                    redirectHome();

                    setTimeout(() =>{
                        window.location.href = '/index.html';
                      },7000)
                },5000);
            }, 2000);
        }, 2000)
    }, 3000)


});

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