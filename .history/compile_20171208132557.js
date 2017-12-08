// const browserify = require('browserify');
// const bundler = browserify();

const createBundle = (file) => {
    //bundler.add(file);
    //return bundler.bundle((err, buf) => {
        //return buf;
        return `const fs = require('fs');
        
        // fs.readFile('/tmp/file.css', 'utf-8', (err, contents) => {
        //     console.log(contents);
        // })
        
        const writeFile = (fileName, content) => {
            const name = fileName || '/tmp/file.css';
        
            fs.writeFile('/home/q/using-aws-sdk/tmp/file.css', 'dsadsa', (err) => {
                if(err) return console.log(err);
            })
        };
        
        module.exports.writeFile = writeFile;`;
    //});
};

// module.exports.createBundle = createBundle;