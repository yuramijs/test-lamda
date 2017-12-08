import browserSync from 'browser-sync';
import compiler from './compiler';

async function start() {
  let publisher = require(`./src/publishers/${process.argv[3]}/config.js`);

  await compiler.watch();

  let server = require('./src/server.js');
  browserSync.create().init({
    proxy: {
      target: 'http://localhost:5000/',
      ws: true,
      middleware: [
        function(req, res, next) {
          res.setHeader('set-cookie', '__adsm_macro=localhost');
          next();
        }
      ],
    },
    files: 'build/**',
    serveStatic: ['build'],
    startPath: `/${process.argv[3]}`
  });
}

export default start;
