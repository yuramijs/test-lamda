import browserSync from 'browser-sync';
import compiler from './compiler';

async function start() {
  let publisher = require(`./src/publishers/${process.argv[3]}/config.js`);

  await compiler.watch();

  browserSync.create().init({
    proxy: {
      target: publisher.url,
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
    ...(publisher.inject) ? {
      snippetOptions: {
        rule: {
          match: /<\/head>/i,
          fn: function (snippet, match) {
            return `<script>` +
                   `  var adsmtag = adsmtag || {};` +
                   `  adsmtag.cmd = adsmtag.cmd || [];` +
                   `  (function () {` +
                   `    var script = document.createElement('script');` +
                   `    script.async = true;` +
                   `    script.type = 'text/javascript';` +
                   `    script.src = '/adsm.macro.${publisher.uuid}.js';` +
                   `    var node = document.getElementsByTagName('script')[0];` +
                   `    node.parentNode.insertBefore(script, node);` +
                   `  })();` +
                   `</script>` + snippet + match;
          }
        }
      }
    } : { }
  });
}

export default start;
