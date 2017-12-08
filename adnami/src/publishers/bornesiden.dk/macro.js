var css = require('./mnemonics/css');
// var scripts = require( './mnemonics/scripts');
var macro = require( 'macro');
var script = require( 'core/script');

var config = {
  uuid: 'c5a6bcac-59c2-47f0-ab5e-c1fe1dd18694',
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
        path: '/5706918/bm_bornesiden.dk_dsk_lb1_skn',
        size: [
          [[1025, 0], [930, 180]]
        ],
        inview: [],
        refresh: 0,
        dependencies: [],
      });
      
      adsmtag.define('def-rec1', {
        path: '/5706918/bm_bornesiden.dk_dsk_rec1',
        size: [
          [[1025, 0], [300, 250]]
        ],
        inview: [],
        refresh: 0,
        dependencies: [],
      });
      
      adsmtag.define('def-rec2', {
        path: '/5706918/bm_bornesiden.dk_dsk_rec2',
        size: [
          [[1025, 0], [300, 250]]
        ],
        inview: [],
        refresh: 0,
        dependencies: [],
      });
      
      adsmtag.define('def-sky1', {
        path: '/5706918/bm_bornesiden.dk_dsk_sky1',
        size: [
          [[1298, 0], [160, 600]]
        ],
        inview: [],
        refresh: 0,
        dependencies: ['bm-lb1'],
      });
      
      adsmtag.define('def-sky2', {
        path: '/5706918/bm_bornesiden.dk_dsk_sky2',
        size: [
          [[1298, 0], [160, 600]]
        ],
        inview: [],
        refresh: 0,
        dependencies: ['bm-lb1'],
      });
      
      adsmtag.define('def-sky3', {
        path: '/5706918/bm_bornesiden.dk_dsk_sky3',
        size: [
          [[1298, 0], [160, 600]]
        ],
        inview: [],
        refresh: 0,
        dependencies: [],
      });
      
      adsmtag.define('def-sky4', {
        path: '/5706918/bm_bornesiden.dk_dsk_sky4',
        size: [
          [[1298, 0], [160, 600]]
        ],
        inview: [],
        refresh: 0,
        dependencies: [],
      });
      
      adsmtag.define('def-mob1', {
        path: '/5706918/bm_bornesiden.dk_mob1',
        size: [
          [[1025, 0], []],
          [[0, 0], [[300, 250], [320, 320], [320, 160]]]
        ],
        inview: [],
        refresh: 0,
        dependencies: [],
      });
      
      adsmtag.define('def-mob2', {
        path: '/5706918/bm_bornesiden.dk_mob2',
        size: [
          [[1025, 0], []],
          [[0, 0], [[300, 250], [320, 320], [320, 160]]]
        ],
        inview: [],
        refresh: 0,
        dependencies: [],
      });
      
      adsmtag.define('def-mob3', {
        path: '/5706918/bm_bornesiden.dk_mob3',
        size: [
          [[1025, 0], []],
          [[0, 0], [[300, 250], [320, 320], [320, 160]]]
        ],
        inview: [],
        refresh: 0,
        dependencies: [],
      });
      
      adsmtag.define('def-outstream', {
        path: '/5706918/bm_bornesiden.dk_outstream',
        size: [
          [[0, 0], [1, 1]]
        ],
        inview: [],
        refresh: 0,
        dependencies: [],
      });
      
      
      adsmtag.display('bm-lb1', 'def-lb1');
      adsmtag.display('bm-rec1', 'def-rec1');
      adsmtag.display('bm-rec2', 'def-rec2');
      adsmtag.display('bm-sky1', 'def-sky1');
      adsmtag.display('bm-sky2', 'def-sky2');
      adsmtag.display('bm-sky3', 'def-sky3');
      adsmtag.display('bm-sky4', 'def-sky4');
      adsmtag.display('bm-mob1', 'def-mob1');
      adsmtag.display('bm-mob2', 'def-mob2');
      adsmtag.display('bm-mob3', 'def-mob3');
      adsmtag.display('bm-outstream', 'def-outstream');
    });

    adsmtag.cmd = cmd.concat(adsmtag.cmd || []);

    script.load('https:' + '//rmb-adsembler.netdna-ssl.com/mnemonics/adsm.macro.edge.js');
  }
}
macro.bootstrap(config);
