//sudo sam local invoke createAdsm -event event.json
//http://localhost:3000/0f52469d-0e93-4986-8e25-c58bf901eaaf?folder=aniston.dk
//sudo sam local start-api

const AWS = require('aws-sdk');
const spawn = require('child_process').spawn;
const fs = require('fs');
const path = require('path');
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
        return `/home/q/using-aws-sdk/aniston/css/${file}`;
    }
    else if(file === 'skin.js') {
        return `/home/q/using-aws-sdk/aniston/mnemonics/${file}`;
    }
    else {
        return `/home/q/using-aws-sdk/aniston/${file}`;
    }
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
     
        const write = await (writeFile('/home/q/using-aws-sdk/aniston/macro.js', content, 'utf8')); 

    
    });
});

// const result = (headers, body, callback) => {
//     return callback(null, {
//                 statusCode: 200,
//                 headers: { "x-custom-header" : headers },
//                 body: body
//             })
// };

exports.handler = (event, context, callback) => {

    //write('0f52469d-0e93-4986-8e25-c58bf901eaaf');

     //const wp = spawn('./node_modules/.bin/webpack', ['--config', 'webpack.config.js', '--env.publisher', path]);

     const wp = spawn('node ./writeFiles.js');
      
//     // wp.stdout.on('data', function(data){
//     //     console.log('stdout: ' + data);
//     // });
      
//     wp.stderr.on('data', function(err){
//         context.fail("writeFile failed: " + err);
//     });
                            
                          
//  wp.on('close', code => {
//     //TODO refactor resolve problem with favicon query
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