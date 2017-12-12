const AWS = require('aws-sdk');
const fs = require('fs');
const pather = require('path');
const util = require('util');
const webpack = require('./webpack.config.js');

//add polyfill because nodejs 6 not support util.promisify
require('util.promisify').shim();

const async = require('asyncawait/async');
const await = require('asyncawait/await');

//settings add to config file
AWS.config.update({region: 'eu-west-1', credentials: {
    accessKeyId: 'AKIAIPF6I6EGEMMKASAQ',
    secretAccessKey : '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',
}});
const s3 = new AWS.S3({apiVersion: '2006-03-01'});

//helpers
const getOutput = file => {
    if(file === 'css.css') {
        return `${__dirname}/aniston/css/${file}`;
    }
    // else if(file === 'skin.js') {
    //     return `${__dirname}/aniston/mnemonics/${file}`;
    // }
    // else {
    //     return `${__dirname}/aniston/${file}`;
    // }
};
  

//promosify
const getListObjects = bucket => s3.listObjects(bucket).promise();
const getObject = params => s3.getObject(params).promise();
const writeFile = util.promisify(fs.writeFile);

const write = async ((uuid) => {

    const bucket = {
        Bucket: 'adnami-dev-440674',
        Prefix: `macro/${uuid}`,
    };
    const objectsList = await (getListObjects(bucket));
    //TODO get only full objects
    const objects = objectsList.Contents.slice(1);

    objects.map((object, index) => {
        
        const fileName = object.Key.slice(43);

        const params = {
            Bucket: `adnami-dev-440674/macro/${uuid}`,
            Key: fileName,
        };

        const output = getOutput(fileName); 
        const obj = await (getObject(params));

        const content = obj.Body;
     
        const write = await (writeFile(output, content, 'utf8')); 
    });
});

write('0f52469d-0e93-4986-8e25-c58bf901eaaf');


exports.write = write;