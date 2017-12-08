// var css = require('./mnemonics/css');
// var scripts = require( './mnemonics/scripts');
var macro = require( 'macro');
var script = require( 'core/script');

var config = {
  uuid: 'af71be5b-773d-4a72-beeb-dcfb67d312c6',
  default: function() {
    var adsmtag = window.adsmtag = window.adsmtag || {};
    var cmd = [];
    // cmd.push(function () {
    //   scripts.run();
    //   css.run();
    // });
    cmd.push(function () {
      adsmtag.service().setTargeting('entry', 'first');
      adsmtag.define('def-lb1-skn', {
      	path: '/5706918/plbold_930x180_skn',
      	size: [
      		[[928, 590] ,[[930, 180], [930, 600]]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-lb6', {
      	path: '/5706918/plbold.dk_dsk_lb3',
      	size: [
      		[[928, 590],[930, 180]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-rec1', {
      	path: '/5706918/plbold.dk_dsk_rec1',
      	size: [
      		[[928, 590],[300, 250]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-rec2', {
      	path: '/5706918/plbold.dk_dsk_rec2',
      	size: [
      		[[928, 590],[300, 250]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-rec3', {
      	path: '/5706918/plbold.dk_dsk_rec3',
      	size: [
      		[[928, 590],[300, 250]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-rec4', {
      	path: '/5706918/plbold.dk_dsk_rec4',
      	size: [
      		[[928, 590],[300, 250]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-sky1', {
      	path: '/5706918/plbold.dk_dsk_sky1_blk',
      	size: [
      		[[1290, 590],[160, 600]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0,
      	dependencies: ['cncpt-lb1-skn']
      });


      adsmtag.define('def-sky2', {
      	path: '/5706918/plbold_160x600_R_blk_sticky',
      	size: [
      		[[1290, 590],[160, 600]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0,
      	dependencies: ['cncpt-lb1-skn']
      });

      adsmtag.define('def-sky3', {
      	path: '/5706918/plbold.dk_dsk_sky3',
      	size: [
      		[[1290, 590],[160, 600]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0,
      	dependencies: ['cncpt-lb1-skn']
      });

      adsmtag.define('def-sky4', {
      	path: '/5706918/plbold.dk_dsk_sky4',
      	size: [
      		[[1290, 590],[160, 600]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0,
      	dependencies: ['cncpt-lb1-skn']
      });

      adsmtag.define('def-mob1', {
      	path: '/5706918/plbold.dk_mob1_227478',
      	size: [
      		[[927, 0],[]],
      		[[0, 0],[[320, 320],[320, 160], [300, 250]]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-mob2', {
      	path: '/5706918/plbold.dk_mob2_227481',
      	size: [
      		[[927, 0],[]],
      		[[0, 0],[[320, 320],[320, 160], [300, 250]]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-mob3', {
      	path: '/5706918/plbold.dk_mob3_227482',
      	size: [
      		[[927, 0],[]],
      		[[0, 0],[[320, 320],[320, 160], [300, 250]]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-mob4', {
      	path: '/5706918/plbold.dk_mob4_227484',
      	size: [
      		[[927, 0],[]],
      		[[0, 0],[[320, 320],[320, 160], [300, 250]]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-mob5', {
      	path: '/5706918/plbold.dk_mob5_227485',
      	size: [
      		[[927, 0],[]],
      		[[0, 0],[[320, 320],[320, 160], [300, 250]]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-mob6', {
      	path: '/5706918/plbold.dk_mob6_227486',
      	size: [
      		[[927, 0],[]],
      		[[0, 0],[[320, 320],[320, 160], [300, 250]]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-mob_320x80', {
      	path: '/5706918/plbold.dk_mob_320x80',
      	size: [
      		[[927, 0],[]],
      		[[0, 0],[320, 80]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-outstream', {
      	path: '/5706918/plbold.dk_outstream',
      	size: [
      		[[0, 0],[1, 1]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-text-link', {
      	path: '/61409566/text_link',
      	size: [
      		[[0, 0],[614, 18]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-text-link-2', {
      	path: '/61409566/text_link_2',
      	size: [
      		[[0, 0],[614, 18]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-800x800-layerpop', {
      	path: '/61409566/800x800_layerpop',
      	size: [
      		[[0, 0],[1, 1]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.display('cncpt-lb1-skn', 'def-lb1-skn');
      adsmtag.display('cncpt-lb6', 'def-lb6');
      adsmtag.display('cncpt-rec1', 'def-rec1');
      adsmtag.display('cncpt-rec2', 'def-rec2');
      adsmtag.display('cncpt-rec3', 'def-rec3');
      adsmtag.display('cncpt-rec4', 'def-rec4');
      adsmtag.display('cncpt-sky1', 'def-sky1');
      adsmtag.display('cncpt-sky2', 'def-sky2');
      adsmtag.display('cncpt-sky3', 'def-sky3');
      adsmtag.display('cncpt-sky4', 'def-sky4');
      adsmtag.display('cncpt-mob1', 'def-mob1');
      adsmtag.display('cncpt-mob2', 'def-mob2');
      adsmtag.display('cncpt-mob3', 'def-mob3');
      adsmtag.display('cncpt-mob4', 'def-mob4');
      adsmtag.display('cncpt-mob5', 'def-mob5');
      adsmtag.display('cncpt-mob6', 'def-mob6');
      adsmtag.display('cncpt-mob_320x80', 'def-mob_320x80');
      adsmtag.display('cncpt-outstream', 'def-outstream');
      adsmtag.display('tb-text-link', 'def-text-link');
      adsmtag.display('tb-text-link-2', 'def-text-link-2');
      adsmtag.display('tb-800x800-layerpop', 'def-800x800-layerpop');
    });

    adsmtag.cmd = cmd.concat(adsmtag.cmd || []);

    script.load('https:' + '//rmb-adsembler.netdna-ssl.com/mnemonics/adsm.macro.edge.js');
  }
}
macro.bootstrap(config);
