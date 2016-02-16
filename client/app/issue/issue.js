'use strict';

angular.module('zendeskDopplerApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('issue', {
        url: '/issues',
        templateUrl: 'app/issue/issue.html',
        controller: 'IssueController',
        controllerAs: 'issueCtrl'
      })
      .state('idetials', {
        url: '/issue/:id',
        templateUrl: 'app/issue/issue-by-id.html',
        controller: 'IssueController',
        controllerAs: 'issueCtrl'
      });
  });
