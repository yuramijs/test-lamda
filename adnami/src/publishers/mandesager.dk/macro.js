// var css = require('./mnemonics/css');
// var scripts = require( './mnemonics/scripts');
var macro = require( 'macro');
var script = require( 'core/script');

var config = {
  uuid: '69ab6031-7601-4e8d-a395-20ca6a0c173d',
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
        path: '/5706918/Mandesager.dk_930x180_skn',
        size: [
          [[737, 590], [[930, 180], [930, 600]]],
          [[0, 0], []]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-lb2', {
        path: '/5706918/Mandesager.dk_dsk_lb2_artikel_galleri_244915',
        size: [
          [[737, 590], [930, 180]],
          [[0, 0], []]
        ],
        inview: [],
        refresh: 30000
      });

      adsmtag.define('def-lb3', {
        path: '/5706918/Mandesager.dk_dsk_lb3',
        size: [
          [[737, 590], [930, 180]],
          [[0, 0], []]
        ],
        inview: [],
        refresh: 30000
      });

      adsmtag.define('def-lb4', {
        path: '/5706918/Mandesager.dk_dsk_lb4',
        size: [
          [[737, 590], [930, 180]],
          [[0, 0], []]
        ],
        inview: [],
        refresh: 30000
      });

      adsmtag.define('def-lb5', {
        path: '/5706918/Mandesager.dk_dsk_lb5',
        size: [
          [[737, 590], [930, 180]],
          [[0, 0], []]
        ],
        inview: [],
        refresh: 30000
      });

      adsmtag.define('def-rec1', {
        path: '/5706918/Mandesager.dk_300x250_1',
        size: [
          [[737, 590], [[300, 250], [300, 600]]],
          [[0, 0], []]
        ],
        inview: [],
        refresh: 30000
      });

      adsmtag.define('def-sky1', {
        path: '/5706918/Mandesager.dk_sky1_228049',
        size: [
          [[1290, 590], [160, 600]],
          [[0, 0], []]
        ],
        inview: [],
        refresh: 0,
        dependencies: ['cncpt-lb1']
      });


      adsmtag.define('def-sky2', {
        path: '/5706918/Mandesager.dk_sky2_228050',
        size: [
          [[1290, 590], [160, 600]],
          [[0, 0], []]
        ],
        inview: [],
        refresh: 0,
        dependencies: ['cncpt-lb1']
      });

      adsmtag.define('def-outstream', {
        path: '/5706918/Mandesager.dk_outstream',
        size: [
          [[0, 0], [1, 1]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-mob1', {
        path: '/5706918/Mandesager.dk_Mobile_320x320_ATF_215082',
        size: [
          [[737, 0], []],
          [[0, 0], [[320, 320], [320, 160]]]
        ],
        inview: [],
        refresh: 30000
      });

      adsmtag.define('def-mob2', {
        path: '/5706918/Mandesager.dk_Mobile_320x320_BTF_215083',
        size: [
          [[737, 0], []],
          [[0, 0], [[320, 320], [320, 160]]]
        ],
        inview: [],
        refresh: 30000
      });

      adsmtag.define('def-mob3', {
        path: '/5706918/Mandesager.dk_mob3_228051',
        size: [
          [[737, 0], []],
          [[0, 0], [[320, 320], [320, 160]]]
        ],
        inview: [],
        refresh: 30000
      });

      adsmtag.define('def-mob4', {
        path: '/5706918/Mandesager.dk_mob4_228052',
        size: [
          [[737, 0], []],
          [[0, 0], [[320, 320], [320, 160]]]
        ],
        inview: [],
        refresh: 30000
      });

      adsmtag.define('def-mob5', {
        path: '/5706918/Mandesager.dk_mob5',
        size: [
          [[737, 0], []],
          [[0, 0], [[320, 320], [320, 160]]]
        ],
        inview: [],
        refresh: 30000
      });

      adsmtag.display('cncpt-lb1', 'def-lb1');

      adsmtag.display('cncpt-lb2', 'def-lb2');

      adsmtag.display('cncpt-lb3', 'def-lb3');

      adsmtag.display('cncpt-lb4', 'def-lb4');

      adsmtag.display('cncpt-lb5', 'def-lb5');

      adsmtag.display('cncpt-rec1', 'def-rec1');

      adsmtag.display('cncpt-sky1', 'def-sky1');

      adsmtag.display('cncpt-sky2', 'def-sky2');

      adsmtag.display('cncpt-outstream', 'def-outstream');

      adsmtag.display('cncpt-mob1', 'def-mob1');

      adsmtag.display('cncpt-mob2', 'def-mob2');

      adsmtag.display('cncpt-mob3', 'def-mob3');

      adsmtag.display('cncpt-mob4', 'def-mob4');

      adsmtag.display('cncpt-mob5', 'def-mob5');
    });

    adsmtag.cmd = cmd.concat(adsmtag.cmd || []);

    script.load('https:' + '//rmb-adsembler.netdna-ssl.com/mnemonics/adsm.macro.edge.js');
  }
}
macro.bootstrap(config);
