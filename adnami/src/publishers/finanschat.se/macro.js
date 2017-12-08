// var css = require('./mnemonics/css');
// var scripts = require( './mnemonics/scripts');
var macro = require( 'macro');
var script = require( 'core/script');

var config = {
  uuid: '46e7b12d-55a2-438f-9055-e7053761b7dd',
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
        path: '/5706918/finanschat.se_dsk_lb1_skn',
        size: [
          [[928, 590], [[930, 180], [930, 600]]],
          [[0, 0], []]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-sky1', {
        path: '/5706918/finanschat.se_dsk_sky1_blk',
        size: [
          [[1290, 590], [160, 600]],
          [[0, 0], []]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-sky2', {
        path: '/5706918/finanschat.se_dsk_sky2_blk',
        size: [
          [[1290, 590], [160, 600]],
          [[0, 0], []]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-sky3', {
        path: '/5706918/finanschat.se_dsk_sky3_blk',
        size: [
          [[1290, 590], [160, 600]],
          [[0, 0], []]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-sky4', {
        path: '/5706918/finanschat.se_dsk_sky4_blk',
        size: [
          [[1290, 590], [160, 600]],
          [[0, 0], []]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-sky5', {
        path: '/5706918/finanschat.se_dsk_sky5_blk',
        size: [
          [[1290, 590], [160, 600]],
          [[0, 0], []]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.display('cncpt-lb1', 'def-lb1');

      adsmtag.display('cncpt-sky1', 'def-sky1');

      adsmtag.display('cncpt-sky2', 'def-sky2');

      adsmtag.display('cncpt-sky3', 'def-sky3');

      adsmtag.display('cncpt-sky4', 'def-sky4');

      adsmtag.display('cncpt-sky5', 'def-sky5');
    });

    adsmtag.cmd = cmd.concat(adsmtag.cmd || []);

    script.load('https:' + '//rmb-adsembler.netdna-ssl.com/mnemonics/adsm.macro.edge.js');
  }
}
macro.bootstrap(config);
