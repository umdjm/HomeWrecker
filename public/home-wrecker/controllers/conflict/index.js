(function () {
	'use strict';

	// register the route config on the application
	angular
		.module('home-wrecker')
		.config(function configMainRoute($stateProvider) {
			var mainState = {
				name: 'conflict-edit',
				url: '/conflict/new',
				templateUrl: '/home-wrecker/controllers/conflict/edit.html',
				controller: 'ConflictController',
				asController: 'vm'
			};

			$stateProvider.state('conflict-edit',mainState);
		})

})();

