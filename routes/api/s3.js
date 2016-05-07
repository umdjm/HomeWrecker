var express = require('express');
var router = express.Router();
var config = require('rc')('divorce');
var isAuthenticated = require('../../security/isAuthenticated');
var uuid = require('tiny-uuid4');
var aws = require('aws-sdk');

router.get('/sign', isAuthenticated(), function(req, res, next) {
	var key = req.user._id + "_" + uuid() + ".webm";

	aws.config.update({accessKeyId: config.amazon.key, secretAccessKey: config.amazon.secret});
	var s3 = new aws.S3();
	var s3_params = {
		Bucket: config.amazon.bucket,
		Key: key,
		Expires: 60,
		ContentType: "video/webm",
		ACL: 'public-read'
	};

	s3.getSignedUrl('putObject', s3_params, function(err, data) {
		var return_data;

		if(err) {
			return_data = {
				error: true,
				msg: err
			};
		}
		else {
			return_data = {
				error: false,
				signed_request: data,
				url: 'https://' + config.amazon.bucket + '.s3.amazonaws.com/' + key,
				file_type: "video/webm"
			};
		}

		res.write(JSON.stringify(return_data));
		res.end();
	});
});

module.exports = router;

