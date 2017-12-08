// var css = require('./mnemonics/css');
// var scripts = require( './mnemonics/scripts');
var macro = require( 'macro');
var script = require( 'core/script');

var config = {
  uuid: '7de08317-8afa-4213-aeec-e5945cba58ae',
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
      	path: '/5706918/Connery_STD_ROS_930x180_skn',
      	size: [
      		[[928, 590] ,[[930, 180], [930, 600]]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-rec1', {
      	path: '/5706918/Connery_STD_ROS_300x250_dis',
      	size: [
      		[[0, 0],[300, 250]]
      	],
      	inview: [],
      	refresh: 30000
      });

      adsmtag.define('def-sky1', {
      	path: '/5706918/connery_dsk_sky1_blk',
      	size: [
      		[[1290, 590],[160, 600]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0,
      	dependencies: ['cncpt-lb1']
      });


      adsmtag.define('def-sky2', {
      	path: '/5706918/connery_dsk_sky2_blk',
      	size: [
      		[[1290, 590],[[160, 600], [300, 600]]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0,
      	dependencies: ['cncpt-lb1']
      });

      adsmtag.define('def-mob1', {
      	path: '/5706918/connery.dk_mobile_320x320_211210',
      	size: [
      		[[737, 0],[]],
      		[[0, 0],[[320, 320],[320, 160]]]
      	],
      	inview: [],
      	refresh: 30000
      });

      adsmtag.define('def-mob3', {
      	path: '/5706918/Connery.dk_mob3',
      	size: [
      		[[737, 0],[]],
      		[[0, 0],[[320, 320],[320, 160]]]
      	],
      	inview: [],
      	refresh: 30000
      });

      adsmtag.define('def-outstream', {
      	path: '/5706918/Connery.dk_dsk_outsream',
      	size: [
      		[[0, 0],[1, 1]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.display('cncpt-lb1', 'def-lb1');
      adsmtag.display('cncpt-rec1', 'def-rec1');
      adsmtag.display('cncpt-sky1', 'def-sky1');
      adsmtag.display('cncpt-sky2', 'def-sky2');
      adsmtag.display('cncpt-mob1', 'def-mob1');
      adsmtag.display('cncpt-mob3', 'def-mob3');
      adsmtag.display('cncpt-outstream', 'def-outstream');
    });

    adsmtag.cmd = cmd.concat(adsmtag.cmd || []);

    script.load('https:' + '//rmb-adsembler.netdna-ssl.com/mnemonics/adsm.macro.edge.js');
  }
}
macro.bootstrap(config);
