'use strict';

describe('Controller: VersionController', function() {

  // load the controller's module
  beforeEach(module('zendeskDopplerApp'));
  beforeEach(module('stateMock'));

  var scope;
  var VersionController;
  var state;
  var $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function(_$httpBackend_, $controller, $rootScope, $state) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/versions')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    state = $state;
    VersionController = $controller('VersionController', {
      $scope: scope
    });
  }));

  it('should attach a list of versions to the controller', function() {
    $httpBackend.flush();
    expect(VersionController.versions.length).toBe(4);
  });
});
