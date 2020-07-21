"use strict";
var Contact = /** @class */ (function () {
    function Contact() {
        this.firstName = '';
        this.firstName = 'Romain';
    }
    Contact.prototype.helloAsync = function () {
        var _this = this;
        setTimeout(function () {
            console.log('Hello ' + _this.firstName);
        }, 1000);
    };
    return Contact;
}());
var romain = new Contact();
romain.helloAsync();
