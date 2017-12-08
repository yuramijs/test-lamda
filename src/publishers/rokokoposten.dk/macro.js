// var css = require('./mnemonics/css');
// var scripts = require( './mnemonics/scripts');
var macro = require( 'macro');
var script = require( 'core/script');

var config = {
  uuid: 'deda6b1b-ad19-48d8-90e7-c87c73cd35c0',
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
        path: '/5706918/rokokoposten.dk_dsk_lb1_skin',
        size: [
          [[928, 590] ,[[930, 180]]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-lb2', {
        path: '/5706918/rokokoposten.dk_dsk_lb2',
        size: [
          [[928, 590],[930, 180]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-rec1', {
        path: '/5706918/rokokoposten.dk_dsk_rec1',
        size: [
          [[928, 590],[300, 250]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-rec2', {
        path: '/5706918/rokokoposten.dk_dsk_rec2',
        size: [
          [[928, 590],[300, 250]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-sky1', {
        path: '/5706918/rokokoposten.dk_dsk_sky1',
        size: [
          [[1290, 590],[[160, 600]]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0,
        dependencies: ['cncpt-lb1']
      });


      adsmtag.define('def-sky2', {
        path: '/5706918/rokokoposten.dk_dsk_sky2',
        size: [
          [[1290, 590],[[160, 600], [300, 600]]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0,
        dependencies: ['cncpt-lb1']
      });

      adsmtag.define('def-mob1', {
        path: '/5706918/rokokoposten.dk_mob1',
        size: [
          [[927, 0],[]],
          [[0, 0],[[320, 320],[320, 160], [320, 480]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-mob2', {
        path: '/5706918/rokokoposten.dk_mob2',
        size: [
          [[927, 0],[]],
          [[0, 0],[[320, 320],[320, 160], [320, 480]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-mob3', {
        path: '/5706918/rokokoposten.dk_mob3',
        size: [
          [[927, 0],[]],
          [[0, 0],[[320, 320],[320, 160], [320, 480]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-mob4', {
        path: '/5706918/rokokoposten.dk_mob4',
        size: [
          [[927, 0],[]],
          [[0, 0],[[320, 320],[320, 160], [320, 480]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-outstream', {
        path: '/5706918/rokokoposten.dk_outstream',
        size: [
          [[0, 0],[1, 1]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-tab-lb1', {
        path: '/5706918/rokokoposten.dk_tab1',
        size: [
          [[1025, 590],[]],
          [[737, 590],[930, 180]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-tab-lb2', {
        path: '/5706918/rokokoposten.dk_tab_lb2',
        size: [
          [[1025, 590],[]],
          [[737, 590],[930, 180]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-tab-rec1', {
        path: '/5706918/rokokoposten.dk_tab_rec1',
        size: [
          [[1025, 590],[]],
          [[737, 590],[930, 180]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-tab-rec2', {
        path: '/5706918/rokokoposten.dk_tab_rec2',
        size: [
          [[1025, 590],[]],
          [[737, 590],[930, 180]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.display('cncpt-lb1', 'def-lb1');
      adsmtag.display('cncpt-lb2', 'def-lb2');
      adsmtag.display('cncpt-rec1', 'def-rec1');
      adsmtag.display('cncpt-rec2', 'def-rec2');
      adsmtag.display('cncpt-sky1', 'def-sky1');
      adsmtag.display('cncpt-sky2', 'def-sky2');
      adsmtag.display('cncpt-mob1', 'def-mob1');
      adsmtag.display('cncpt-mob2', 'def-mob2');
      adsmtag.display('cncpt-mob3', 'def-mob3');
      adsmtag.display('cncpt-mob4', 'def-mob4');
      adsmtag.display('cncpt-outstream', 'def-outstream');
      adsmtag.display('cncpt-tab-lb1', 'def-tab-lb1');
      adsmtag.display('cncpt-tab-lb2', 'def-tab-lb2');
      adsmtag.display('cncpt-tab-rec1', 'def-tab-rec1');
      adsmtag.display('cncpt-tab-rec2', 'def-tab-rec2');
    });

    adsmtag.cmd = cmd.concat(adsmtag.cmd || []);

    script.load('https:' + '//rmb-adsembler.netdna-ssl.com/mnemonics/adsm.macro.edge.js');
  }
}
macro.bootstrap(config);
