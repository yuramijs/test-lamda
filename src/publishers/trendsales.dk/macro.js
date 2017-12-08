// var css = require('./mnemonics/css');
// var scripts = require( './mnemonics/scripts');
var macro = require( 'macro');
var script = require( 'core/script');

var config = {
  uuid: '4068d532-00a1-4d2d-893d-107b28bfe729',
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
      	path: '/5706918/trendsales.dk_dsk_lb1_239488',
      	size: [
      		[[0, 0] ,[[930, 180]]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-rec2', {
      	path: '/5706918/trendsales.dk_dsk_rec2_239489',
      	size: [
      		[[0, 0],[300, 250]]
      	],
      	inview: [],
      	refresh: 30000
      });

      adsmtag.define('def-sky1', {
      	path: '/5706918/trendsales.dk_dsk_sky1_blk_239490',
      	size: [
      		[[0, 0],[160, 600]]
      	],
      	inview: [],
      	refresh: 0,
      	dependencies: ['cncpt-lb1']
      });


      adsmtag.define('def-sky2', {
      	path: '/5706918/trendsales.dk_dsk_sky2_blk_239491',
      	size: [
      		[[0, 00],[[160, 600], [300, 600]]]
      	],
      	inview: [],
      	refresh: 0,
      	dependencies: ['cncpt-lb1']
      });

      adsmtag.define('def-sky3', {
      	path: '/5706918/trendsales.dk_dsk_sky3_239492',
      	size: [
      		[[0, 0],[160, 600]]
      	],
      	inview: [],
      	refresh: 30000
      });

      adsmtag.define('def-sky4', {
      	path: '/5706918/trendsales.dk_dsk_sky4_239493',
      	size: [
      		[[0, 00],[[160, 600]]]
      	],
      	inview: [],
      	refresh: 30000
      });

      adsmtag.define('def-mob1', {
      	path: '/5706918/trendsales.dk_mob1_239494',
      	size: [
      		[[0, 0],[320, 320]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-mob2_annoncebeskrivelse', {
      	path: '/5706918/Trendsales.dk_mob2_annoncebeskrivelse_320x160',
      	size: [
      		[[0, 0],[320, 160]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-mob2_notifikationer', {
      	path: '/5706918/Trendsales.dk_mob2_notifikationer_320x160',
      	size: [
      		[[0, 0],[320, 160]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-mob1_320x160', {
      	path: '/5706918/Trendsales.dk_mob1_320x160',
      	size: [
      		[[0, 0],[320, 160]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-mob2_320x320', {
      	path: '/5706918/Trendsales.dk_mob2_320x320',
      	size: [
      		[[0, 0],[320, 320]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-mob2_320x160', {
      	path: '/5706918/Trendsales.dk_mob2_320x160',
      	size: [
      		[[0, 0],[320, 160]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-rec1', {
      	path: '/5706918/Trendsales.dk_entry_dsk_rec1',
      	size: [
      		[[0, 0],[300, 250]]
      	],
      	inview: [],
      	refresh: 30000
      });

      adsmtag.define('def-mob1_320x160_searchsticky', {
      	path: '/5706918/Trendsales.dk_mob1_320x160_searchsticky',
      	size: [
      		[[0, 0],[320, 160]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.display('cncpt-lb1', 'def-lb1');

      adsmtag.display('cncpt-rec2', 'def-rec2');

      adsmtag.display('cncpt-sky1', 'def-sky1');

      adsmtag.display('cncpt-sky2', 'def-sky2');

      adsmtag.display('cncpt-sky3', 'def-sky3');

      adsmtag.display('cncpt-sky4', 'def-sky4');

      adsmtag.display('cncpt-mob1', 'def-mob1');

      adsmtag.display('cncpt-mob2_annoncebeskrivelse', 'def-mob2_annoncebeskrivelse');

      adsmtag.display('cncpt-mob2_notifikationer', 'def-mob2_notifikationer');

      adsmtag.display('cncpt-mob1_320x160', 'def-mob1_320x160');

      adsmtag.display('cncpt-mob2_320x320', 'def-mob2_320x320');

      adsmtag.display('cncpt-mob2_320x160', 'def-mob2_320x160');

      adsmtag.display('cncpt-rec1', 'def-rec1');

      adsmtag.display('cncpt-mob1_320x160_searchsticky', 'def-mob1_320x160_searchsticky');
    });

    adsmtag.cmd = cmd.concat(adsmtag.cmd || []);

    script.load('https:' + '//rmb-adsembler.netdna-ssl.com/mnemonics/adsm.macro.edge.js');
  }
}
macro.bootstrap(config);
