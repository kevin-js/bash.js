var webBash = angular.module('webBash', ['ngCookies']);

var bashController = webBash.controller('BashController', ['$scope', '$http', '$cookies', function($scope, $http, $cookies) {
	$scope.activeCommand = '';
	$scope.pwd = $cookies.get('pwd');
	$scope.cliHistory = [];

	$scope.executeCommand = function() {
		$scope.cliHistory.push({
			'content': $scope.activeCommand,
			'command': true
		});
		$http.post('/api/command', {
			'command': $scope.activeCommand,
			'pwd': $cookies.get('pwd')
		})
			.then(function(response) {
				response.data.split('\n').forEach(function(element) {
					$scope.cliHistory.push({
						'content': element,
						'command': false
					});
				});
				$scope.pwd = $cookies.get('pwd');
			})
			.catch(function(response){
				console.log(response);
			});
		$scope.activeCommand = '';
	};
}]);