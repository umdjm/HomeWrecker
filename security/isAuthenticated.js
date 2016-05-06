'use strict';

function isAjax(req) {
	var accepts = req.get('accepts') || '';
	return req.xhr || accepts.indexOf('json') > -1;
}

module.exports = function(){
	return function(req, res, next) {
		if(req.user) {
			next();
		}
		else if(isAjax(req)) {
			res.status(401)
				.send({ message: 'User is not authenticated!' });
		}
		else {
			if(req.method === 'GET') {
				req.session.redirectOnAuth = req.originalUrl;
			}

			res.redirect('/login');
		}
	}
};
