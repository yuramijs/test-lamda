//sudo sam local invoke createAdsm -event event.json
//http://localhost:3000/0f52469d-0e93-4986-8e25-c58bf901eaaf?folder=aniston.dk
//sudo sam local start-api

const AWS = require('aws-sdk');
const spawn = require('child_process').spawn;
const fs = require('fs')

const s3 = new AWS.S3({apiVersion: '2006-03-01'});
const result = (headers, body, callback) => {
    return callback(null, {
                statusCode: 200,
                headers: { "x-custom-header" : headers },
                body: body
            })
};

exports.handler = (event, context, callback) => {

    var params = {
        Bucket: 'adnami-dev-440674',
        Prefix: '',
      };

      s3.listObjects(params, function(err, data) {
        if (err) return console.log(err, err.stack); 
        console.log(data);
      });





    // const path = event.queryStringParameters.folder;
    // const uuid = event.path.slice(1);

    // const wp = spawn('./node_modules/.bin/webpack', ['--config', 'webpack.config.js', '--env.publisher', path]);
    
    // wp.on('close', code => {
    //     //TODO refactor resolve problem with favicon query
    //     if(code === 2) return result('favicon', 'favicon', callback);
        
    //     fs.readFile('/tmp/bundle.js', 'utf8', (err, data) => {
    //         if (err) return context.fail("Read file failed: " + err);

    //         const params = {
    //             Body: data,
    //             Bucket: '/adnami-dev-440674/adsm',
    //             Key: `adsm${uuid}.js`,
    //         };

    //         s3.putObject(params, (err, data) => {
    //             if(err) return console.error(err);
    //             const body = path + ' compiled';
    //             result(path, body, callback);
    //         });
    //      });

    // });  
    
};