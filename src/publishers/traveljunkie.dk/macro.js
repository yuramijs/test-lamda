// var css = require('./mnemonics/css');
// var scripts = require( './mnemonics/scripts');
var macro = require( 'macro');
var script = require( 'core/script');

var config = {
  uuid: 'bc81a317-4805-4e9b-a09b-28441fa421fe',
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
        path: '/5706918/traveljunkie.dk_dsk_lb1_skn_meg',
        size: [
          [[930, 600], [[930, 180], [930, 600]]],
          [[0, 0], []]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-lb6', {
        path: '/5706918/traveljunkie.dk_dsk_lb6',
        size: [
          [[930, 600], [930, 180]],
          [[0, 0], []]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-sky1', {
        path: '/5706918/traveljunkie.dk_dsk_sky1_blk',
        size: [
          [[1320, 600], [160, 600]],
          [[0, 0], []]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-sky2', {
        path: '/5706918/traveljunkie.dk_dsk_sky2_blk',
        size: [
          [[1320, 600], [160, 600]],
          [[0, 0], []]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-mob1', {
        path: '/5706918/Traveljunkie.dk_mob1',
        size: [
          [[737, 0], []],
          [[0, 0], [[320, 320], [320, 160]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-mob2', {
        path: '/5706918/Traveljunkie.dk_mob2',
        size: [
          [[737, 0], []],
          [[0, 0], [[320, 320], [320, 160]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-mob3', {
        path: '/5706918/Traveljunkie.dk_mob3',
        size: [
          [[737, 0], []],
          [[0, 0], [[320, 320], [320, 160]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-outstream', {
        path: '/5706918/traveljunkie.dk_outstream',
        size: [
          [[0, 0], [1, 1]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.display('cncpt-lb1', 'def-lb1');

      adsmtag.display('cncpt-lb6', 'def-lb6');

      adsmtag.display('cncpt-sky1', 'def-sky1');

      adsmtag.display('cncpt-sky2', 'def-sky2');

      adsmtag.display('cncpt-mob1', 'def-mob1');

      adsmtag.display('cncpt-mob2', 'def-mob2');

      adsmtag.display('cncpt-mob3', 'def-mob3');

      adsmtag.display('cncpt-outstream', 'def-outstream');
    });

    adsmtag.cmd = cmd.concat(adsmtag.cmd || []);

    script.load('https:' + '//rmb-adsembler.netdna-ssl.com/mnemonics/adsm.macro.edge.js');
  }
}
macro.bootstrap(config);