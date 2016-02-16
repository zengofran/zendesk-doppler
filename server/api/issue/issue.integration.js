'use strict';

var app = require('../..');
import request from 'supertest';

describe('Issue API:', function() {

  describe('GET /api/issues', function() {
    var issues;

    beforeEach(function(done) {
      request(app)
        .get('/api/issues')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          issues = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      issues.should.be.instanceOf(Array);
    });

  });

});
