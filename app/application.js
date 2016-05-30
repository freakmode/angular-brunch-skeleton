(function() {
	'use strict';
	
	var dependencies = [
		'ngMaterial',
		'templates',
		'app.home'
	];

	angular.module('app', dependencies)
		.config(config);

	config.$inject = ['$mdThemingProvider', '$urlRouterProvider'];

	function config($mdThemingProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');

		$mdThemingProvider.theme('default');
	}
}());