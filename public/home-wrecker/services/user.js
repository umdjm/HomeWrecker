(function () {
	'use strict';

	angular
		.module('home-wrecker')
		.factory('User', User);

	User.$inject = ['$resource'];

	function User($resource){
		return $resource('/api/user')
	}

})();
