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
                .primaryPalette('blue-grey')
                .accentPalette('grey')
                .warnPalette('red')
                // .warnPalette('cyan')
                // .backgroundPalette('')
                // .dark();
        })

}());
