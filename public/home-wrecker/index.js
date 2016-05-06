(function () {
	'use strict';

	angular
		.module('home-wrecker', [
			// Add modules below
			'ngCookies',
			'ngResource',
			'ngSanitize',
			'ngMessages',
			'ngMaterial',
			'ui.router',
			'home-wrecker.lodash',
			'home-wrecker.io',
			'home-wrecker.socket'
		])
		.config(appConfig);

	/* App configuration */

	// add appConfig dependencies to inject
	appConfig.$inject = ['$controllerProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider', '$locationProvider', '$mdThemingProvider', '$mdIconProvider', '$httpProvider'];

	function appConfig($controllerProvider, $urlRouterProvider, $urlMatcherFactoryProvider, $locationProvider, $mdThemingProvider, $mdIconProvider, $httpProvider) {
		$controllerProvider.allowGlobals();

		$urlRouterProvider.otherwise('/');
		$urlMatcherFactoryProvider.strictMode(false);
		$locationProvider.html5Mode(true);


		// set the default palette name
		var defaultPalette = 'blue';
		// define a palette to darken the background of components
		var greyBackgroundMap = $mdThemingProvider.extendPalette(defaultPalette, {'A100': 'fafafa'});

		$mdThemingProvider.definePalette('grey-background', greyBackgroundMap);
		$mdThemingProvider.setDefaultTheme(defaultPalette);

		// customize the theme
		$mdThemingProvider
			.theme(defaultPalette)
			.primaryPalette(defaultPalette)
			.accentPalette('pink')
			.backgroundPalette('grey-background');

		var spritePath = 'bower_components/material-design-icons/sprites/svg-sprite/';
		$mdIconProvider.iconSet('navigation', spritePath + 'svg-sprite-navigation.svg');
		$mdIconProvider.iconSet('action', spritePath + 'svg-sprite-action.svg');
		$mdIconProvider.iconSet('content', spritePath + 'svg-sprite-content.svg');
		$mdIconProvider.iconSet('toggle', spritePath + 'svg-sprite-toggle.svg');
		$mdIconProvider.iconSet('alert', spritePath + 'svg-sprite-alert.svg');

		var $rootScope = angular.element(document.querySelectorAll("[ui-view]")[0]).injector().get('$rootScope');

		$rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
			console.log('$stateChangeStart to '+toState.to+'- fired when the transition begins. toState,toParams : \n',toState, toParams);
		});

		$rootScope.$on('$stateChangeError',function(event, toState, toParams, fromState, fromParams){
			console.log('$stateChangeError - fired when an error occurs during transition.');
			console.log(arguments);
		});

		$rootScope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams){
			console.log('$stateChangeSuccess to '+toState.name+'- fired once the state transition is complete.');
		});

		$rootScope.$on('$viewContentLoaded',function(event){
			console.log('$viewContentLoaded - fired after dom rendered',event);
		});

		$rootScope.$on('$stateNotFound',function(event, unfoundState, fromState, fromParams){
			console.log('$stateNotFound '+unfoundState.to+'  - fired when a state cannot be found by its name.');
			console.log(unfoundState, fromState, fromParams);
		});
	}

	})();


