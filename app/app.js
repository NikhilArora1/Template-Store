'use strict';

angular.module('templateStore', [
  'ngRoute',
  'templateStore.templates'
]).

config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/templates'});
}]);
