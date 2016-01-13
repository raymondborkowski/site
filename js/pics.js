angular.module('myApp.controllers').controller('pics', ['$scope', function($scope) { 
  $scope.title = "leisurely activities";
  $scope.pics = [
    {
      img: "images/goblue.jpg",
      caption : "Go Blue",
      small : "2014"
    },
    {
      img: "images/skydiving.jpg",
      caption:"Skydiving Cedar Point!",
      small:"2013"
    },
    {
      img: "images/snowboarding.jpg",
      caption:"Snowboarding!",
      small:"2014"
    }
  ]
}]);
