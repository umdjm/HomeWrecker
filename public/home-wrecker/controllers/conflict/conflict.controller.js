(function () {
	'use strict';

	// register the controller as MainController
	angular
		.module('home-wrecker')
		.controller('ConflictController', function MainController() {
			var vm = this;

			this.conflict = {};
		});

})();
