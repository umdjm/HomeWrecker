(function () {
	'use strict';

	// register the route config on the application
	angular
		.module('home-wrecker')
		.config(function configMainRoute($stateProvider) {
			var mainState = {
				name: 'main',
				url: '/',
				templateUrl: '/home-wrecker/controllers/main/main.html',
				controller: 'MainController',
				asController: 'vm'
			};

			$stateProvider.state('main',mainState);
		})

})();



