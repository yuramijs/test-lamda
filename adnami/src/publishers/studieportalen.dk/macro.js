// var css = require('./mnemonics/css');
// var scripts = require( './mnemonics/scripts');
var macro = require( 'macro');
var script = require( 'core/script');

var config = {
  uuid: '0f057274-05c8-4e94-8a7b-f10a3b1a3116',
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
        path: '/5706918/StudiePortalen_930x180_skn',
        size: [
          [[0, 0] ,[930, 180]],
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-rec1', {
        path: '/5706918/StudiePortalen_dsk_rec1',
        size: [
          [[0, 0],[300, 250]],
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-rec2', {
        path: '/5706918/StudiePortalen_dsk_rec2',
        size: [
          [[0, 0],[300, 250]],
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-sky3', {
        path: '/5706918/StudiePortalen_dsk_sky3_blk',
        size: [
          [[0, 0],[160, 600]],
        ],
        inview: [],
        refresh: 0,
        dependencies: ['cncpt-lb1']
      });

      adsmtag.define('def-sky4', {
        path: '/5706918/StudiePortalen_dsk_sky4_blk',
        size: [
          [[0, 0],[160, 600]],
        ],
        inview: [],
        refresh: 0,
        dependencies: ['cncpt-lb1']
      });

      adsmtag.display('cncpt-lb1', 'def-lb1');
      adsmtag.display('cncpt-rec1', 'def-rec1');
      adsmtag.display('cncpt-rec2', 'def-rec2');
      adsmtag.display('cncpt-sky3', 'def-sky3');
      adsmtag.display('cncpt-sky4', 'def-sky4');
    });

    adsmtag.cmd = cmd.concat(adsmtag.cmd || []);

    script.load('https:' + '//rmb-adsembler.netdna-ssl.com/mnemonics/adsm.macro.edge.js');
  }
}
macro.bootstrap(config);
