var connect = require('paradux/connect');

function init() {
  document.querySelector('html').classList.add('has-takeover');
  document.body.classList.add('has-takeover');
}

function destroy() {
  document.querySelector('html').classList.remove('has-takeover');
  document.body.classList.remove('has-takeover');
}

function run() {
  connect('ADSM_RMB_SKIN_INIT', init);
  connect('ADSM_RMB_SKIN_DESTROY', destroy);
}

module.exports = {
  run: run,
};
