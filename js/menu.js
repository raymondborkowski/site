angular.module('myApp.controllers').controller('menu', ['$scope', function($scope) { 
  $scope.menu = [
    {
      name: "about"
    },
    {
      name: "skills"
    },
    {
      name: "github"
    },
    {
      name: "pictures"
    },
    {
      name: "resume"
    },
    {
      name: "contact"
    }
  ]
}]);