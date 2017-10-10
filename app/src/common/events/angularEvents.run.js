/*
 * Name: angularEvents.run.js
 * Purpose: Don't use it, unless its very necessary
 * */

(function(){
    'use strict';
    angular
        .module('app.common')
        .run(angularEvents);

    // need to inject $rootScope
    function angularEvents($rootScope){

        /* ALL $ROOTSCOPE EVENTS WILL BE CAPTURED HERE */

        // example: test
        $rootScope.$on('test', function(){
            console.log("Angular Event Fired: test");
        });

    }
}());
