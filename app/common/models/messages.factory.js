(function ()
{
    'use strict';

    angular.module('app').factory('Messages', function ()
    {
        var message = 'Hello Message';
        var getMessage = function ()
        {
            console.log('1');
            return message;
        };
        var setMessage = function (m)
        {
            console.log('2');
            message = m;
        };

        return {
            getMessage: getMessage,
            setMessage: setMessage
        };
    });
})();
