// var css = require('./mnemonics/css');
// var scripts = require( './mnemonics/scripts');
var macro = require( 'macro');
var script = require( 'core/script');

var config = {
  uuid: '4b5d5f4b-143e-4783-b07b-a60861146f3e',
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
        path: '/5706918/Avisen_dsk_lb1_megabanner_930x600_250948',
        size: [
          [[0, 0], [[930, 180], [930, 600]]],
        ],
        inview: [],
        refresh: 0,
      });

      adsmtag.define('def-lb2', {
        path: '/5706918/Avisen_desktop_lb2_226882',
        size: [
          [[0, 0], [[930, 180], [930, 600]]],
        ],
        inview: [],
        refresh: 0,
      });

      adsmtag.define('def-lb3', {
        path: '/5706918/Avisen_desktop_lb3_226883',
        size: [
          [[0, 0], [[930, 180], [930, 600]]],
        ],
        inview: [],
        refresh: 0,
      });

      adsmtag.define('def-rec1', {
        path: '/5706918/Avisen_desktop_rec1_226875',
        size: [
          [[0, 0], [300, 250]],
        ],
        inview: [],
        refresh: 0,
      });

      adsmtag.define('def-rec3', {
        path: '/5706918/Avisen_desktop_rec3_226877',
        size: [
          [[0, 0], [300, 250]],
        ],
        inview: [],
        refresh: 0,
      });

      adsmtag.define('def-ver1', {
        path: '/5706918/Avisen_desktop_ver1_226885',
        size: [
          [[0, 0], [[160, 600], [300, 600]]],
        ],
        inview: [],
        refresh: 0,
      });

      adsmtag.define('def-ver2', {
        path: '/5706918/Avisen_desktop_ver2_226886',
        size: [
          [[0, 0], [[160, 600], [300, 600]]],
        ],
        inview: [],
        refresh: 0,
      });

      adsmtag.define('def-ver3', {
        path: '/5706918/Avisen_desktop_ver3_226887',
        size: [
          [[0, 0], [[160, 600], [300, 600]]],
        ],
        inview: [],
        refresh: 0,
      });

      adsmtag.define('def-sky1', {
        path: '/5706918/Avisen_desktop_sky5_226880',
        size: [
          [[0, 0], [[160, 600], [300, 600]]],
        ],
        inview: [],
        refresh: 0,
        dependencies: ['cncpt-lb1']
      });

      adsmtag.define('def-sky2', {
        path: '/5706918/Avisen_desktop_sky6_226881',
        size: [
          [[0, 0], [[160, 600], [300, 600]]],
        ],
        inview: [],
        refresh: 0,
        dependencies: ['cncpt-lb1']
      });

      adsmtag.define('def-sky3', {
        path: '/5706918/Avisen_desktop_sky3_226878',
        size: [
          [[0, 0], [[160, 600], [300, 600]]],
        ],
        inview: [],
        refresh: 0,
      });

      adsmtag.define('def-sky4', {
        path: '/5706918/Avisen_desktop_sky4_226879',
        size: [
          [[0, 0], [[160, 600], [300, 600]]],
        ],
        inview: [],
        refresh: 0,
      });

      adsmtag.define('def-mob1', {
        path: '/5706918/Avisen.dk_mob1_228095',
        size: [
          [[0, 0], [[320, 160], [300, 250], [320, 320]]],
        ],
        inview: [],
        refresh: 0,
      });

      adsmtag.define('def-mob2', {
        path: '/5706918/Avisen.dk_mob2_228096',
        size: [
          [[0, 0], [[320, 160], [300, 250], [320, 320]]],
        ],
        inview: [],
        refresh: 0,
      });

      adsmtag.define('def-mob3', {
        path: '/5706918/Avisen.dk_mob3_228099',
        size: [
          [[0, 0], [[320, 160], [300, 250], [320, 320]]],
        ],
        inview: [],
        refresh: 0,
      });

      adsmtag.define('def-mob-outstream', {
      	path: '/5706918/Avisen.dk_mob_outstream',
      	size: [
      		[[0, 0],[1, 1]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-dsk-outstream', {
      	path: '/5706918/Avisen_dsk_outstream',
      	size: [
      		[[0, 0],[1, 1]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.display('cncpt-lb1', 'def-lb1');
      adsmtag.display('cncpt-lb2', 'def-lb2');
      adsmtag.display('cncpt-lb3', 'def-lb3');
      adsmtag.display('cncpt-rec1', 'def-rec1');
      adsmtag.display('cncpt-rec3', 'def-rec3');
      adsmtag.display('cncpt-ver1', 'def-ver1');
      adsmtag.display('cncpt-ver2', 'def-ver2');
      adsmtag.display('cncpt-ver3', 'def-ver3');
      adsmtag.display('cncpt-sky1', 'def-sky1');
      adsmtag.display('cncpt-sky2', 'def-sky2');
      adsmtag.display('cncpt-sky3', 'def-sky3');
      adsmtag.display('cncpt-sky4', 'def-sky4');
      adsmtag.display('cncpt-mob1', 'def-mob1');
      adsmtag.display('cncpt-mob2', 'def-mob2');
      adsmtag.display('cncpt-mob3', 'def-mob3');
      adsmtag.display('cncpt-mob-outstream', 'def-mob-outstream');
      adsmtag.display('cncpt-dsk-outstream', 'def-dsk-outstream');
    });

    adsmtag.cmd = cmd.concat(adsmtag.cmd || []);

    script.load('https:' + '//rmb-adsembler.netdna-ssl.com/mnemonics/adsm.macro.edge.js');
  }
}
macro.bootstrap(config);
