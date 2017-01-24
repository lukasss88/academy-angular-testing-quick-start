describe('Messages', function ()
{
    'use strict';

    var messages;
    var messageContent;
    var expectedMessage;


    beforeEach(module('app'));

    beforeEach(inject(function (Messages)
    {
        messageContent = 'Hello World';

        messages = Messages;
    }));

    describe('getMessage', function()
    {
        beforeEach(function ()
        {
            expectedMessage = 'Hello Message'
        });

        it('should return message', function ()
        {
            expect(messages.getMessage()).toEqual(expectedMessage);
        });
    });

    describe('setMessage', function ()
    {
        beforeEach(function ()
        {
            messages.setMessage('jol');
        });
        it('should set message to jol', function ()
        {

                expect(messages.getMessage()).toEqual('jol');

        });
    })

});
