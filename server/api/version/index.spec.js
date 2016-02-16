'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var versionCtrlStub = {
  index: 'versionCtrl.index'
};

var routerStub = {
  get: sinon.spy()
};

// require the index with our stubbed out modules
var versionIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './version.controller': versionCtrlStub
});

describe('Version API Router:', function() {

  it('should return an express router instance', function() {
    versionIndex.should.equal(routerStub);
  });

  describe('GET /api/versions', function() {

    it('should route to version.controller.index', function() {
      routerStub.get
        .withArgs('/', 'versionCtrl.index')
        .should.have.been.calledOnce;
    });

  });

});
