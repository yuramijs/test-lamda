function run() {
  window.adsm = window.adsm || {};
  window.adsm.wallpaper = window.adsm.wallpaper || {};
  window.adsm.wallpaper.element = '#container';

  function addEvent(element, event, delegate) {
    return element.addEventListener ? element.addEventListener(event, delegate, false) : element.attachEvent ? element.attachEvent('on' + event, delegate) : false;
  }

  function position() {
    var cl = 'adsm-skin-fixed';
    var lb = document.getElementById('cncpt-lb1');
    var html = document.querySelector('html.adsm-skin');
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (html) {
      var className = html.className;
      var top = lb.getBoundingClientRect().top;
      if (top > 0) {
        html.classList.remove(cl);
      } else {
        html.classList.add(cl);
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
