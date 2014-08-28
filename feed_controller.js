var feed = angular.module('feed', []);

function feed_controller($scope, $http) {

	// when landing on the page, get all buses and show them
	$http.get('http://colabore.herokuapp.com/api/gitnotifications')
		.success(function(data) {
			$scope.feed = data;
			console.log(data);
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
}