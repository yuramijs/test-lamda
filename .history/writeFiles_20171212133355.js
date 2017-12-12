var AWS = require('aws-sdk');

AWS.config.update({region: 'eu-west-1', credentials: {
    accessKeyId: 'AKIAIPF6I6EGEMMKASAQ',
    secretAccessKey : '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',
}});

var s3 = new AWS.S3({apiVersion: '2006-03-01'});


var params = {
    Bucket: 'adnami-dev-440674',
    Prefix: 'macro/0f52469d-0e93-4986-8e25-c58bf901eaaf',
  };

function listObjects(bucket, callback) {
  s3.listObjects(params, () => console.log('done'););
}

// Export the handler function
module.exports = listObjects;