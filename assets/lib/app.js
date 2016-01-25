(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-33321634-1', 'auto');
ga('send', 'pageview');

var app = angular.module('randomizerApp', ['ngSanitize']);

app.controller('ListController', ['$scope', '$http', '$timeout',
	function ($scope, $http, $timeout) {

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
				$scope.result = '<p class="large">' + $scope.list[Math.floor(Math.random() * $scope.list.length)] + '</p>'
			}, 1500);
		};

		$scope.reset = function () {
			$scope.formListText = '';
			$scope.result = '';
			$scope.list = [];
			$scope.show = false;
			$scope.hideloader = false;
		};
	
	}
]);