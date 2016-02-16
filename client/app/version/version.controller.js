'use strict';

(function() {

class VersionController {

  constructor($http, $stateParams) {
    this.$http = $http;
    this.versions = [];
    this.id = $stateParams.id
    if(this.id){

	    $http.get('/api/versions/' + this.id).then(response => {
	      this.details = response.data[0];
	    });

	}
	else{
		 $http.get('/api/versions').then(response => {
	      this.versions = response.data[0].versions;
	    });

	}
  }
}

angular.module('zendeskDopplerApp')
  .controller('VersionController', VersionController);

})();
