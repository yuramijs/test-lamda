// var css = require('./mnemonics/css');
// var scripts = require( './mnemonics/scripts');
var macro = require( 'macro');
var script = require( 'core/script');

var config = {
  uuid: '2426bc08-aa71-4179-acd1-e06eaaf08455',
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
        path: '/5706918/onblog.dk_dsk_lb1',
        size: [
          [[737, 590], [[930, 180], [930, 600]]],
          [[0, 0], []]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-lb2', {
        path: '/5706918/onblog.dk_dsk_lb2',
        size: [
          [[737, 590], [[930, 180], [930, 600]]],
          [[0, 0], []]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-lb3', {
        path: '/5706918/onblog.dk_dsk_lb3',
        size: [
          [[737, 590], [[930, 180], [930, 600]]],
          [[0, 0], []]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-lb4', {
        path: '/5706918/onblog.dk_dsk_lb4',
        size: [
          [[737, 590], [[930, 180], [930, 600]]],
          [[0, 0], []]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-lb5', {
        path: '/5706918/onblog.dk_dsk_lb5',
        size: [
          [[737, 590], [[930, 180], [930, 600]]],
          [[0, 0], []]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-lb6', {
        path: '/5706918/onblog.dk_dsk_lb6',
        size: [
          [[737, 590], [[930, 180], [930, 600]]],
          [[0, 0], []]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.display('cncpt-lb1', 'def-lb1');

      adsmtag.display('cncpt-lb2', 'def-lb2');

      adsmtag.display('cncpt-lb3', 'def-lb3');

      adsmtag.display('cncpt-lb4', 'def-lb4');

      adsmtag.display('cncpt-lb5', 'def-lb5');

      adsmtag.display('cncpt-lb6', 'def-lb6');
    });

    adsmtag.cmd = cmd.concat(adsmtag.cmd || []);

    script.load('https:' + '//rmb-adsembler.netdna-ssl.com/mnemonics/adsm.macro.edge.js');
  }
}
macro.bootstrap(config);
