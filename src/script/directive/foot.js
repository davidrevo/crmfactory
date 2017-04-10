'use strict';

angular.module('crmf').directive('crmfFoot', [function(){
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'view/template/foot.html'
  };
}]);
