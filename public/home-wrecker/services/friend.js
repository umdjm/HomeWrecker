(function () {
	'use strict';

	angular
		.module('home-wrecker')
		.factory('Friend', Friend);

	Friend.$inject = ['$resource'];

	function Friend($resource){
		return $resource('/api/user/friends');
	}

})();
