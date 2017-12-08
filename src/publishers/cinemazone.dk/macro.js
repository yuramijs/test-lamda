// var css = require('./mnemonics/css');
// var scripts = require( './mnemonics/scripts');
var macro = require( 'macro');
var script = require( 'core/script');

var config = {
  uuid: 'b48de544-6e3d-41c2-8327-a4fc66a18ffa',
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
      	path: '/5706918/cinemazone.dk_dsk_lb1_skn',
      	size: [
      		[[928, 598] ,[[ 930, 180], [930, 600]]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-rec1', {
      	path: '/5706918/cinemazone.dk_dsk_rec1',
      	size: [
      		[[928, 598],[300, 250]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-sky1', {
      	path: '/5706918/cinemazone.dk_dsk_sky1',
      	size: [
      		[[928, 598],[160, 600]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-sky2', {
      	path: '/5706918/cinemazone.dk_dsk_sky2',
      	size: [
      		[[928, 598],[160, 600]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-sky3_blk', {
      	path: '/5706918/cinemazone.dk_dsk_sky3_blk_',
      	size: [
      		[[1320, 598],[160, 600]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0,
      	dependencies: ['cncpt-lb1']
      });

      adsmtag.define('def-sky4_blk', {
      	path: '/5706918/cinemazone.dk_dsk_sky4_blk',
      	size: [
      		[[1320, 598],[[160, 600], [300, 600]]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0,
      	dependencies: ['cncpt-lb1']
      });

      adsmtag.display('cncpt-lb1', 'def-lb1');
      adsmtag.display('cncpt-rec1', 'def-rec1');
      adsmtag.display('cncpt-sky1', 'def-sky1');
      adsmtag.display('cncpt-sky2', 'def-sky2');
      adsmtag.display('cncpt-sky3_blk', 'def-sky3_blk');
      adsmtag.display('cncpt-sky4_blk', 'def-sky4_blk');
    });

    adsmtag.cmd = cmd.concat(adsmtag.cmd || []);

    script.load('https:' + '//rmb-adsembler.netdna-ssl.com/mnemonics/adsm.macro.edge.js');
  }
}
macro.bootstrap(config);
