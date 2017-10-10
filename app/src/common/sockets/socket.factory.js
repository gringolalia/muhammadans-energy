/*
/!*
 * Name: sockets.factory.js
 * Purpose: Angular wrapper for javascript sockets,
 * *!/

(function(){

    'use strict';

    angular
        .module('app.common')
        .factory('socketFactory', socketFactory);

    /!* @ngInject *!/
    function socketFactory(API_URL){

        var socket = io.connect(API_URL);

        return {
            on: on,
            emit: emit,
            getId: getId
        };

        function on(eventName, callback) {
            socket.on(eventName, function () {
                var args = arguments;
                if(callback){
                    callback.apply(socket, args);
                }
            });
        }

        function emit(eventName, data, callback) {
            // attach the socketId
            data.socketId = socket.id;
            // emit
            socket.emit(eventName, data, function () {
                var args = arguments;
                if (callback) {
                    callback.apply(socket, args);
                }
            })
        }

        function getId(){
            return socket.id;
        }

    }

}());
*/
