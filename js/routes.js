(function(){
'use strict';

skm.config(['$routeProvider', function($routeProvider) {
  
$routeProvider.when('/emailSearch', {templateUrl: 'js/partials/emailSearch.html'});
$routeProvider.when('/approchSearch', {templateUrl: 'js/partials/approchSearch.html'});
$routeProvider.when('/productSearch', {templateUrl: 'js/partials/productSearch.html'});
$routeProvider.when('/documentSearch', {templateUrl: 'js/partials/documentSearch.html'});
$routeProvider.when('/vehicleSearch', {templateUrl: 'js/partials/vehicleSearch.html'});

  
$routeProvider.otherwise({redirectTo: '/emailSearch'});

}]);

})();