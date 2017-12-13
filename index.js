//0f52469d-0e93-4986-8e25-c58bf901eaaf - aniston
//a1d9b4db-6136-4ead-af16-6f4db93de113 - xaxis
//sudo sam local start-api

const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');
const webpack = require("webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin');
require('util.promisify').shim();
const util = require('util');

const async = require('asyncawait/async');
const await = require('asyncawait/await');

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


exports.handler = async ((event, context, callback) => {
    const uuid = event.path.slice(1);

    const readFile = util.promisify(fs.readFile);
    const putObject = params => s3.putObject(params).promise();
    const writeFile = (uuid, s3) => {
        return new Promise((resolve, reject) => {
        write.write(uuid, s3, result => {
            resolve(result);
        })
    })};
    
    if(event.requestContext.resourcePath === '/favicon.ico') return result('fav',  callback);

    await (writeFile(uuid, s3));
            
    webpack(webpackConfig.config, async ((err, stats) => {
        if(err) return console.log(err);

        const data = await (readFile('/tmp/bundle.js', 'utf8'));

        const params = {
            Body: data,
            Bucket: '/adnami-dev-440674/adsm',
            Key: `adsm.${uuid}.js`,
        };

        const putObjects = await (putObject(params));
        const body = 'publisher compiled';
        
        console.log(`publisher with uuid ${uuid} compiled`);
        result(body, callback);

    }));

});