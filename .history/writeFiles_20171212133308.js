var AWS = require('aws-sdk');

AWS.config.update({region: 'eu-west-1', credentials: {
    accessKeyId: 'AKIAIPF6I6EGEMMKASAQ',
    secretAccessKey : '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',
}});

var s3 = new AWS.S3({apiVersion: '2006-03-01'});

function listObjects(bucket, callback) {
  s3.listObjects({
    Bucket: bucket
  }, callback);
}

// Export the handler function
module.exports = listObjects;