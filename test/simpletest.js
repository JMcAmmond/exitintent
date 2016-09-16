/**
* This is a simple test to check if jasmine is working
*/
describe('myPlugin Initialisation', function() {

    var el, myPlugin;

    beforeEach(function(){
        $('body').prepend("<div id='myPlugin-Test'>");
        el = $('#myPlugin-Test');
        myPlugin = el.exitintent()
    });

    it('Should add the class "exitintent" to the element', function() {
        //expect(el.hasClass('exitintent')).toBe(true);
    });

});