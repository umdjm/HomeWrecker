(function () {
	'use strict';

	// register the controller as MainController
	angular
		.module('home-wrecker')
		.controller('AppController', function AppController(User, $timeout) {
			var vm = this;

			this.user = null;
			this.logo = 'thumbs_up_down';
			this.logoColor = '#fbfba5';

			this.isAuthenticated = function(){
				return !!this.user;
			};

			this.morphLogo = function(){
				vm.logo = 'thumb_up';
				vm.logoColor = 'greenyellow';
				$timeout(function() {
					vm.logo = 'thumbs_up_down';
					vm.logoColor = '#fbfba5';
				}, 1500);

			};

			User.get()
				.$promise
				.then(function(user){
					console.log(user);
					vm.user = user;
				})
		});

})();
