<<<<<<< HEAD
var app = angular.module('randomizerApp', []);

app.controller('ListController', function ($scope, $http, $timeout) {
=======
var app = angular.module('randomizer', []);

app.controller('list', function ($scope, $http, $timeout) {
>>>>>>> fc3ba3cf9b7082091dc712ce557aead93f5075b2

	$scope.list = [];
	$scope.show = false;

	$scope.addToList = function () {
		$scope.list.push($scope.formListText);

		$scope.formListText = '';
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