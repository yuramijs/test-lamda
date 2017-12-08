var skin = require('./skin.js');

function run() {
  var adsmtag = window.adsmtag = window.adsmtag || {};
  adsmtag.mnemonics = adsmtag.mnemonics || [];
  if (adsmtag.mnemonics.indexOf('scripts') === -1){
    skin.run();
    adsmtag.mnemonics.push('scripts');
  }
}

module.exports = {
  run: run,
};
