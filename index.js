//http://localhost:3000/0f52469d-0e93-4986-8e25-c58bf901eaaf
//sudo sam local start-api

const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');
const webpack = require("webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const webpackConfig = require('./webpack.config.js');
const write = require('./writeFiles.js');

const s3 = new AWS.S3({apiVersion: '2006-03-01'});

const result = (body, callback) => {
    return callback(null, {
                statusCode: 200,
                headers: { "x-custom-header" : body },
                body,
            })
};


exports.handler = (event, context, callback) => {

    console.log(event.requestContext.resourcePath);

    const uuid = event.path.slice(1);
    if(event.requestContext.resourcePath !== '/favicon.ico') {
        write.write(uuid, s3, () => {
            webpack(webpackConfig.config, (err, stats) => {
                if(err) return console.log(err);
    
                fs.readFile('/tmp/bundle.js', 'utf8', (err, data) => {
                    if (err) return console.log("Read file failed: " + err);
        
                    const params = {
                        Body: data,
                        Bucket: '/adnami-dev-440674/adsm',
                        Key: `adsm.${uuid}.js`,
                    };
        
                    s3.putObject(params, (err, data) => {
                        if(err) return console.error(err);
    
                        const body = 'publisher compiled';
    
                        console.log('publisher compiled');
                        result(body, callback);
                    });
                });
            });
        });
    }
    else {
        console.log('fav');
        result('fav', callback);
    }
};