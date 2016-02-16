'use strict';

(function() {

class VersionController {

  constructor($http, $stateParams) {
    this.$http = $http;
    this.versions = [];
    this.id = $stateParams.id;
    if(this.id){

	    $http.get('/api/versions/' + this.id).then(response => {
	      this.details = response.data;




	     var ticketsArr=[];
        for (var i = this.details.tickets.length - 1; i >= 0; i--) {
          var item = this.details.tickets[i]
          var status= item.status;
        if(status === "new"){
          item.statusClass = "bs-callout-danger";
          item.statusName = "New";
        }
        else
        if(status === "planned"){

            item.statusClass = "bs-callout-warning";
            item.statusName = "Planned";
        }
        else
        if(status === "in_progress"){

              item.statusClass = "bs-callout-warning";
              item.statusName = "In Progress";
        }
        else
        if(status === "shipped"){

                item.statusClass = "bs-callout-success";
                item.statusName = "Shipped";
        }
        else
          if(status === "done"){
                item.statusClass = "bs-callout-info";
                item.statusName = "Done";
        }
        ticketsArr[i]=item

        };
        this.details.tickets=ticketsArr;
	    });

	}
	else{
		 $http.get('/api/versions').then(response => {
	      this.versions = response.data;
	    });

	}
  }
}

angular.module('zendeskDopplerApp')
  .controller('VersionController', VersionController);

})();
