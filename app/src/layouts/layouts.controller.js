(function(){

	'use strict';

	angular
		.module('app.layouts')
		.controller('LayoutsCtrl', LayoutsCtrl);

	/* @ngInject */
	function LayoutsCtrl($scope, $mdSidenav, $rootScope){
		var vm = this;

        /* Sidenav */
		$scope.toggleSidenav = function(){
			console.log('function called');
			$mdSidenav('left').toggle()
				.then(function (ev) {

				});
		};

		/* Project Collection List */
		$scope.query = {
			order: 'name',
			limit: 5,
			page: 1
		};

		$scope.selected = [];

		$scope.users = [
			{
				firstName: 'firstName1',
				lastName: 'lastName1',
				email: 'email@email1.com'
			},
			{
				firstName: 'firstName2',
				lastName: 'lastName2',
				email: 'email@email2.com'
			},
			{
				firstName: 'firstName3',
				lastName: 'lastName3',
				email: 'email@email3.com'
			}
		]
		
		
	}


}());
