var routerApp = angular.module('routerApp', []);

routerApp.config(['$routeProvider', 
  function($routeProvider) {
    $routeProvider.
      when('/home', {
    templateUrl: 'partial-home.html'
      }).
      when('/about', {
    templateUrl: 'partial-about.html'
      }).
      when('/contact', {
    templateUrl: 'partial-contact.html'
      }).      
      otherwise({
    redirectTo: '/home'
      });
}]);
