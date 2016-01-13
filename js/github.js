angular.module('myApp.controllers').controller('gits', ['$scope', function($scope) { 
  $scope.github = [
    {
      name: "fakebook",
      comments: "Created a Relational Database to Resemble Facebook.",
      img: "images/github/fakebook.png",
      url: "https://github.com/raymondborkowski/Fakebook"
    },
    {
      name: "postgre",
      comments: "Various Postgre DML commands.",
      img: "images/github/postgres.png",
      url: "https://github.com/raymondborkowski/postgresP3"
    },
    {
      name: "oracle",
      comments: "Oracle commands that retrieve info via JAVA from Fakebook database.",
      img: "images/github/oracle.png",
      url: "https://github.com/raymondborkowski/OracleDataJava"
    },
    {
      name: "c++",
      comments: "Drone Delivery Program using MST and Branch and Bound Algorithms.",
      img: "images/github/cpp.png",
      url: "https://github.com/raymondborkowski/proj4"
    },
    {
      name: "golf site",
      comments: "Snippets from Puttitout.com to save and input golf scores in a league.",
      img: "images/github/golf.png",
      url: "https://github.com/raymondborkowski/sampleGolfSite"
    },
    {
      name: "log recovery",
      comments: "DBMSs use writeahead logging and with a recovery algorithm, such as ARIES. This implements a single thread version.",
      img: "images/github/database.png",
      url: "https://github.com/raymondborkowski/logRecovery"
    }
  ]
}]);
