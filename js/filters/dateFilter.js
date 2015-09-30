/**
 * 
 */

(function(){
'use strict';
skm.filter('dateFilter',['constants',function(constants){
     return function(input){
     	var date = new Date(input);
     	//var filterDate = constants.monthNames[date.getMonth()]   +','+  date.getDate();
     	var filterDate = (1+date.getMonth())   +'/'+  date.getDate();  // mm/dd format
     	return filterDate;
     }
}])
})();
