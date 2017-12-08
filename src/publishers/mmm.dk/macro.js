var css = require('./mnemonics/css');
var scripts = require( './mnemonics/scripts');
var macro = require( 'macro');
var script = require( 'core/script');

var config = {
  uuid: '7e8da517-b142-4e4b-9607-7c2a2b5f9a0f',
  default: function() {
    var adsmtag = window.adsmtag = window.adsmtag || {};
    var cmd = [];
    cmd.push(function () {
      scripts.run();
      css.run();
    });
    cmd.push(function () {
      adsmtag.service().setTargeting('entry', 'first');
      adsmtag.define('def-lb1_skn', {
      	path: '/5706918/con_mmm_dsk_lb1_skn',
      	size: [
      		[[1025, 0], [930, 180]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-lb2', {
      	path: '/5706918/con_mmm_dsk_lb2',
      	size: [
      		[[1025, 0], [[930, 180], [930, 600]]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-lb3', {
      	path: '/5706918/con_mmm_dsk_lb3',
      	size: [
      		[[1025, 0], [930, 180]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-header', {
      	path: '/5706918/con_mmm_dsk_header',
      	size: [
      		[[758, 0], [728, 90]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-sky1', {
      	path: '/5706918/connery_dsk_sky1_blk',
      	size: [
      		[[1140, 0], [160, 600]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0,
      	dependencies: ['def-lb1_skn']
      });

      adsmtag.define('def-sky2', {
      	path: '/5706918/con_mmm_dsk_sky2',
      	size: [
      		[[1140, 0], [160, 600]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0,
      	dependencies: ['def-lb1_skn']
      });

      adsmtag.define('def-sky3', {
      	path: '/5706918/con_mmm_dsk_sky3',
      	size: [
      		[[1140, 0], [[160, 600], [300, 600]]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0,
        dependencies: ['def-lb1_skn']
      });

      adsmtag.define('def-sky4', {
      	path: '/5706918/con_mmm_dsk_sky4',
      	size: [
      		[[1140, 0], [[160, 600], [300, 600]]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0,
        dependencies: ['def-lb1_skn']
      });

      adsmtag.define('def-tab_lb1', {
      	path: '/5706918/con_mmm_tab_lb1',
      	size: [
          [[1025, 0],[]],
          [[768, 0], [[728, 90]]],
          [[0, 0],[]],
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-tab_lb2', {
      	path: '/5706918/con_mmm_tab_lb2',
      	size: [
          [[1025, 0],[]],
          [[768, 0], [[728, 90]]],
          [[0, 0],[]],
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-tab_lb3', {
      	path: '/5706918/con_mmm_tab_lb3',
      	size: [
          [[1025, 0],[]],
          [[768, 0], [[728, 90]]],
          [[0, 0],[]],
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-mob1', {
        path: '/5706918/con_mmm_mob1',
        size: [
          [[768, 0],[]],
          [[0, 0], [[320, 160], [320, 320], [300, 250]]],
        ],
        inview: [],
        refresh: 0,
      });

      adsmtag.define('def-mob2', {
        path: '/5706918/con_mmm_mob2',
        size: [
          [[768, 0],[]],
          [[0, 0], [[320, 160], [320, 320], [300, 250]]],
        ],
        inview: [],
        refresh: 0,
      });

      adsmtag.define('def-mob3', {
        path: '/5706918/con_mmm_mob3',
        size: [
          [[768, 0],[]],
          [[0, 0], [[320, 160], [320, 320], [300, 250]]],
        ],
        inview: [],
        refresh: 0,
      });

      adsmtag.define('def-outstream', {
        path: '/5706918/con_mmm_outstream',
        size: [
      		[[0, 0],[1, 1]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.display('cncpt-lb1_skn', 'def-lb1_skn');
      adsmtag.display('cncpt-lb2', 'def-lb2');
      adsmtag.display('cncpt-lb3', 'def-lb3');
      adsmtag.display('cncpt-header', 'def-header');
      adsmtag.display('cncpt-sky1', 'def-sky1');
      adsmtag.display('cncpt-sky2', 'def-sky2');
      adsmtag.display('cncpt-sky3', 'def-sky3');
      adsmtag.display('cncpt-sky4', 'def-sky4');
      adsmtag.display('cncpt-tab_lb1', 'def-tab_lb1');
      adsmtag.display('cncpt-tab_lb2', 'def-tab_lb2');
      adsmtag.display('cncpt-tab_lb3', 'def-tab_lb3');
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
