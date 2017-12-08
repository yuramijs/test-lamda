//sudo sam local invoke Bundle -event event.json

var spawn = require('child_process').spawn;
var fs = require('fs')

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
            context.succeed(data);
         });

    });
    
    
};