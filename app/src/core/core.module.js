/**
 * @ngdoc overview
 * @name app.core
 * @description Core is where the Magma is
 */

(function(){

    'use strict';

    angular.module('app.core', [
            'ui.router',                // ui-router
            'restangular',              // restangular
            'ngStorage',                // local storage
            'ngMessages',                // angular messages for form validations
            'ngMaterial',
            'ngMaterialSidemenu',
            'md.data.table'
        ])
        .config(function($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('red')
                .accentPalette('blue-grey')
                .warnPalette('cyan')
                // .backgroundPalette('')
                // .dark();
        })

}());
