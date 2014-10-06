var ttApp = angular.module('ttApp', ['angularMoment']);

ttApp.controller('FeedCtrl', function ($scope, $http) {
  
  $http.get('http://tt.diredevs.com/feed/1')
  .success(function(data) {
    $scope.notifications = data;
  })
  .error(function(data) {
    console.log('Error: ' + data);
  });

  $scope.getCard = function(notification) {
    
    if (notification.event_action)
      return 'cards/slack.html';
    else if (notification.event_name == "push") {
      if (notification.object.commits.length == 1)
        return 'cards/single_push.html';
      else return 'cards/mult_push.html';
    }
    else if (notification.event_name == "issues") {
      return "cards/issue_" + notification.object.action + ".html";
    }
    else return "cards/todo.html";
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