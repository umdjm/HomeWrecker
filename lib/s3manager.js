var AWS = require('aws-sdk');
var fs = require('fs');
var zlib = require('zlib');

var config = require('rc')('divorce');

var S3Manager = function () {
	AWS.config.update({Bucket: config.amazon.bucket, accessKeyId: config.amazon.key, secretAccessKey: config.amazon.secret});
	var s3 = new AWS.S3();

	var getUrl = function () {
		var params = {Key: 	"big-buck-bunny_trailer.webm", Bucket: config.amazon.bucket};
		s3.getSignedUrl('getObject', params, function (err, url) {
			console.log("The URL is", url);
		});
	}

	return {
		getUrl: getUrl
	};
};

module.exports = S3Manager;
