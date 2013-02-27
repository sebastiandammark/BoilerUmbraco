var app = app = {};

(function($, undefined) {
	"use strict";
	
	app.events = {
		ready: function() {
			console.log('the page is ready');
		},
		
		load: function() {
			console.log('we are loading');
		}
	}
	
	/* Initialize.
	--------------------------------------------------------------------------------*/
	$(document).ready(app.events.ready);
	$(window).load(app.events.load);
})(jQuery);