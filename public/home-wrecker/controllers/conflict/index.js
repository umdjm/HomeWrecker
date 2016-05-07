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
				asController: 'conflict',
				resolve: {
					'friends': function(Friend){
						return Friend.get()
							.$promise;
					}
				}
			};

			$stateProvider.state('conflict-edit',mainState);
		})

})();

