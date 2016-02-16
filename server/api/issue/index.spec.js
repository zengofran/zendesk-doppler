'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var issueCtrlStub = {
  index: 'issueCtrl.index'
};

var routerStub = {
  get: sinon.spy()
};

// require the index with our stubbed out modules
var issueIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './issue.controller': issueCtrlStub
});

describe('Issue API Router:', function() {

  it('should return an express router instance', function() {
    issueIndex.should.equal(routerStub);
  });

  describe('GET /api/issues', function() {

    it('should route to issue.controller.index', function() {
      routerStub.get
        .withArgs('/', 'issueCtrl.index')
        .should.have.been.calledOnce;
    });

  });

});
