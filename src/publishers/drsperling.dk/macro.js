var css = require('./mnemonics/css');
// var scripts = require( './mnemonics/scripts');
var macro = require( 'macro');
var script = require( 'core/script');

var config = {
  uuid: '49f3e048-10d3-4ea2-ad71-e2c9f61aafcc',
  default: function() {
    var adsmtag = window.adsmtag = window.adsmtag || {};
    var cmd = [];
    cmd.push(function () {
      // scripts.run();
      css.run();
    });
    cmd.push(function () {
      adsmtag.service().setTargeting('entry', 'first');
      adsmtag.define('def-lb1-skn', {
        path: '/5706918/Blogly_Drsperling.dk_dsk_lb1_skn',
        size: [
          [[928, 590] ,[[930, 180], [930, 600]]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-lb1-dis', {
        path: '/5706918/Blogly_Drsperling.dk_dsk_lb1_dis',
        size: [
          [[1025, 590],[]],
          [[737, 590],[930, 180]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-sky1', {
        path: '/5706918/Blogly_Drsperling.dk_dsk_sky1_blk_248188',
        size: [
          [[1290, 590],[[160, 600], [300, 600]]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0,
        dependencies: ['cncpt-lb1-skn']
      });

      adsmtag.define('def-sky2', {
        path: '/5706918/Blogly_Drsperling.dk_dsk_sky2_blk_248189',
        size: [
          [[1290, 590],[[160, 600], [300, 600]]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0,
        dependencies: ['cncpt-lb1-skn']
      });

      adsmtag.define('def-sky3', {
        path: '/5706918/Blogly_Drsperling.dk_dsk_sky3_248190',
        size: [
          [[1290, 590],[[160, 600], [300, 600]]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0,
        dependencies: ['cncpt-lb1-skn']
      });

      adsmtag.define('def-sky4', {
        path: '/5706918/Blogly_Drsperling.dk_dsk_sky4_248191',
        size: [
          [[1290, 590],[[160, 600], [300, 600]]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0,
        dependencies: ['cncpt-lb1-skn']
      });

      adsmtag.define('def-outstream', {
        path: '/5706918/Blogly_Drsperling.dk_dsk_outstream',
        size: [
          [[0, 0],[1, 1]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-mob1', {
        path: '/5706918/Blogly_Drsperling.dk_mob1',
        size: [
          [[737, 0],[]],
          [[0, 0],[[320, 320],[320, 160], [320, 480]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-mob2', {
        path: '/5706918/Blogly_Drsperling.dk_mob2_248195',
        size: [
          [[737, 0],[]],
          [[0, 0],[[320, 320],[320, 160], [320, 480]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-mob3', {
        path: '/5706918/Blogly_Drsperling.dk_mob3_248196',
        size: [
          [[737, 0],[]],
          [[0, 0],[[320, 320],[320, 160], [320, 480]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-mob4', {
        path: '/5706918/Blogly_Drsperling.dk_mob4_248197',
        size: [
          [[737, 0],[]],
          [[0, 0],[[320, 320],[320, 160], [320, 480]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.display('cncpt-lb1-skn', 'def-lb1-skn');

      adsmtag.display('cncpt-lb1-dis', 'def-lb1-dis');

      adsmtag.display('cncpt-sky1', 'def-sky1');

      adsmtag.display('cncpt-sky2', 'def-sky2');

      adsmtag.display('cncpt-sky3', 'def-sky3');

      adsmtag.display('cncpt-sky4', 'def-sky4');

      adsmtag.display('cncpt-outstream', 'def-outstream');

      adsmtag.display('cncpt-mob1', 'def-mob1');

      adsmtag.display('cncpt-mob2', 'def-mob2');

      adsmtag.display('cncpt-mob3', 'def-mob3');

      adsmtag.display('cncpt-mob4', 'def-mob4');
    });

    adsmtag.cmd = cmd.concat(adsmtag.cmd || []);

    script.load('https:' + '//rmb-adsembler.netdna-ssl.com/mnemonics/adsm.macro.edge.js');
  }
}
macro.bootstrap(config);
