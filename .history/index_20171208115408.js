// start function: sudo sam local invoke ExampleFunction -e event.json

'use strict';

const AWS = require('aws-sdk');
var fs = require('fs');
const _ = require('lodash');
const compile = require('./compile');

const s3 = new AWS.S3({apiVersion: '2006-03-01'});
const objectParams = {
    Bucket: 'adnami-dev-440674',
    Delimiter: '',
    Prefix: 'macro/33a2a992-3d45-4a12-9e05-3b0d6802f48f/'
};

const removePrefix = prefix => prefix.slice(43);
const getFiles = contents => {
    const files = [];

    contents.map((item, index) => {
        const key = removePrefix(item.Key);

        if(!_.isEmpty(key)) {
            files.push(key);  
        }
    });

    return files;
};

exports.handler = (event, context, callback) => {
    
    const list = s3.listObjects(objectParams).promise();

    const fiels = list.then(data => {

        const contents = data.Contents;
        return getFiles(contents);

    })
    .catch(err => {
        console.log(err, err.stack);
    });
    
    fiels.then(files => {

        const options = {
            Bucket    : '/adnami-dev-440674/macro/33a2a992-3d45-4a12-9e05-3b0d6802f48f',
            Key    : files[0],
        };
        const object = s3.getObject(options).promise();

        object.then(file => {
            const newfile = file.Body.toString('utf-8');
     
            const params = {
                Body: newfile,
                Bucket: '/adnami-dev-440674/macro/33a2a992-3d45-4a12-9e05-3b0d6802f48f',
                Key: 'new.css',
            };
            s3.putObject(params, (err, data) => {
                if(err) return console.log(err);
                callback(null, 'put file')
            });
        })
    })

}