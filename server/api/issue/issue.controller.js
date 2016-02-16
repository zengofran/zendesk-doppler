/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/issues              ->  index
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
	  "ticket_title": "Title"+req.params.id,
	  "source_url": "https://github.com/zendesk",
	  "ticket_description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	  "requester": {
	    "name": "Jose",
	    "avatar_url": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/2/000/126/291/1047d1a.jpg"
	  },
	  "status": "Open",
	  "version": "1.5.4.1",
	  "status_history": [
	    {
	      "status": "Open",
	      "time_stamp": 1455537563
	    }
	  ]
	}
  	]);
};