/**
 * 
 */

(function() {
	'use strict';
	skm.filter('replceString', function(constants) {
		return function(input) {
			// used for adhoc replacement of strings , mainly when they are too long 
			// and we need to replace then with more appropriate shorter strings
			// keep adding if conditions 
			if(input=="Distribution List") return "DL"
			else return input
		}
	})
})();
