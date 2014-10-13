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
});

ttApp.controller('SessionCtrl', function ($scope, $http) {
    
  $http.get('http://tt.diredevs.com/login_url')
  .success(function(data) {
    $scope.login_url = data.url;
  })
  .error(function(data) {
    console.log('Error: ' + data);
  });
  
  $http.get('http://tt.diredevs.com/protected/profile', { withCredentials: true })
  .success(function(data) {
    $scope.profile = data;
    console.log(data);
  })
  .error(function(data) {
    console.log('Error: ' + data);
  });

  $scope.track = function(org) {
   
    for (var i = 0; i < $scope.profile.user.orgs.length; i++) {
      if ($scope.profile.user.orgs[i].login == org) {
        $scope.repos = $scope.profile.user.orgs[i].repos;
      }
    }
  };
});