var ttApp = angular.module('ttApp', []);

ttApp.controller('FeedCtrl', function ($scope, $http) {
  $scope.notifications = [
    {'author': 'Jeff Winger',
     'message': 'Nah, I\'ll do it later.',
     'date': '12/08/2014'},
    {'author': 'Abed Nadir',
     'message': 'Cool. Cool cool code.',
     'date': '12/08/2014'},
    {'author': 'Troy Barnes',
     'message': 'Add layers. SO MANY LAYERS',
     'date': '12/08/2014'},
  ];

  // $http.get({
  //       method: 'GET',
  //       url: 'http://107.170.231.15/public/data/commits.json'
  //   })
  //   .success(function(data) {
  //       console.log("received:"+ data);
  //   })
  //   .error(function(data) {
  //       console.log("Error: " + data);
  //   });

});