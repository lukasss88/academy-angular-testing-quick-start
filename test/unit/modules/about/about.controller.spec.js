describe.only('AboutCtrl', function()
{
    'use strict';

    var about;
    var MessagesMock;
    var aboutCtrl;

    beforeEach(module('app'));

    beforeEach(inject(function ($controller, Messages)
    {

        MessagesMock = Messages;

        sinon.spy(MessagesMock, 'setMessage').and.callThrough();
        sinon.spy(MessagesMock, 'getMessage').and.callThrough();

        aboutCtrl = $controller('AboutCtrl', {Messages: MessagesMock});
    }));

    describe('initialization', function ()
    {
        it('should set about title', function ()
        {
            expect(aboutCtrl.title).toEqual('About Page');
        });
        it('should set about body', function ()
        {
            expect(aboutCtrl.body).toEqual('This is the about page body');
        });
        it('should set about newMessage', function ()
        {
            expect(aboutCtrl.newMessage).toEqual('');
        });
    });

    describe('updateMessage', function ()
    {
        beforeEach(function ()
        {
            aboutCtrl.updateMessage('Hello');
        });
        it('should call Messages.setMessage', function ()
        {
            expect(MessagesMock.setMessage).toHaveBeenCalled();
        });
        it('should call Messages.setMessage with Hello Message', function ()
        {
            expect(MessagesMock.setMessage).toHaveBeenCalledWith('Hello');
        });
        it('should set NewMessage', function ()
        {
            expect(aboutCtrl.newMessage).toEqual('Hello');
        });
    });
});
