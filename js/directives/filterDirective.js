/**
 * 
 */

(function() {
	'use strict';
	skm.directive('selectedfilter', function() {
		var directive = {};

        directive.restrict = 'E'; 
        directive.templateUrl = "js/templates/selectedFilterTemplate.html";

        return directive;
	})
})();
