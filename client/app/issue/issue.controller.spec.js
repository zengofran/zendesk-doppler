'use strict';

describe('Controller: IssueController', function() {

  // load the controller's module
  beforeEach(module('zendeskDopplerApp'));
  beforeEach(module('stateMock'));

  var scope;
  var IssueController;
  var state;
  var $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function(_$httpBackend_, $controller, $rootScope, $state) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/issues')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    state = $state;
    IssueController = $controller('IssueController', {
      $scope: scope
    });
  }));

  it('should attach a list of issues to the controller', function() {
    $httpBackend.flush();
    expect(IssueController.awesomeIssues.length).toBe(4);
  });
});
