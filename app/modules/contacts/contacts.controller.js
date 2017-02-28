(function ()
{
    'use strict';

    angular.module('app').controller('ContactController', function (ContactService)
    {
        var ctrl = this;

        ctrl.newContact = {
            email: 'john@john.pl',
            name: 'John',
            phone: '123456789'
        };

        ctrl.contacts = ContactService.list();

        ctrl.saveContact = function ()
        {
            ContactService.save(ctrl.newContact);
            ctrl.newContact = {};
        };

        ctrl.deleteContact = function (id)
        {
            ContactService.delete(id);
        };

        ctrl.editContact= function (id)
        {
            ctrl.newContact = angular.copy(ContactService.get(id));
        };
    });
})();
