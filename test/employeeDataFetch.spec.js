describe("Get Employee JSON Data Test", function(){
  beforeEach(module('crmf'));
  var employeeController, scope;
  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    employeeController = $controller('entryCtrl', {$scope: scope});
  }));
  it('CRMF already fetched employee list from backend', function(){
    expect(scope.hello).toEqual('Hello world!');
  });
});
