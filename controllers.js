var ttApp = angular.module('ttApp', []);

ttApp.controller('FeedCtrl', function ($scope, $http, $interval) {
    $scope.notifications = [];   
    $scope.refreshInterval = 5; // For every 5 sec

    // Create a function as we will reuse this code
    function refresh() {
      $http({
          method: 'GET',
          url: 'http://tt.diredevs.com/public/data/commits.json'
      })
      .success(function(data) {
          $scope.notifications = data.notifications;

          for(var i = 0; i < $scope.notifications.length; i++){
              if(($scope.notifications[i].commits !== undefined) && ($scope.notifications[i].commits.length < 2)){
                  $scope.notifications[i].type = 'commit';
              }
          }

          $scope.notifications.sort(function(a, b){
              var date1 = (a.created_at || a.commits[0].timestamp), 
                  date2 = (b.created_at || b.commits[0].timestamp);

              if (date1 > date2) 
                  return -1;
              if (date1 < date2)
                  return 1;
              return 0;
          })
      })
      .error(function(data) {
          console.log("Error: " + data);
      });
    }

    refresh(); // We call the function on initialization to load the feed.

    // $interval runs the given function every X millisec (2nd arg)
    $interval(function() { 
      refresh();
    }, $scope.refreshInterval * 1000); // the refresh interval must be in millisec 

});
