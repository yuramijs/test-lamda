//sudo sam local invoke Bundle -event event.json

var spawn = require('child_process').spawn;
var fs = require('fs')
const s3 = new AWS.S3({apiVersion: '2006-03-01'});
exports.handler = (event, context, callback) => {
    
    var wp = spawn('./node_modules/.bin/webpack', ['--config', 'webpack.config.js']);
    
    wp.stdout.on('data', function(data){
      //console.log('stdout: ' + data);
    });
    
    wp.stderr.on('data', function(err){
      context.fail("writeFile failed: " + err);
    });
    
    wp.on('close', (code) => {
        fs.readFile('/tmp/bundle.js', 'utf8', function (err,data) {
            if (err) {
                context.fail("read file failed: " + err);
            }
            console.log(data);
            const params = {
                Body: data,
                Bucket: '/',
                Key: 'new.css',
            };
            s3.putObject(params, (err, data) => {
                if(err) return console.log(err);
                callback(null, 'put file')
            });
            //context.succeed(data);
         });

    });
    
    
};