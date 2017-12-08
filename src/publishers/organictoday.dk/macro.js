// var css = require('./mnemonics/css');
// var scripts = require( './mnemonics/scripts');
var macro = require( 'macro');
var script = require( 'core/script');

var config = {
  uuid: 'e01df1a2-08f8-4340-9281-bbbc3b35e5b4',
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
        path: '/5706918/organictoday.dk_dsk_lb1_skn',
        size: [
          [[928, 590], [[930, 180], [930, 600]]],
          [[0, 0], []]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-rec1', {
        path: '/5706918/organictoday.dk_dsk_rec1',
        size: [
          [[928, 590], [300, 250]],
          [[0, 0], []]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-rec2', {
        path: '/5706918/organictoday.dk_dsk_rec2',
        size: [
          [[928, 590], [300, 250]],
          [[0, 0], []]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-rec3', {
        path: '/5706918/organictoday.dk_dsk_rec3',
        size: [
          [[928, 590], [300, 250]],
          [[0, 0], []]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-sky1', {
        path: '/5706918/organictoday.dk_dsk_sky1_blk',
        size: [
          [[1290, 590], [160, 600]],
          [[0, 0], []]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-sky2', {
        path: '/5706918/organictoday.dk_dsk_sky2_blk',
        size: [
          [[1290, 590], [160, 600]],
          [[0, 0], []]
        ],
        inview: [],
        refresh: 0
      });


      adsmtag.define('def-mob1', {
        path: '/5706918/organictoday.dk_mob1',
        size: [
          [[737, 0], []],
          [[0, 0], [[320, 320], [320, 160]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-mob2', {
        path: '/5706918/organictoday.dk_mob2',
        size: [
          [[737, 0], []],
          [[0, 0], [[320, 320], [320, 160]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-mob3', {
        path: '/5706918/organictoday.dk_mob3',
        size: [
          [[737, 0], []],
          [[0, 0], [[320, 320], [320, 160]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.display('cncpt-lb1', 'def-lb1');

      adsmtag.display('cncpt-rec1', 'def-rec1');

      adsmtag.display('cncpt-rec2', 'def-rec2');

      adsmtag.display('cncpt-rec3', 'def-rec3');

      adsmtag.display('cncpt-sky1', 'def-sky1');

      adsmtag.display('cncpt-sky2', 'def-sky2');

      adsmtag.display('cncpt-mob1', 'def-mob1');

      adsmtag.display('cncpt-mob2', 'def-mob2');

      adsmtag.display('cncpt-mob3', 'def-mob3');
    });

    adsmtag.cmd = cmd.concat(adsmtag.cmd || []);

    script.load('https:' + '//rmb-adsembler.netdna-ssl.com/mnemonics/adsm.macro.edge.js');
  }
}
macro.bootstrap(config);
