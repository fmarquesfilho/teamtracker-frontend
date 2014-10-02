var ttApp = angular.module('ttApp', []);

ttApp.controller('FeedCtrl', function ($scope, $http) {
  
  $http.get('http://tt.diredevs.com/feed/1')
  .success(function(data) {
    $scope.notifications = data;
    console.log(data);
  })
  .error(function(data) {
    console.log('Error: ' + data);
  });

  $scope.getCard = function(notification) {
    console.log(notification);
    
    if (notification.event_action)
      return 'cards/slack.html';
    else if (notification.event_name == "push")
      return 'cards/push.html';
    else
      return "cards/todo.html";
  };
})
.directive('card', function($parse) {
  return {
    restrict: 'A',
    link: function ($scope, element, $attr) {
      var data = JSON.parse($attr.data);
      
      element.html(data.event_action);
    }
  };
});