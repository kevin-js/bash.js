var webBash = angular.module('webBash', ['ngResource']);

var bashController = webBash.controller('BashController', ['$scope', '$http', function($scope, $http) {
	$scope.activeCommand = '';
	$scope.cliHistory = [];

	$scope.executeCommand = function() {
		$scope.cliHistory.push({
			'content': $scope.activeCommand,
			'command': true
		});
		$http.post('/api/command', {'command': $scope.activeCommand})
			.then(function(response) {
				response.data.split('\n').forEach(function(element) {
					$scope.cliHistory.push({
						'content': element,
						'command': false
					});
				});
			})
			.catch(function(response){
				console.log(response);
			});
		$('#active-prompt-input').val('');
	};
}]);