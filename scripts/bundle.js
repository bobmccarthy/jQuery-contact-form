(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var button = $('.submit');

button.on('click', function () {
	var main = $('#main');
	var success = $('#success');
	var name = $('#name');
	var email = $('#email');
	var website = $('#website');
	var message = $('#message');
	var nameError = $('#nameError');
	var emailError = $('#emailError');
	var websiteError = $('#websiteError');
	var websiteError = $('#websiteError');
	var messageError = $('#messageError');
	var hasError = false;
	nameError.html('');
	emailError.html('');
	websiteError.html('');
	messageError.html('');

	if (name.val() === '') {
		hasError = true;
		nameError.html('Please Enter A Name');
		nameError.css({ marginBottom: '1em' });
	}
	if (email.val() === '') {
		hasError = true;
		emailError.html('Please Enter An Email Address. Dont leave it blank, silly!');
		emailError.css({ marginBottom: '1em' });
	}
	if (email.val().indexOf('@') === -1) {
		hasError = true;
		emailError.html('Please Enter An Valid Email Address.');
		emailError.css({ marginBottom: '1em' });
	}
	if (website.val() === '') {
		hasError = true;
		websiteError.html('Please Enter A Valid Website');
		websiteError.css({ marginBottom: '1em' });
	}
	if (website.val().substring(0, 7) !== 'http://') {
		hasError = true;
		websiteError.html('Please Enter http:// preceding your webpage');
		websiteError.css({ marginBottom: '1em' });
	}
	if (message.val() === '') {
		hasError = true;
		messageError.html('Please Enter A Message');
		messageError.css({ marginBottom: '1em' });
	}
	if (!hasError === true) {
		main.css({ display: 'none' });
		success.css({ display: 'block' });
		success.html('Thanks for contacting us ' + name.val() + '. We have recieved your message and will be contacting you shortly.');
	}
});

// button.mouseover(function(){
// 	button.animate({backgroundColor: '#88C470'}, 500);
// });

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map