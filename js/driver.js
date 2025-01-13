$(document).ready(function () {
        

        $('#ivc-control').click(function (e) {
                e.preventDefault();
                $('#ivc-control-data').toggleClass('open');
               
        });
        $('#conf-open').click(function (e) {
                e.preventDefault();
                $('#conf-1-opener').toggleClass('open');
                $('#conf-2-opener').toggleClass('open');
        });

        $('#inner-sel,#backbtc').click(function (e) {
                e.preventDefault();
                $('#conf-3-opener').toggleClass('open');
                $('#conf-2-opener').toggleClass('open');
                $('#conf-1-opener').toggleClass('bb-open');
        });

        $('#sys-overview-dropdown').click(function (e) {
                e.preventDefault();

                        $('#sys-o-opener').toggleClass('open');

        });
        $('#assessment_status,#assessment_cancel_btn,#assessment_update_btn').click(function () {
                $('#modalAssessmentDetail').toggleClass('open');
                $('.modal-backdrop.fade.in').toggleClass('open');
        });
        $('#btnSelectOrgInitial,#btnSelectOrgInitial-2').click(function (e) {
                $('#modalOrgSelect.sssss').toggleClass('open');
                $('.modal-backdrop.fade.in').toggleClass('open');
                $('#org_2121').click(function (e) {
                        console.log($('#org_1'));
                        $('.org-child-old').toggleClass('hide');
                        $('#systemsdiv').toggleClass('none');

                        $('.org-child-new').toggleClass('open');
                        $('.nav-latter').toggleClass('boom');
                           $('#orgchildren').toggleClass('limited');
                });


        });


         $('#btnCancelOrgSelect').click(function (e) {
                $('#modalOrgSelect').toggleClass('open');
                $('.modal-backdrop.fade.in').toggleClass('open');

         });
         $('#a-control_status_alert_action-check,#control_status_alert_action-check').click(function (e) {
                 $(this).parents('li').toggleClass('open');
         })
       
});

function selectOrg(e){
        $('.org-child-old').toggleClass('hide');
        $('.org-child-new,#systemsdiv').toggleClass('show');

           $('#orgchildren').toggleClass('limited');
}

// function chart2() {
//         const dataz = {
//           labels: [
//             "johny_liu", "alfred_ian", "vincent_serf", "benjamin_stax",
//             "sam_bhatnagar", "chodray_gosh", "mimi_nguyen", "fred_lim",
//             "greg_lee", "sergei_lahv"
//           ],
//           datasets: [
//             {
//               label: "created",
//               backgroundColor: "lightblue",
//               data: [100, 90, 95, 80, 85, 70, 65, 60, 55, 50],
//             },
//             {
//               label: "deleted",
//               backgroundColor: "purple",
//               data: [50, 45, 40, 35, 30, 25, 20, 15, 10, 5],
//             },
//             {
//               label: "modified",
//               backgroundColor: "blue",
//               data: [200, 180, 190, 170, 160, 150, 140, 130, 120, 110],
//             },
//             {
//               label: "success",
//               backgroundColor: "darkblue",
//               data: [150, 140, 130, 120, 110, 100, 90, 80, 70, 60],
//             },
//           ],
//         };
      
//         // Config
//         const configzzzz = {
//           type: "bar",
//           data: dataz,
//           options: {
//             indexAxis: "y", // Horizontal bars
//             responsive: true,
//             plugins: {
//               legend: {
//                 display: true,
//                 labels: {
//                   color: "white", // Legend label color
//                 },
//                 onClick: (e, legendItem, chart) => {
//                   const datasetIndex = legendItem.datasetIndex;
      
//                   // Check if the dataset is already isolated
//                   const activeDatasets = chart.data.datasets.filter((ds) => ds.hidden !== true);
      
//                   if (activeDatasets.length === 1 && activeDatasets[0] === chart.data.datasets[datasetIndex]) {
//                     // If already isolated, show all datasets
//                     chart.data.datasets.forEach((dataset) => {
//                       dataset.hidden = false;
//                     });
//                   } else {
//                     // Hide all datasets except the clicked one
//                     chart.data.datasets.forEach((dataset, index) => {
//                       dataset.hidden = index !== datasetIndex;
//                     });
//                   }
      
//                   chart.update();
//                 },
//               },
//             },
//             interaction: {
//               mode: "index",
//               intersect: false,
//             },
//             scales: {
//               x: {
//                 ticks: { color: "white" },
//                 stacked: true,
//               },
//               y: {
//                 ticks: { color: "white" },
//                 stacked: true,
//               },
//             },
//           },
//         };
      
//         // Render Chart
//         const myChart = new Chart(document.getElementById("gra-2"), configzzzz);
//       }
      
//       document.addEventListener("DOMContentLoaded", () => {
//         chart2();
//       });
      
//       function chart3() {
//         const data = {
//             labels: ["Sun Oct 27 2024", "Tue Oct 29", "Thu Oct 31", "Sat Nov 2"],
//             datasets: [
//                 {
//                     label: "chage",
//                     backgroundColor: "rgba(0, 0, 255, 0.2)", // Light blue
//                     borderColor: "blue",
//                     data: [200, 300, 250, 200],
//                     fill: true,
//                     pointRadius: 5,
//                     borderWidth: 2,
//                 },
//                 {
//                     label: "groupadd",
//                     backgroundColor: "rgba(0, 128, 0, 0.2)", // Light green
//                     borderColor: "green",
//                     data: [150, 200, 180, 150],
//                     fill: true,
//                     pointRadius: 5,
//                     borderWidth: 2,
//                 },
//                 {
//                     label: "groupdel",
//                     backgroundColor: "rgba(255, 0, 0, 0.2)", // Light red
//                     borderColor: "red",
//                     data: [100, 150, 120, 100],
//                     fill: true,
//                     pointRadius: 5,
//                     borderWidth: 2,
//                 },
//                 {
//                     label: "groupmod",
//                     backgroundColor: "rgba(255, 165, 0, 0.2)", // Light orange
//                     borderColor: "orange",
//                     data: [200, 250, 230, 200],
//                     fill: true,
//                     pointRadius: 5,
//                     borderWidth: 2,
//                 },
//                 {
//                     label: "passwd",
//                     backgroundColor: "rgba(255, 255, 0, 0.2)", // Light yellow
//                     borderColor: "yellow",
//                     data: [400, 450, 430, 400],
//                     fill: true,
//                     pointRadius: 5,
//                     borderWidth: 2,
//                 },
//                 {
//                     label: "useradd",
//                     backgroundColor: "rgba(255, 192, 203, 0.2)", // Light pink
//                     borderColor: "pink",
//                     data: [300, 350, 320, 300],
//                     fill: true,
//                     pointRadius: 5,
//                     borderWidth: 2,
//                 },
//                 {
//                     label: "userdel",
//                     backgroundColor: "rgba(0, 255, 255, 0.2)", // Light cyan
//                     borderColor: "cyan",
//                     data: [100, 150, 120, 100],
//                     fill: true,
//                     pointRadius: 5,
//                     borderWidth: 2,
//                 },
//                 {
//                     label: "usermod",
//                     backgroundColor: "rgba(128, 0, 128, 0.2)", // Light purple
//                     borderColor: "purple",
//                     data: [500, 600, 550, 500],
//                     fill: true,
//                     pointRadius: 5,
//                     borderWidth: 2,
//                 },
//                 {
//                     label: "win:unknown",
//                     backgroundColor: "rgba(128, 0, 128, 0.2)", // Light dark purple
//                     borderColor: "darkpurple",
//                     data: [800, 900, 850, 800],
//                     fill: true,
//                     pointRadius: 5,
//                     borderWidth: 2,
//                 },
//             ],
//         };
    
//         const config = {
//             type: "line",
//             data: data,
//             options: {
//                 responsive: true,
//                 plugins: {
//                     legend: {
//                         display: true,
//                         labels: {
//                             color: "#fff", // Change legend text color
//                         },
//                     },
//                 },
//                 interaction: {
//                     mode: "index",
//                     intersect: false,
//                 },
//                 scales: {
//                     x: {
//                         ticks: { color: "#fff" }, // Change x-axis tick color
//                         grid: {
//                             color: "rgba(0, 0, 0, 0.1)", // Light grid color
//                         },
//                     },
//                     y: {
//                         ticks: { color: "#fff" }, // Change y-axis tick color
//                         grid: {
//                             color: "rgba(0, 0, 0, 0.1)", // Light grid color
//                         },
//                     },
//                 },
//                 elements: {
//                     line: {
//                         tension: 0.4, // Smooth lines
//                     },
//                 },
//             },
//         };
    
//         const myChart = new Chart(document.getElementById("gra-1"), config);
//     }
    
//       document.addEventListener("DOMContentLoaded", () => {
//         chart3();
//       });
//       function chart1() {
//         const data = {
//           labels: ["modified", "created", "deleted", "success"],
//           datasets: [
//             {
//               label: "group",
//               backgroundColor: "green",
//               data: [200, 50, 60, 30],
//             },
//             {
//               label: "user",
//               backgroundColor: "cyan",
//               data: [50, 10, 15, 10],
//             },
//           ],
//         };
    
//         const config = {
//           type: "bar",
//           data: data,
//           options: {
//             indexAxis: "y", // Horizontal bars
//             responsive: true,
//             plugins: {
//               legend: {
//                 display: true,
//                 labels: {
//                   color: "white",
//                 },
//               },
//               title: {
//                 display: true,
//                 text: "TOP ACTIONS BY ACCOUNT TYPE",
//                 color: "white",
//                 padding: 10,
//                 font: {
//                   size: 16,
//                   family: "Arial",
//                 },
//               },
//             },
//             interaction: {
//               mode: "index",
//               intersect: false,
//             },
//             scales: {
//               x: {
//                 ticks: { color: "white" },
//                 stacked: true,
//                 title: {
//                   display: true,
//                   text: "Count",
//                   color: "white",
//                 },
//               },
//               y: {
//                 ticks: { color: "white" },
//                 stacked: true,
//                 title: {
//                   display: true,
//                   text: "Action",
//                   color: "white",
//                 },
//               },
//             },
//           },
//         };
    
//         const myChart = new Chart(document.getElementById("gra-3"), config);
//       }
    
//       document.addEventListener("DOMContentLoaded", () => {
//         chart1();
//       });

