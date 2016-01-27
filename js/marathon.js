angular.module('myApp.controllers').controller('marathons', ['$scope', function($scope) {
	$scope.title = "marathon blog";
    $scope.subtitle = "team for kids organization info"
    $scope.info = "This is where all the for the kids info will go!"
    $scope.time=[ {
        month: "january", 
        comments: "Created a Relational Database to Resemble Facebook.", 
        img: "images/github/fakebook.png", 
        url: "https://github.com/raymondborkowski/Fakebook"
    }
    , {
        month: "feburary", 
        comments: "Various Postgre DML commands.", 
        img: "images/github/postgres.png", 
        url: "https://github.com/raymondborkowski/postgresP3"
    }
    , {
        month: "march", 
        comments: "Oracle commands that retrieve info via JAVA from Fakebook database.", 
        img: "images/github/oracle.png", 
        url: "https://github.com/raymondborkowski/OracleDataJava"
    }
    , {
        month: "april", 
        comments: "Drone Delivery Program using MST and Branch and Bound Algorithms.", 
        img: "images/github/cpp.png", 
        url: "https://github.com/raymondborkowski/proj4"
    }
    , {
        month: "may", 
        comments: "Snippets from Puttitout.com to save and input golf scores in a league.",
         img: "images/github/golf.png", 
         url: "https://github.com/raymondborkowski/sampleGolfSite"
    }
    , {
        month: "june", 
        comments: "DBMSs use writeahead logging and with a recovery algorithm, such as ARIES. This implements a single thread version.", 
        img: "images/github/database.png", 
        url: "https://github.com/raymondborkowski/logRecovery"
    },
    {
        month:"july"
    },
    {
        month:"august"
    },
    {
        month:"september"
    },
    {
        month:"october"
    },
    {
        month:"marathon month, november!"
    }
    ]
}

]);