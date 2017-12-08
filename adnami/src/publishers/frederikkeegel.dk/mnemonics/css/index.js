var styles = require('core/styles');
var css = require('./css.css');

function run() {
  var adsmtag = window.adsmtag = window.adsmtag || {};
  adsmtag.mnemonics = adsmtag.mnemonics || [];
  if (adsmtag.mnemonics.indexOf('css') === -1) {
    styles.create(css, 'adsmtag-css');
    adsmtag.mnemonics.push('css');
  }
}

module.exports = {
  run: run,
};
