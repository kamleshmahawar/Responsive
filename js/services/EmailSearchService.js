(function(){
	'use strict';
   skm.services.service('emailSearchService',['$http','$q', '$filter','constants',function($http,$q,$filter,constants){

	     this.search = function(q , fq, whichSearch ){
	    	 
	    	 var reqParams = {};
	    	 var url ;

	    	 switch(whichSearch) {
			    case 'email':
					        url = constants.skmEmailSearch;
					        break;
			    case 'approach':
					        url = constants.skmApproachSearch;
					        break;
			    case 'product':
					        url = constants.skmApproachSearch;
					        break;
		        case 'document':
					        url = constants.skmApproachSearch;
					        break;
			    case 'vehicle':
					        url = constants.skmApproachSearch;
					        break;
			    default:
        				url = constants.skmEmailSearch;
			}
			
	    	 var deferred = $q.defer();
				$http({
							method : 'GET',
							url : url
						})
						.success(function(data, status, headers,	config) {deferred.resolve(data)})
						.error(function(data, status, headers,config) {deferred.reject(status);});
				
				return deferred.promise;
			}

	     
   }]);
})();