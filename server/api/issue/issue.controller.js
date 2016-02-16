/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/issues              ->  index
 */

'use strict';

var requestify = require('requestify');



/**
 * Get list of versions
 */
exports.index = function(req, res) {
  res.json([
	{
	    "versions": [
	        {
	            "issue": "1.5.4.1",
	            "num_of_tickets": 12,
	        },
	        {
	            "version": "1.5.4.4",
	            "num_of_tickets": 10,
	        }
	    ]
	  }
  	]);
};


/**
 * Get a single version
 */
exports.show = function (req, res, next) {


  requestify.get('https://zendesk-doppler-dev.herokuapp.com/api/v1/tickets/'+req.params.id).then(function(response) {
		// Get the response body

		 res.json(response.getBody());

	 });
};