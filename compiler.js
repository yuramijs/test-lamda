import path from 'path';
import webpack  from 'webpack';
import { format } from './run';
import config from './webpack.config';

async function compile2(name, compiler) {
  return new Promise((resolve, reject) => {
    let timeStart = new Date();
    let isVerbose = false;
    let isDebug = true;
    compiler.plugin('compile', function() {
      timeStart = new Date();
      console.info(`[${format(timeStart)}] Compiling '${name}'...`);
    });
    compiler.plugin('done', stats => {
      console.info(stats.toString({
        cached: isVerbose,
        cachedAssets: isVerbose,
        chunks: isVerbose,
        chunkModules: isVerbose,
        colors: true,
        hash: isVerbose,
        modules: isVerbose,
        reasons: isDebug,
        timings: true,
        version: isVerbose,
      }));
      const timeEnd = new Date();
      const time = timeEnd.getTime() - timeStart.getTime();
      if (stats.hasErrors()) {
        console.info(
          `[${format(timeEnd)}] Failed to compile '${name}' after ${time} ms`,
        );
        reject(new Error('Compilation failed!'));
      } else {
        console.info(
          `[${format(
            timeEnd,
          )}] Finished '${name}' compilation after ${time} ms`,
        );
        resolve(stats);
      }
    });
  });
}

function build() {
  let publisher = require(`./src/publishers/${process.argv[3]}/config.js`);
  config.entry[`macro.${publisher.uuid}`] = path.join(publisher.dirname, `macro.js`);

  let compiler = webpack(config);
  let compilerPromise = compile2(process.argv[3], compiler);

  compiler.run(function(err, stats) {

  });

  return compilerPromise;
}

function watch() {
  let publisher = require(`./src/publishers/${process.argv[3]}/config.js`);
  config.entry[`macro.${publisher.uuid}`] = path.join(publisher.dirname, `macro.js`);

  let compiler = webpack(config);
  let compilerPromise = compile2(process.argv[3], compiler);

  compiler.watch({ }, function(err, stats) {

  });

  return compilerPromise;
}

export default {
  build,
  watch,
}
