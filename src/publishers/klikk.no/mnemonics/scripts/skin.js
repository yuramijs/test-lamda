var connect = require('paradux/connect');

function init() {
  document.body.classList.add('has-horseshoe');
}

function destroy() {
  document.body.classList.remove('has-horseshoe');
}

function run() {
  connect('ADSM_RMB_SKIN_INIT', init);
  connect('ADSM_RMB_SKIN_DESTROY', destroy);
}

module.exports = {
  run: run,
};
