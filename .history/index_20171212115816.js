//sudo sam local invoke createAdsm -event event.json
//http://localhost:3000/0f52469d-0e93-4986-8e25-c58bf901eaaf?folder=aniston.dk
//sudo sam local start-api

const AWS = require('aws-sdk');
const spawn = require('child_process').spawn;
const fs = require('fs')

const s3 = new AWS.S3({apiVersion: '2006-03-01'});

exports.handler = (event, context, callback) => {
    const path = event.queryStringParameters.folder;
    const uuid = event.path.slice(1);

    const wp = spawn('./node_modules/.bin/webpack', ['--config', 'webpack.config.js', '--env.publisher', path]);
    
    //if you want see webpack progress uncomment string below
    //wp.stdout.on('data', data => console.log('stdout: ' + data));
    
    wp.stderr.on('data', err => context.fail("writeFile failed: " + err));
    
    wp.on('close', code => {
        if(code === 2) return callback(null, {
            statusCode: 200,
            headers: { "x-custom-header" : "my custom header value" },
            body: 'favicon'
        });
        
        fs.readFile('/tmp/bundle.js', 'utf8', (err, data) => {
            if (err) return context.fail("Read file failed: " + err);

            const params = {
                Body: data,
                Bucket: '/adnami-dev-440674/adsm',
                Key: `adsm${uuid}.js`,
            };

            s3.putObject(params, (err, data) => {
                if(err) return console.log(err);
                callback(null, {
                    statusCode: 200,
                    headers: { "x-custom-header" : "my custom header value" },
                    body: path + ' compiled'
                });
            });
         });

    });  
    
};