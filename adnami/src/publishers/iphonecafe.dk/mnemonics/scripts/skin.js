function run() {
  window.adsm = window.adsm || {};
  window.adsm.wallpaper = window.adsm.wallpaper || {};
  window.adsm.wallpaper.element = '#content';

  function addEvent(element, event, delegate) {
    return element.addEventListener ? element.addEventListener(event, delegate, false) : element.attachEvent ? element.attachEvent('on' + event, delegate) : false;
  }

  function position() {
    var lb = document.getElementById('cncpt-lb1');
    var html = document.querySelector('html.adsm-skin');
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (html) {
      var className = html.className;
      var top = lb.getBoundingClientRect().top;
      if (top > -450) {
        html.className = className.replace(/\s?adsm-skin-fixed/g, '');
      } else {
        if (className.indexOf('adsm-skin-fixed') === -1) {
          html.className = html.className + ' adsm-skin-fixed';
        }
      }
    }
  }

  addEvent(window, 'scroll', position);
  addEvent(window, 'resize', position);
  addEvent(window, 'load', position);
}

module.exports = {
  run: run,
};
