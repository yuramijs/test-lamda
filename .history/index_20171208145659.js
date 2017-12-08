//sudo sam local invoke Bundle -event event.json
const AWS = require('aws-sdk');
var spawn = require('child_process').spawn;
var fs = require('fs')
const s3 = new AWS.S3({apiVersion: '2006-03-01'});
exports.handler = (event, context, callback) => {
    
    var wp = spawn('node compile.js', ['--config', 'webpack.config.js']);
    
    wp.stdout.on('data', data => console.log('stdout: ' + data));
    
    wp.stderr.on('data', err => context.fail("writeFile failed: " + err));
    
    wp.on('close', code => {

        fs.readFile('/tmp/bundler.js', 'utf8', function (err,data) {
            if (err) return context.fail("read file failed: " + err);
    
            const params = {
                Body: data,
                Bucket: '/adnami-dev-440674/adsm',
                Key: 'adsm.js',
            };
            s3.putObject(params, (err, data) => {
                if(err) return console.log(err);
                callback(null, 'put file')
            });
            //context.succeed('file upload');
         });

    });
    
    
};