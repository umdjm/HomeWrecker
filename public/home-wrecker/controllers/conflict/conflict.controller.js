(function () {
	'use strict';

	// register the controller as MainController
	angular
		.module('home-wrecker')
		.controller('ConflictController', function(friends, Friend, $q) {
			var vm = this;
			this.friends = friends.response;
			this.conflict = {};

			this.simulateQuery = true;

			this.searchText = "a";
			this.selectedItem = null;
			this.querySearch   = querySearch;
			this.selectedItemChange = selectedItemChange;
			this.searchTextChange   = searchTextChange;

			function querySearch (query) {
				return friends || [];
			}
			function searchTextChange(text) {
				$log.info('Text changed to ' + text);
			}
			function selectedItemChange(item) {
				$log.info('Item changed to ' + JSON.stringify(item));
			}

		});

})();
