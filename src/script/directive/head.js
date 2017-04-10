'use strict';

angular.module('crmf').directive('crmfHead', [function(){
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'view/template/head.html'
  };
}]);
