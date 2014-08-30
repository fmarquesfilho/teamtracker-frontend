var ttApp = angular.module('ttApp', []);

ttApp.controller('FeedCtrl', function ($scope, $http) {

  $http({
        method: 'GET',
        url: 'http://107.170.231.15/public/data/commits.json'
    })
    .success(function(data) {
        console.log("received:"+ data);
        $scope.commits = data.notifications.commits;
        $scope.issues = data.notifications.issues;
    })
    .error(function(data) {
        console.log("Error: " + data);
    });

});
