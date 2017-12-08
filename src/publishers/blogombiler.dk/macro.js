// var css = require('./mnemonics/css');
// var scripts = require( './mnemonics/scripts');
var macro = require( 'macro');
var script = require( 'core/script');

var config = {
  uuid: '032b5abd-4b11-430b-83b0-7e365aa8d8e1',
  default: function() {
    var adsmtag = window.adsmtag = window.adsmtag || {};
    var cmd = [];
    // cmd.push(function () {
    //   scripts.run();
    //   css.run();
    // });
    cmd.push(function () {
      adsmtag.service().setTargeting('entry', 'first');
      adsmtag.define('def-lb1', {
        path: '/5706918/blogombiler.dk_dsk_lb1_245982',
        size: [
          [[930, 600], [[930, 180], [930, 600]]],
          [[0, 0], []]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-rec1', {
        path: '/5706918/blogombiler.dk_dsk_rec1_245983',
        size: [
          [[930, 600], [300, 250]],
          [[0, 0], []]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-rec2', {
        path: '/5706918/blogombiler.dk_dsk_rec2',
        size: [
          [[930, 600], [300, 250]],
          [[0, 0], []]
        ],
        inview: [100],
        refresh: 0
      });

      adsmtag.define('def-rec3', {
        path: '/5706918/blogombiler.dk_dsk_rec3',
        size: [
          [[930, 600], [300, 250]],
          [[0, 0], []]
        ],
        inview: [100],
        refresh: 0
      });

      adsmtag.define('def-outstream', {
        path: '/5706918/blogombiler.dk_outstream',
        size: [
          [[0, 0], [1, 1]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.display('cncpt-lb1', 'def-lb1');
      adsmtag.display('cncpt-rec1', 'def-rec1');
      adsmtag.display('cncpt-rec2', 'def-rec2');
      adsmtag.display('cncpt-rec3', 'def-rec3');
      adsmtag.display('cncpt-outstream', 'def-outstream');
    });

    adsmtag.cmd = cmd.concat(adsmtag.cmd || []);

    script.load('https:' + '//rmb-adsembler.netdna-ssl.com/mnemonics/adsm.macro.edge.js');
  }
}
macro.bootstrap(config);
