var app = angular.module('randomizerApp', []);

app.controller('ListController', function ($scope, $http, $timeout) {

	$scope.list = [];
	$scope.show = false;

	$scope.addToList = function () {
		$scope.list.push($scope.formListText);

		$scope.formListText = '';
	};

	$scope.deleteSkill = function(index) {	
		$scope.list.splice(index, 1);
	};
  
	$scope.getResult = function () {
		$scope.show = true;
		$scope.hideloader = false;
		$scope.result = '';

		$timeout(function(){
			$scope.hideloader = true;
			$scope.result = $scope.list[Math.floor(Math.random() * $scope.list.length)]
		}, 1500);
	};

	$scope.reset = function () {
		$scope.formListText = '';
		$scope.result = '';
		$scope.list = [];
		$scope.show = false;
		$scope.hideloader = false;
	};

});