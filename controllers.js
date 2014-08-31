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

        for(var i = 0; i < $scope.notifications.length; i++){
            if(($scope.notifications[i].commits !== undefined) && ($scope.notifications[i].commits.length < 2)){
                $scope.notifications[i]['type'] = 'commit';
                console.log($scope.notifications[i]['type']);
            }
        }

        $scope.notifications.sort(function(a, b){
         var date1=(a.created_at ||a.commits[0].timestamp), date2=(b.created_at||b.commits[0].timestamp)
         if (date1 > date2) 
          return -1 
         if (date1 < date2)
          return 1
         return 0
        })
    })
    .error(function(data) {
        console.log("Error: " + data);
    });

});
