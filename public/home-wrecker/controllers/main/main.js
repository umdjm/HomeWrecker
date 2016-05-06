(function () {
	'use strict';

	// register the route config on the application
	angular
		.module('home-wrecker', ['ui.router'])
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
		.config(function configMainRoute($stateProvider) {
			var mainState = {
				name: 'main2',
				url: '/main',
				templateUrl: '/home-wrecker/controllers/main/main.html',
				controller: 'MainController',
				asController: 'vm'
			};

			$stateProvider.state('main2',mainState);
		})
		.config(function configMainRoute($stateProvider) {
			var mainState = {
				name: 'main3',
				url: '/app/something',
				templateUrl: '/home-wrecker/controllers/main/main.html',
				controller: 'MainController',
				asController: 'vm'
			};

			$stateProvider.state('main3',mainState);
		});

})();
