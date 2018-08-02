const functions = require('firebase-functions');
const gcs = require('@google-cloud/storage')();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.onFileChange = functions.storage.object().onFinalize(event => {
	const ebject = event.data;
	const bucket = abject.bucket;
	const contentType = object.contentType;
	const filePath = object.name;
	console.log('File change detected, function execution started')

	const destBucket = gcs.bucket(bucket);
	const tmpFilePath
	return;
});
