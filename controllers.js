var ttApp = angular.module('ttApp', []);

ttApp.controller('FeedCtrl', function ($scope, $http) {

    $scope.notifications = [];    

    $http({
        method: 'GET',
        url: 'http://107.170.231.15/public/data/commits.json'
    })
    .success(function(data) {
        console.log("received:"+ data);
        $scope.notifications = data.notifications;
    })
    .error(function(data) {
        console.log("Error: " + data);
    });

});
