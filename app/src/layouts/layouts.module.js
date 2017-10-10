/**
 * @ngdoc overview
 * @name app.layouts
 * @description < description placeholder >
 */

(function(){

    'use strict';

    angular
        .module('app.layouts', [])
        .config(configuration);

    /* @ngInject */
    function configuration($stateProvider){

        //add your state mappings here
        $stateProvider

            .state('Landing', {
                    url:'/',
                    breadcrumbText: 'Projects',
                    views: {
                        '@':{
                            templateUrl:'src/layouts/layouts.html',
                            controller: 'LayoutsCtrl'
                        },
                        'sidenav@Landing':{
                            templateUrl:'src/layouts/sidenav.html'
                        },
                        'header@Landing':{
                            templateUrl:'src/layouts/header.html'
                        },
                        'toolbar@Landing':{
                            templateUrl: 'src/layouts/projectToolbar.html'
                        },
                        'content@Landing':{
                            templateUrl:'src/layouts/home.html'
                        }
                    },
                    resolve: {
                        collections: function($rootScope){
                            $rootScope.collections = [
                                'Collection 1',
                                'Collection 2',
                                'Collection 3',
                                'Collection 4'
                            ]
                            return null;
                        }
                    }
                }
            )

            .state('Projects', {
                    url:'/projects/:id',
                    breadcrumbText: 'Projects > Collections',
                    views: {
                        '@':{
                            templateUrl:'src/layouts/layouts.html',
                            controller: 'LayoutsCtrl'
                        },
                        'sidenav@Projects':{
                            templateUrl:'src/layouts/sidenav.html'
                        },
                        'header@Projects':{
                            templateUrl:'src/layouts/header.html'
                        },
                        'toolbar@Projects':{
                            templateUrl: 'src/layouts/projectToolbar.html'
                        },
                        'content@Projects':{
                            templateUrl:'src/layouts/projectDetails.html'
                        }
                    },
                    resolve: {
                        collections: function($rootScope){
                            $rootScope.collections = [
                                'Collection 1',
                                'Collection 2',
                                'Collection 3',
                                'Collection 4'
                            ]
                            return null;
                        }
                    }
                }
            )

            .state('ProjectsCollections', {
                    url:'/projects/:id/collections/:cid',
                    breadcrumbText: 'Projects > Collections > SelectedCollection',
                    views: {
                        '@':{
                            templateUrl:'src/layouts/layouts.html',
                            controller: 'LayoutsCtrl'
                        },
                        'sidenav@ProjectsCollections':{
                            templateUrl:'src/layouts/sidenav.html'
                        },
                        'header@ProjectsCollections':{
                            templateUrl:'src/layouts/header.html'
                        },
                        'toolbar@ProjectsCollections':{
                            templateUrl: 'src/layouts/projectToolbar.html'
                        },
                        'content@ProjectsCollections':{
                            templateUrl:'src/layouts/projectCollection.html',
                            controller: 'LayoutsCtrl'
                        }
                    },
                    resolve: {
                        collections: function($rootScope){
                            $rootScope.collections = [
                                'Collection 1',
                                'Collection 2',
                                'Collection 3',
                                'Collection 4'
                            ]
                            return null;
                        }
                    }
                }
            )


    }

}());
