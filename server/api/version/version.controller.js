/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/versions              ->  index
 */

'use strict';
var requestify = require('requestify');


/**
 * Get list of versions
 */
exports.index = function(req, res) {

 requestify.get('https://zendesk-doppler-dev.herokuapp.com/api/v1/versions').then(function(response) {
	// Get the response body

	 res.json(response.getBody());

 });


};


/**
 * Get a single version
 */
exports.show = function (req, res, next) {

	requestify.get('https://zendesk-doppler-dev.herokuapp.com/api/v1/versions/'+req.params.id).then(function(response) {
		// Get the response body

		 res.json(response.getBody());

	 });

};