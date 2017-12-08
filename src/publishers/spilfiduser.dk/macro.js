// var css = require('./mnemonics/css');
// var scripts = require( './mnemonics/scripts');
var macro = require( 'macro');
var script = require( 'core/script');

var config = {
  uuid: '91bee531-d7c5-447e-9eb3-d45a43ca0b99',
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
      	path: '/5706918/Spilfiduser.dk_930x180_190305',
      	size: [
      		[[928, 590] ,[930, 180]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-lb2', {
      	path: '/5706918/Spilfiduser_930x180_2_dis_223436',
      	size: [
      		[[928, 590],[[930, 180],[930, 600]]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-annonce_rec1', {
      	path: '/5706918/Spilfiduser.dk_300x250_190304',
      	size: [
      		[[928, 590],[300, 250]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-sponsor_rec1', {
      	path: '/5706918/Spilfiduser_300x250_3_223440',
      	size: [
      		[[928, 590],[300, 250]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-forum_rec1', {
      	path: '/5706918/Spilfiduser.dk_300x250_2_221566',
      	size: [
      		[[928, 590],[300, 250]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-sky1', {
      	path: '/5706918/Spilfiduser_sky1_160x600_223442',
      	size: [
      		[[1290, 590],[160, 600]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-annonce_sky2', {
      	path: '/5706918/Spilfiduser_sky2_160x600_223443',
      	size: [
      		[[1290, 590],[160, 600]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-mob1', {
      	path: '/5706918/Spilfiduser_mob1_227303',
      	size: [
      		[[927, 0],[]],
      		[[0, 0],[[320, 320],[320, 160], [320, 50]]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-mob2', {
      	path: '/5706918/Spilfiduser_mob2_227302',
      	size: [
      		[[927, 0],[]],
      		[[0, 0],[[320, 320],[320, 160]]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-mob3', {
      	path: '/5706918/Spilfiduser_mob3_227301',
      	size: [
      		[[927, 0],[]],
      		[[0, 0],[[320, 320],[320, 160]]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-mob4', {
      	path: '/5706918/Spilfiduser_mob4_227300',
      	size: [
      		[[927, 0],[]],
      		[[0, 0],[[320, 320],[320, 160]]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.display('cncpt-lb1', 'def-lb1');
      adsmtag.display('cncpt-lb2', 'def-lb2');
      adsmtag.display('cncpt-annonce_rec1', 'def-annonce_rec1');
      adsmtag.display('cncpt-sponsor_rec1', 'def-sponsor_rec1');
      adsmtag.display('cncpt-forum_rec1', 'def-forum_rec1');
      adsmtag.display('cncpt-sky1', 'def-sky1');
      adsmtag.display('cncpt-annonce_sky2', 'def-annonce_sky2');
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