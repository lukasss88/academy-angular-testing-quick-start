describe('AboutCtrl', function()
{
    'use strict';

    var about;
    var MessagesMock;
    var aboutCtrl;

    beforeEach(module('app'));

    beforeEach(inject(function ($controller, Messages)
    {

        MessagesMock = Messages;

        sinon.spy(MessagesMock, 'setMessage');
        sinon.spy(MessagesMock, 'getMessage');

        aboutCtrl = $controller('AboutCtrl', {Messages: MessagesMock});
    }));

    describe('initialization', function ()
    {
        it('should set about title', function ()
        {
            expect(aboutCtrl.title).to.eql('About Page');
        });
        it('should set about body', function ()
        {
            expect(aboutCtrl.body).to.eql('This is the about page body');
        });
        it('should set about newMessage', function ()
        {
            expect(aboutCtrl.newMessage).to.eql('');
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
            expect(MessagesMock.setMessage).to.have.been.called;
        });
        it('should call Messages.setMessage with Hello Message', function ()
        {
            expect(MessagesMock.setMessage).to.have.been.calledWith('Hello');
        });
        it('should set NewMessage', function ()
        {
            expect(aboutCtrl.newMessage).to.eql('Hello');
        });
    });
});
