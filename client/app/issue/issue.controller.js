'use strict';

(function() {

class IssueController {

  constructor($http,$scope, $stateParams) {
    this.$http = $http;
    this.awesomeIssues = [];
    this.id = $stateParams.id



    if(this.id){

	   $http.get('/api/issues/'+this.id).then(response => {
        this.issue = response.data[0];
       });

	}
	else{
		 $http.get('/api/issues').then(response => {
	      this.issues = response.data[0].issues;
	    });

	}
  }
}

angular.module('zendeskDopplerApp')
  .controller('IssueController', IssueController);

})();
