// var css = require('./mnemonics/css');
// var scripts = require( './mnemonics/scripts');
var macro = require( 'macro');
var script = require( 'core/script');

var config = {
  uuid: 'd91f90c7-2667-46d1-bd08-da42a68a025c',
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
        path: '/5706918/mariavestergaard.dk_dsk_lb1_skn',
        size: [
          [[737, 590] ,[[930, 180], [930, 600]]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-lb6', {
        path: '/5706918/mariavestergaard.dk_dsk_lb6',
        size: [
          [[737, 590] ,[930, 180]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-sky2', {
        path: '/5706918/mariavestergaard.dk_dsk_sky2',
        size: [
          [[928, 590],[160, 600]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-mob1', {
        path: '/5706918/mariavestergaard.dk_mob1',
        size: [
          [[737, 0],[]],
          [[0, 0],[[320, 320],[320, 160],[320, 480]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-mob2', {
        path: '/5706918/mariavestergaard.dk_mob2',
        size: [
          [[737, 0],[]],
          [[0, 0],[[320, 320],[320, 160],[320, 480]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-mob3', {
        path: '/5706918/mariavestergaard.dk_mob3',
        size: [
          [[737, 0],[]],
          [[0, 0],[[320, 320],[320, 160],[320, 480]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-sky1', {
        path: '/5706918/mariavestergaard.dk_dsk_sky1',
        size: [
          [[928, 590],[160, 600]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-sky1_blk', {
        path: '/5706918/mariavestergaard.dk_dsk_sky1_blk',
        size: [
          [[1000, 590],[160, 600]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0,
        dependencies: ['cncpt-lb1']
      });

      adsmtag.define('def-sky2_blk', {
        path: '/5706918/mariavestergaard.dk_dsk_sky2_blk',
        size: [
          [[1000, 590],[[160, 600], [300, 600]]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0,
        dependencies: ['cncpt-lb1']
      });

      adsmtag.define('def-sky3_blk', {
        path: '/5706918/mariavestergaard.dk_dsk_sky3_blk',
        size: [
          [[1000, 590],[160, 600]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0,
        dependencies: ['cncpt-lb1']
      });

      adsmtag.define('def-sky4_blk', {
        path: '/5706918/mariavestergaard.dk_dsk_sky3_blk',
        size: [
          [[1000, 590],[[160, 600], [300, 600]]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0,
        dependencies: ['cncpt-lb1']
      });

      adsmtag.display('cncpt-lb1', 'def-lb1');
      adsmtag.display('cncpt-lb6', 'def-lb6');
      adsmtag.display('cncpt-sky2', 'def-sky2');
      adsmtag.display('cncpt-mob1', 'def-mob1');
      adsmtag.display('cncpt-mob2', 'def-mob2');
      adsmtag.display('cncpt-mob3', 'def-mob3');
      adsmtag.display('cncpt-sky1', 'def-sky1');
      adsmtag.display('cncpt-sky1_blk', 'def-sky1_blk');
      adsmtag.display('cncpt-sky2_blk', 'def-sky2_blk');
      adsmtag.display('cncpt-sky3_blk', 'def-sky3_blk');
      adsmtag.display('cncpt-sky4_blk', 'def-sky4_blk');
    });

    adsmtag.cmd = cmd.concat(adsmtag.cmd || []);

    script.load('https:' + '//rmb-adsembler.netdna-ssl.com/mnemonics/adsm.macro.edge.js');
  }
}
macro.bootstrap(config);
