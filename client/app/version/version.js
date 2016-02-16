'use strict';

angular.module('zendeskDopplerApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('version', {
        url: '/versions',
        templateUrl: 'app/version/version.html',
        controller: 'VersionController',
        controllerAs: 'versionCtrl'
      })
      .state('vdetails', {
        url: '/version/:id',
        templateUrl: 'app/version/version-by-id.html',
        controller: 'VersionController',
        controllerAs: 'versionCtrl'
      });
  });
