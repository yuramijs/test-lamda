var cookie = require('core/cookie');
var script = require('core/script');

function bootstrap(config) {
  if (cookie.get('__adsm_macro') && !document.getElementById('adsm-macro-preview')) {
    script.load('/adsm.macro.' + config.uuid + '.js', 'adsm-macro-preview');
    return;
  }
  config.default();
}

module.exports = {
  bootstrap: bootstrap,
};
