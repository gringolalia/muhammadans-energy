/*
/!*
 * Name: socketsReceiver.run.js
 * Purpose: Define sockets here, register and capture all socket events here
 * USE SOCKETS ONLY FOR FRONT END AND BACK END COMMUNICATION
 * *!/

(function(){
    'use strict';
    angular
        .module('app.common')
        .run(socketsReceiver);

    function socketsReceiver(socketFactory){

        /!* ALL SOCKETS EVENTS WILL BE REGISTERED AND CAPTURED HERE *!/

        // example: test
        socketFactory.on('test', function(data){
            console.log("Socket Event Fired: test");
            // fire custom events from here
            eventChannel.fire('socketFired', data);
        });

    }
}());
*/
