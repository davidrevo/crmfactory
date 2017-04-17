describe("Get Employee JSON Data Test", function(){
  beforeEach(module('crmf'));
  var employeeController, scope;
  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    employeeController = $controller('entryCtrl', {$scope: scope});
  }));
  it('Controller Page Title Test', function(){
    expect(scope.title).toEqual('CRM Factory');
  });
});
