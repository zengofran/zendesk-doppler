'use strict';

var app = require('../..');
import request from 'supertest';

describe('Version API:', function() {

  describe('GET /api/versions', function() {
    var versions;

    beforeEach(function(done) {
      request(app)
        .get('/api/versions')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          versions = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      versions.should.be.instanceOf(Array);
    });

  });

});
