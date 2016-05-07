(function () {
	'use strict';

	// register the controller as MainController
	angular
		.module('home-wrecker')
		.controller('ConflictController', function($scope, friends) {
			$scope.friends = friends.response;
			$scope.conflict = { side: null };
		});

})();
