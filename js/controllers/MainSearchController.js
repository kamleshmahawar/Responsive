(function(){
'use strict';
skm.controller('mainSearchController',function($scope , emailSearchService , $modal,$log ){

 
	$scope.searchFor="";
	$scope.query='"Honda CPF EMD"';
	// string used to keep actual url fragments to be sent to server
	$scope.fq="";

	$scope.pageSize=20;
	$scope.pageNumber=1;
	$scope.emptyPage=true;
	$scope.resultData={displayResult : null , facets : null };
	$scope.showFilters=false;
	$scope.hideSpinner=true;
	// filters selected , used to display on page 
	$scope.filters_to_display = {};
	$scope.rowVisibilityIndexes=[];
	
	
	/*
	 * 
	 */
	$scope.setSearchParams = function(param){
		$scope.searchFor = param;
		$scope.search(true);
	}
	
	$scope.addFacet = function(filter , selectRow , filterHeading , facet_single_select){
		var filter = filter.slice(0 , filter.lastIndexOf("(") );
		console.log('selectRow : ' + selectRow)
		console.log('filter : ' + filter)
		console.log('filterHeading : ' + filterHeading)
		if(selectRow){
			
			if(! ($scope.filters_to_display[filterHeading])){
				// key does not exist
				$scope.filters_to_display[filterHeading] = [filter]
			}else{
				// key exists
				$scope.filters_to_display[filterHeading].push(filter)
			}
		}else{
			
			
			if((facet_single_select)&& (selectRow == undefined)){
				// selected a single select filter 
				alert(filter);
				console.log($scope.filters_to_display[filterHeading])
				$scope.filters_to_display[filterHeading] = [filter];
				console.log($scope.filters_to_display[filterHeading])
				
				
				
			}else if($scope.filters_to_display[filterHeading]){
				// key exists
				$scope.filters_to_display[filterHeading].pop(filter)
			}
		}
		console.log($scope.filters_to_display)
		$scope.fq = emailSearchService.createSearchFilterParamString($scope.filters_to_display) 
		//alert($scope.fq)
		
	};
	

	
	/*
	 * 
	 */

	$scope.search = function(refreshFilters){
		var query = $scope.query;
		$scope.rowVisibilityIndexes=[];
		$scope.hideSpinner=false;
		
		if(refreshFilters){
			$scope.fq="" ; 
			$scope.filters_to_display = {}; 
			
		}
		
		emailSearchService.search( $scope.query , $scope.fq ,$scope.searchFor).then( 
			 function(response){  
				 			$scope.resultData.displayResult=response.displayResult ; 
				 			if(refreshFilters)	$scope.resultData.facets=response.facets ;
				 			$scope.emptyPage=false; 
				 			$scope.hideSpinner=true; 
				 	} , 
			 function(status){$scope.emptyPage=true;alert(status); $scope.hideSpinner=true;}
		 )
	}
 

	$scope.toggleRowVisibility= function(res_id)  {
        $scope.buttonContent = '-'; 
		if( ! $scope.rowVisibilityIndexes[res_id]){
			$scope.rowVisibilityIndexes[res_id]=true;			
		}else{
			$scope.rowVisibilityIndexes[res_id] = ! $scope.rowVisibilityIndexes[res_id];
		}
	}
	
	$scope.clearFilter= function()  {
		$scope.search(true);
   }
	


})

})();