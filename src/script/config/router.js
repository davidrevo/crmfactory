'use strict';

angular.module('crmf').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  $stateProvider.state('entry', {
    url: '/entry',
    templateUrl: 'view/entry.html',
    controller: 'entryCtrl'
  });
  $urlRouterProvider.otherwise('entry');
}]);
