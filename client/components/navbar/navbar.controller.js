'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main'
  },
  {
    'title': 'Versions',
    'state': 'version'
  }
  ];

  isCollapsed = true;
  //end-non-standard

  constructor() {
    }
}

angular.module('zendeskDopplerApp')
  .controller('NavbarController', NavbarController);
