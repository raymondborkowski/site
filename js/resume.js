angular.module('myApp.controllers').controller('resume', ['$scope', function($scope) { 
  $scope.title =  "raymond borkowski's resume";
  $scope.subtitle = "Relevant Work Experience"; 
  $scope.info = [
    {
      company : "Asset Health",
      style : "asset",
      info : [
        {
          info : "Configured an enterprise level Google Analytics account for tracking multiple goals and statistics across 90+ clients.",
          info : "Integrated Google Analytics into base framwork.",
          info : "Created internal FAQ webpage for business processes and procedures.",
          info : "Implemented encrypted authentication access for security sensitive operating procedures.",
          info : "Edited front-end web templates and minipulcoated various front end templates."   
        }
      ],
      img : "images/portfolio/asset.png"

    },
    {
      company : "Domino's Pizza",
      style: "dominos",
      info : [
        {
          info : "Implemented Real Time Order tracking to notify us when and where our 5000+ stores would go offline",
          info : "QA tested for Domino's iOS7 application",
          info : "Integrated internal Development, Quality Assurance, Pre Prod, and Prod Environments",
          info : "Extended internship throughout school year to own Samsung project.",
          info : "Worked as a PM and Developer for Domino’s Samsung Smart TV Application"   
        }
      ],
      img : "images/portfolio/dominos.png"

    },
    {
      company : "Fiat chrysler",
      style: "chrysler",
      info : [
        {
          info : "Member of the Human Resource Systems Department",
          info : "Responsible for up keep of 165 HR Kiosks located throughout Chrysler Plants",
          info : "Created relations with Plant IT Support to help assist in daily maintenance of kiosks.",
          info : "Documented and helped resolve various issues facing HR Kiosks",
          info : "Created business plans for how to compile Kiosk up time metrics for all units",
          info : "Helped in the transition of bringing all Java Web Apps in house"   
        }
      ],
      img : "images/portfolio/fiat.png"

    },
    {
      company : "kate spade",
      style: "ksny",
      info : [
        {
          info : "Provide support for our Manufacturer and Retail Databases.",
          info : "Guide both purchasers and buyers to manufacture price changes and Purchase Orders on our Software.",
          info : "Improve methods and practices of business processes.",
          info : "Query results for different departments in ORACLE and MYSQL Databases.",
          info : "Maintain and improve our ticketing system (Service Now) to improve processes and flow with JavaScript web apps."   
        }
      ],
      img : "images/portfolio/ksny.png"

    }
  ]
}]);
