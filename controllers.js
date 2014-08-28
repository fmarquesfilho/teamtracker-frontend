var ttApp = angular.module('ttApp', []);

ttApp.controller('FeedCtrl', function ($scope) {
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
});
