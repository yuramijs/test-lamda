var css = require('./mnemonics/css');
// var scripts = require( './mnemonics/scripts');
var macro = require( 'macro');
var script = require( 'core/script');

var config = {
  uuid: '59ba8331-8185-452e-8b4b-4b9d0e9c002e',
  default: function() {
    var adsmtag = window.adsmtag = window.adsmtag || {};
    var cmd = [];
    cmd.push(function () {
      // scripts.run();
      css.run();
    });
    cmd.push(function () {
      adsmtag.service().setTargeting('entry', 'first');
      adsmtag.define('def-lb1', {
        path: '/5706918/Blogly_Maschavang_dsk_lb1_skn',
        size: [
          [[928, 590] ,[[930, 180], [930, 600]]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-lb1-dis', {
        path: '/5706918/Blogly_Maschavang_dsk_lb1_dis',
        size: [
          [[1025, 590],[]],
          [[737, 590],[930, 180]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-sky1', {
        path: '/5706918/Maschavang.dk_-_160x600_ATF_L_223127',
        size: [
          [[1290, 590],[[160, 600], [300, 600]]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0,
        dependencies: ['cncpt-lb1-skn']
      });

      adsmtag.define('def-sky2', {
        path: '/5706918/Maschavang.dk_-_160x600_ATF_R_223128',
        size: [
          [[1290, 590],[[160, 600], [300, 600]]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0,
        dependencies: ['cncpt-lb1-skn']
      });

      adsmtag.define('def-sky3', {
        path: '/5706918/Maschavang.dk_-_160x600_BTF_L_223129',
        size: [
          [[1290, 590],[[160, 600], [300, 600]]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0,
        dependencies: ['cncpt-lb1-skn']
      });

      adsmtag.define('def-sky4', {
        path: '/5706918/Maschavang.dk_-_160x600_BTF_R_223130',
        size: [
          [[1290, 590],[[160, 600], [300, 600]]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0,
        dependencies: ['cncpt-lb1-skn']
      });

      adsmtag.define('def-outstream', {
        path: '/5706918/Blogly_Maschavang_dsk_outstream',
        size: [
          [[0, 0],[1, 1]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-mob1', {
        path: '/5706918/Maschavang.dk_-_320x320_1_223131',
        size: [
          [[737, 0],[]],
          [[0, 0],[[320, 320],[320, 160], [320, 480]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-mob2', {
        path: '/5706918/Maschavang.dk_-_320x320_2_223132',
        size: [
          [[737, 0],[]],
          [[0, 0],[[320, 320],[320, 160], [320, 480]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-mob3', {
        path: '/5706918/Maschavang.dk_-_320x320_3_223133',
        size: [
          [[737, 0],[]],
          [[0, 0],[[320, 320],[320, 160], [320, 480]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-mob4', {
        path: '/5706918/Maschavang.dk_-_320x320_4_223134',
        size: [
          [[737, 0],[]],
          [[0, 0],[[320, 320],[320, 160], [320, 480]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.display('cncpt-lb1-skn', 'def-lb1');

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
