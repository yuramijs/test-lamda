// var css = require('./mnemonics/css');
// var scripts = require( './mnemonics/scripts');
var macro = require( 'macro');
var script = require( 'core/script');

var config = {
  uuid: '0b045455-7ee9-4b1c-82c2-61a5471b8a57',
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
      	path: '/5706918/Slyngebarn.dk_dsk_lb1_236430',
      	size: [
      		[[0, 0] ,[[930, 180], [930, 600]]],
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-lb3', {
      	path: '/5706918/Slyngebarn.dk_dsk_lb3_236431',
      	size: [
      		[[0, 0] ,[930, 180]],
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-lb4', {
      	path: '/5706918/Slyngebarn.dk_dsk_lb4_236432',
      	size: [
      		[[0, 0] ,[930, 180]],
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-sky2', {
      	path: '/5706918/Slyngebarn.dk_dsk_sky2_236433',
      	size: [
      		[[0, 0],[160, 600]],
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-sky4', {
      	path: '/5706918/Slyngebarn.dk_dsk_sky4_236645',
      	size: [
      		[[0, 0],[160, 600]],
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.display('cncpt-lb1', 'def-lb1');
      adsmtag.display('cncpt-lb3', 'def-lb3');
      adsmtag.display('cncpt-lb4', 'def-lb4');
      adsmtag.display('cncpt-sky2', 'def-sky2');
      adsmtag.display('cncpt-sky4', 'def-sky4');
    });

    adsmtag.cmd = cmd.concat(adsmtag.cmd || []);

    script.load('https:' + '//rmb-adsembler.netdna-ssl.com/mnemonics/adsm.macro.edge.js');
  }
}
macro.bootstrap(config);
