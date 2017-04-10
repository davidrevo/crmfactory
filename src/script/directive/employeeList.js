'use strict';

angular.module('crmf').directive('crmfEmployeeList', [function(){
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'view/template/employee-list.html',
  };
}]);

angular.module('crmf').directive('accordion', function(){
  return{
    restrict: 'A',
    replace: true,
    transclude: true,
    template: '<div ng-transclude></div>',
    controller: function() {
      var expanders = [];
      this.gotOpened = function(selectedExpander) {
        angular.forEach(expanders, function(expander){
          if(selectedExpander != expander) {
            expander.showMe = false;
          }
        });
      };
      this.addExpander = function(expander) {
        expanders.push(expander);
      };
    }
  };
});

angular.module('crmf').directive('expander', function(){
  return {
    restrict: 'A',
    replace: true,
    transclude: true,
    require: '^?accordion',
    scope: {
      expanderTitle: '='
    },
    template: '<div>' + '<div class="ex-title" ng-click="toggle()">{{expanderTitle}}</div>'
    + '<div class="ex-body" ng-show="showMe" ng-transclude></div>' + '</div>',
    link: function(scope, iElement, iAttrs, accordionController) {
      scope.showMe = false;
      accordionController.addExpander(scope);
      scope.toggle = function toggle() {
        scope.showMe = !scope.showMe;
        accordionController.gotOpened(scope);
      };
    }
  }
});
