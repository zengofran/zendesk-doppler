/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/versions              ->  index
 */

'use strict';



/**
 * Get list of versions
 */
exports.index = function(req, res) {
  res.json([
	{
	    "versions": [
	        {
	            "version": "1.5.4.1",
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


  res.json([
	{
    "time_stamp": 14563,
    "version": "1.5.4.1"+ req.params.id,
    "tickets": [
        {
            "title": "Title",
            "status": "Open",
            "id": 123,

        }
    ]
	}
  	]);
};