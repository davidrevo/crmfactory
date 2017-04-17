'use strict';

angular.module('crmf').controller('entryCtrl', ['$q', '$http', '$scope', function($q, $http, $scope){
  $scope.msg = function(expander) {
    alert(expander.popmsg);
  };

  $scope.hello = "Hello World";

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
