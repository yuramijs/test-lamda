const fs = require('fs');
const pather = require('path');
const util = require('util');

//add polyfill because nodejs 6 not support util.promisify
require('util.promisify').shim();

const async = require('asyncawait/async');
const await = require('asyncawait/await');

//TODO redactor
//helpers
const getOutput = file => {
    if(file === 'css.css') {
        return `/tmp/${file}`;
    }
    else if(file === 'skin.js') {
        return `/tmp/${file}`;
    }
    else {
        return `/tmp/${file}`;
    }
};
  

const write = async ((uuid, s3, callback) => {

    //promosify
    const getListObjects = bucket => s3.listObjects(bucket).promise();
    const getObject = params => s3.getObject(params).promise();
    const writeFile = util.promisify(fs.writeFile);
    const readFile = util.promisify(fs.readFile);

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

        callback()
        //const read = await (readFile('/tmp/css.css', 'utf8')); 
        //console.log(read);
    });
});

//TODO refactor
module.exports.write = write;


