//http://localhost:3000/0f52469d-0e93-4986-8e25-c58bf901eaaf?folder=aniston.dk
//sudo sam local start-api

const AWS = require('aws-sdk');
//const spawn = require('child_process').spawn;
const fs = require('fs');
const path = require('path');
const webpack = require("webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const webpackConfig = require('./webpack.config.js');
const write = require('./writeFiles.js');

const s3 = new AWS.S3({apiVersion: '2006-03-01'});

const result = (headers, body, callback) => {
    return callback(null, {
                statusCode: 200,
                headers: { "x-custom-header" : headers },
                body: body
            })
};


exports.handler = (event, context, callback) => {
 
    //const webpack = spawn('./node_modules/.bin/webpack', ['--config', '/tmp/webpack.config.js', '--env.publisher', path]);
      
    // webpack.stdout.on('data', function(data){
    //     console.log('stdout: ' + data);
    // });
      
    // webpack.stderr.on('data', function(err){
    //     context.fail("writeFile failed: " + err);
    // });

    const uuid = '0f52469d-0e93-4986-8e25-c58bf901eaaf'

    write.write(uuid, s3, () => {
        console.log('file writed');
        // webpack(webpackConfig.static, (err, stats) => {
        //     if(err) return console.log(err);
        //     fs.readFile('/tmp/bundle.js', 'utf8', (err, data) => {
        //         if (err) return console.log("Read file failed: " + err);
        //         console.log(data);
        //     });
        // });

    });
    
    // fs.writeFile('/tmp/macro.js', 'some', 'utf8', () => {

    //     webpack(webpackConfig.static, function(err, stats) {
    //         if(err) return console.log(err);
    //         fs.readFile('/tmp/bundle.js', 'utf8', (err, data) => {
    //             if (err) return console.log("Read file failed: " + err);
    //             console.log(data);
    //         });
    //     });

    // })
                            
                          
    // webpack.on('close', code => {
    // //TODO refactor resolve problem with favicon query
    //     if(code === 2) return result('favicon', 'favicon', callback);

    //     fs.readFile('/tmp/bundle.js', 'utf8', (err, data) => {
    //         if (err) return context.fail("Read file failed: " + err);

    //         const path = 'aniston.dk'//event.queryStringParameters.folder;
    //         const uuid = '0f52469d-0e93-4986-8e25-c58bf901eaaf'//event.path.slice(1);  

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
    //     });

    // }); 
};