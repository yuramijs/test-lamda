const AWS = require('aws-sdk');
const fs = require('fs');
const pather = require('path');
const util = require('util');

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
    else if(file === 'skin.js') {
        return `${__dirname}/aniston/mnemonics/${file}`;
    }
    else {
        return `${__dirname}/aniston/${file}`;
    }
};
  

//promosify
const getListObjects = bucket => s3.listObjects(bucket).promise();
const getObject = (params) => s3.getObject(params).promise();
const writeFile = util.promisify(fs.writeFile);

const write = async (() => {

    const bucket = {
        Bucket: 'adnami-dev-440674',
        Prefix: 'macro/0f52469d-0e93-4986-8e25-c58bf901eaaf',
    };
    const objects = await (getListObjects(bucket));
    const objectsContent = objects.Contents.slice(1);

    console.log(objectsContent);

    objectsContent.map((object, index) => {
        
        const file = object.Key.slice(43);

        const params = {
            Bucket: 'adnami-dev-440674/macro/0f52469d-0e93-4986-8e25-c58bf901eaaf',
            Key: file,
        };

        const output = getOutput(file); 
        const obj = await (getObject(params));

        const content = obj.Body;

                
        const write = await (writeFile(output, content, 'utf8'));  

    });
});

write()

// listObjects.then(list => {

//     const objects = list.Contents.slice(1);
    // objects.map((object, index) => {
            
    //     const file = object.Key.slice(43);
    //      const params = {
    //         Bucket: 'adnami-dev-440674/macro/0f52469d-0e93-4986-8e25-c58bf901eaaf',
    //         Key: file,
    //         };
    //     const output = getOutput(file);        
    // });

// });

// const listObjects = (bucket, callback) => {
//     s3.listObjects(bucket, (err, list) => {
//         if (err) return console.error(err, err.stack); 
        // const objects = list.Contents.slice(1);

        // objects.map((object, index) => {
        
        //     const file = object.Key.slice(43);
        //     const params = {
        //         Bucket: 'adnami-dev-440674/macro/0f52469d-0e93-4986-8e25-c58bf901eaaf',
        //         Key: file,
        //     };
        //     const output = getOutput(file);        
        // });
//       });
// };

// listObjects(bucket, (params, output, file) => {
//     s3.getObject(params, (err, object) => {
//         const content = object.Body;
//         if (err) return console.error(err, err.stack); 
        
//         fs.writeFile(output, content, 'utf8', () => {
//             console.log(file + ' write');
//         });   
//     });
// });

// Export the handler function
module.exports = listObjects;