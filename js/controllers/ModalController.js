(function(){
'use strict';
skm.controller('ModalController',function($scope ,$modalInstance, resultData  ){
	
	
	$scope.addFacet = function(fq){
		alert("mc"+fq)
	};
	
     $scope.resultData = resultData;
     
     //$scope.addFacet = addFacet;
     
     
     
     
     
    });
})();