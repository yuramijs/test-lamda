const AWS = require('aws-sdk');
const spawn = require('child_process').spawn;
const fs = require('fs');
const pather = require('path');

AWS.config.update({region: 'eu-west-1', credentials: {
    accessKeyId: 'AKIAIPF6I6EGEMMKASAQ',
    secretAccessKey : '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',
}});

var s3 = new AWS.S3({apiVersion: '2006-03-01'});


var bucket = {
    Bucket: 'adnami-dev-440674',
    Prefix: 'macro/0f52469d-0e93-4986-8e25-c58bf901eaaf',
  };

function listObjects(bucket, callback) {

    s3.listObjects(bucket, function(err, data) {
        if (err) return console.log(err, err.stack); 
        const objects = data.Contents.slice(1);

        objects.map((item, index) => {
        
            const file = item.Key.slice(43);

            const params = {
                Bucket: 'adnami-dev-440674/macro/0f52469d-0e93-4986-8e25-c58bf901eaaf',
                Key: 'macro.js', //file
            };

            s3.getObject(params, function(err, data) {
                if (err) return console.log(err, err.stack); 
                fs.writeFile(__dirname + '/test/macro.js', data.Body, 'utf8', () => {

                    console.log(file + ' write' + __dirname + '/test/macro.js'))
                    //const path = 'aniston.dk'//event.queryStringParameters.folder;
                    //const uuid = '0f52469d-0e93-4986-8e25-c58bf901eaaf'//event.path.slice(1);  

                });  
                
            });
        });
      });
}

listObjects(bucket);

// Export the handler function
module.exports = listObjects;