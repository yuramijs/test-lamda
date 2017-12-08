// var css = require('./mnemonics/css');
// var scripts = require( './mnemonics/scripts');
var macro = require( 'macro');
var script = require( 'core/script');

var config = {
  uuid: '90bd152f-196b-48c7-9d3d-9d3abb10f46d',
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
        path: '/5706918/thomasskov.dk_dsk_lb1_skn',
        size: [
          [[928, 590] ,[[930, 180], [930, 600]]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-lb6', {
        path: '/5706918/thomasskov.dk_dsk_lb6',
        size: [
          [[928, 590],[[930, 180],[930, 600]]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-sky1', {
        path: '/5706918/thomasskov.dk_dsk_sky1_blk',
        size: [
          [[1290, 590],[160, 600]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0,
        dependencies: ['cncpt-lb1']
      });


      adsmtag.define('def-sky2', {
        path: '/5706918/thomasskov.dk_dsk_sky2_blk',
        size: [
          [[1290, 590],[160, 600]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0,
        dependencies: ['cncpt-lb1']
      });

      adsmtag.define('def-mob1', {
        path: '/5706918/thomasskov.dk_mob1',
        size: [
          [[927, 0],[]],
          [[0, 0],[[320, 320],[320, 160], [320, 480]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-mob2', {
        path: '/5706918/thomasskov.dk_mob2',
        size: [
          [[927, 0],[]],
          [[0, 0],[[320, 320],[320, 160], [320, 480]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-mob3', {
        path: '/5706918/thomasskov.dk_mob3',
        size: [
          [[927, 0],[]],
          [[0, 0],[[320, 320],[320, 160], [320, 480]]]
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
    });

    adsmtag.cmd = cmd.concat(adsmtag.cmd || []);

    script.load('https:' + '//rmb-adsembler.netdna-ssl.com/mnemonics/adsm.macro.edge.js');
  }
}
macro.bootstrap(config);
