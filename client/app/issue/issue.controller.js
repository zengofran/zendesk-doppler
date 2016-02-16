'use strict';

(function() {

  class IssueController {

    constructor($http,$scope, $stateParams) {
      this.$http = $http;
      this.awesomeIssues = [];
      this.id = $stateParams.id;



      if(this.id){

	    $http.get('/api/issues/'+this.id).then(response => {
         this.issue = response.data;


        if(this.issue.status === "new"){
          this.issue.className = "panel-danger";
          this.issue.statusClass = "label-danger";
          this.issue.statusName = "New";
        }
        else
        if(this.issue.status === "planned"){
            this.issue.className = "panel-warning"
            this.issue.statusClass = "label-warning";
            this.issue.statusName = "Planned";
        }
        else
        if(this.issue.status === "in_progress"){
              this.issue.className = "panel-warning"
              this.issue.statusClass = "label-warning";
              this.issue.statusName = "In Progress";
        }
        else
        if(this.issue.status === "shipped"){
                this.issue.className = "panel-success"
                this.issue.statusClass = "label-success";
                this.issue.statusName = "Shipped";
        }
        else
          if(this.issue.status === "done"){
                  this.issue.className = "panel-info"
                  this.issue.statusClass = "label-info";
                  this.issue.statusName = "Done";
        }

      });
      }
      else{
       $http.get('/api/issues').then(response => {
         this.issues = response.data;
       });

     }
   }
 }

 angular.module('zendeskDopplerApp')
 .controller('IssueController', IssueController);

})();
