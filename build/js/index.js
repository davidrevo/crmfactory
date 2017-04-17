'use strict';

angular.module('crmf', ['ui.router']);

/* For test purpose */
function reverse(name){
    return name.split("").reverse().join("");
}

'use strict';

angular.module('crmf').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  $stateProvider.state('entry', {
    url: '/entry',
    templateUrl: 'view/entry.html',
    controller: 'entryCtrl'
  });
  $urlRouterProvider.otherwise('entry');
}]);

'use strict';

angular.module('crmf').controller('entryCtrl', ['$q', '$http', '$scope', function($q, $http, $scope){
  $scope.msg = function(expander) {
    alert(expander.popmsg);
  };

  var def = $q.defer();
  $http.get('/data/employee.json')
  .success(function(resp){
    $scope.expanders = resp;
    def.resolve(resp);
    console.log($scope.expanders);
  })
  .error(function(err){
    def.reject(err);
  });
  return def.promise;
}]);

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

'use strict';

angular.module('crmf').directive('crmfFoot', [function(){
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'view/template/foot.html'
  };
}]);

'use strict';

angular.module('crmf').directive('crmfHead', [function(){
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'view/template/head.html'
  };
}]);
