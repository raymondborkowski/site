angular.module('myApp.controllers').controller('resume', ['$scope', function($scope) { 
  $scope.title =  "raymond borkowski's resume";
  $scope.subtitle = "Relevant Work Experience"; 
  $scope.info = [
    {
      company : "Asset Health",
      style : "asset",
      infoCom : [
        {
          info : "Configured an enterprise level Google Analytics account for tracking multiple goals and statistics across 90+ clients."},{
          info : "Integrated Google Analytics into base framwork."},{
          info : "Implemented encrypted authentication access for security sensitive operating procedures."},{
          info : "Created internal FAQ webpage for business processes and procedures."},{
          info : "Edited front-end web templates and minipulcoated various front end templates."}],
      img : "images/portfolio/asset.png"

    },
    {
      company : "Domino's Pizza",
      style: "dominos",
      infoCom : [
        {
          info : "Implemented Real Time Order tracking to notify us when and where our 5000+ stores would go offline"},{
          info : "QA tested for Domino's iOS7 application"},{
          info : "Integrated internal Development, Quality Assurance, Pre Prod, and Prod Environments"},{
          info : "Extended internship throughout school year to own Samsung project."},{
          info : "Worked as a PM and Developer for Domino’s Samsung Smart TV Application"}
      ],
      img : "images/portfolio/dominos.png"

    },
    {
      company : "Fiat chrysler",
      style: "chrysler",
      infoCom : [
        {
          info : "Created relations with Plant IT Support to help assist in daily maintenance of kiosks."},{
          info : "Helped in the transition of bringing all Java Web Apps in house"},{
          info : "Responsible for up keep of 165 HR Kiosks located throughout Chrysler Plants"},{
          info : "Documented and helped resolve various issues facing HR Kiosks"},{
          info : "Created business plans for how to compile Kiosk up time metrics for all units"}
      ],
      img : "images/portfolio/fiat.png"

    },
    {
      company : "kate spade",
      style: "ksny",
      infoCom : [
        {
          info : "Guide both purchasers and buyers to manufacture price changes and Purchase Orders on our Software."},{
          info : "Provide support for our Manufacturer and Retail Databases."},{
          info : "Query results for different departments in ORACLE and MYSQL Databases."},{  
          info : "Improve methods and practices of business processes."},{
          info : "Maintain and improve our ticketing system to improve processes and flow with JavaScript web apps."
        }
      ],
      img : "images/portfolio/ksny.png"

    }
  ]
}]);
