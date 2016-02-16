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

        var historyArr=[];
        for (var i = this.issue.history.length - 1; i >= 0; i--) {
          var item = this.issue.history[i]
          var status= item.status;
        if(status === "new"){
          item.statusClass = "label-danger";
          item.statusName = "New";
        }
        else
        if(status === "planned"){

            item.statusClass = "label-warning";
            item.statusName = "Planned";
        }
        else
        if(status === "in_progress"){

              item.statusClass = "label-warning";
              item.statusName = "In Progress";
        }
        else
        if(status === "shipped"){

                item.statusClass = "label-success";
                item.statusName = "Shipped";
        }
        else
          if(status === "done"){
                item.statusClass = "label-info";
                item.statusName = "Done";
        }
        historyArr[i]=item

        };
        this.issue.history=historyArr;
      });
      }
      else{
       $http.get('/api/issues').then(response => {
         this.issues = response.data;

       });

     }
   }
   getStatus(status){

   }

 }

 angular.module('zendeskDopplerApp')
 .controller('IssueController', IssueController);

})();
