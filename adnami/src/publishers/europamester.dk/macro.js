// var css = require('./mnemonics/css');
// var scripts = require( './mnemonics/scripts');
var macro = require( 'macro');
var script = require( 'core/script');

var config = {
  uuid: '849488fd-0a4e-4e5b-9e36-8ecbd6c4b7e3',
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
      	path: '/5706918/nordicadpartner_europamester.dk_dsk_lb1_245174',
      	size: [
      		[[737, 590] ,[[930, 180], [930, 600]]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-rec3', {
      	path: '/5706918/nordicadpartner_europamester.dk_dsk_rec3_300x600_245180',
      	size: [
      		[[928, 590],[[300, 250],[300, 600]]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-sky1', {
      	path: '/5706918/nordicadpartner_europamester.dk_dsk_sky1_blk_245181',
      	size: [
      		[[1290, 590],[160, 600]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0,
      	dependencies: ['cncpt-lb1']
      });

      adsmtag.define('def-sky2', {
      	path: '/5706918/nordicadpartner_europamester.dk_dsk_sky2_blk_245182',
      	size: [
      		[[928, 590],[[160, 600],[300, 600]]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0,
      	dependencies: ['cncpt-lb1']
      });

      adsmtag.define('def-sky4', {
      	path: '/5706918/nordicadpartner_europamester.dk_dsk_sky4_300x600_245184',
      	size: [
      		[[928, 590],[160, 600]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-tab-rec3', {
      	path: '/5706918/nordicadpartner_europamester.dk_tab_rec3_300x600_245196',
      	size: [
      		[[1025, 590],[]],
      		[[737, 590],[[300, 250],[300, 600]]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-tab-sky1', {
      	path: '/5706918/nordicadpartner_europamester.dk_tab_sky1_245197',
      	size: [
      		[[1025, 590],[]],
      		[[737, 590],[160, 600]]
      	],
      	inview: [100],
      	refresh: 45000
      });

      adsmtag.define('def-tab-sky2', {
      	path: '/5706918/nordicadpartner_europamester.dk_tab_sky2_300x600__245198',
      	size: [
      		[[1025, 590],[]],
      		[[737, 590],[[160, 600],[300, 600]]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-mob1', {
      	path: '/5706918/nordicadpartner_europamester.dk_mob1_245187',
      	size: [
      		[[737, 0],[]],
      		[[0, 0],[[320, 320],[320, 160]]]
      	],
      	inview: [100],
      	refresh: 45000
      });

      adsmtag.define('def-mob2', {
      	path: '/5706918/nordicadpartner_europamester.dk_mob2_245189',
      	size: [
      		[[737, 0],[]],
      		[[0, 0],[[320, 320],[320, 160]]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-mob3', {
      	path: '/5706918/nordicadpartner_europamester.dk_mob3_245192',
      	size: [
      		[[737, 0],[]],
      		[[0, 0],[[320, 320],[320, 160]]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-outstream', {
      	path: '/5706918/Europamester.dk_outstream',
      	size: [
      		[[0, 0],[1, 1]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-lb2', {
      	path: '/5706918/sportensverden_europamester.dk_dsk_lb2_253385',
      	size: [
      		[[737, 590],[[930, 180],[930, 600]]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-lb3', {
      	path: '/5706918/sportensverden_europamester.dk_dsk_lb3_253387',
      	size: [
      		[[737, 590],[[930, 180],[930, 600]]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-rec1', {
      	path: '/5706918/sportensverden_europamester.dk_dsk_rec1_253389',
      	size: [
      		[[928, 590],[[300, 250],[300, 600]]],
      		[[0, 0],[]]
      	],
      	inview: [100],
      	refresh: 45000
      });

      adsmtag.define('def-rec2', {
      	path: '/5706918/sportensverden_europamester.dk_dsk_rec2_253391',
      	size: [
      		[[928, 590],[[300, 250],[300, 600]]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-rec4', {
      	path: '/5706918/sportensverden_europamester.dk_dsk_rec4',
      	size: [
      		[[928, 590],[300, 250]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-rec5', {
      	path: '/5706918/sportensverden_europamester.dk_dsk_rec5',
      	size: [
      		[[928, 590],[300, 250]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-sky3', {
      	path: '/5706918/sportensverden_europamester.dk_dsk_sky3_253393',
      	size: [
      		[[928, 590],[160, 600]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-sky5', {
      	path: '/5706918/sportensverden_europamester.dk_dsk_sky5_253394',
      	size: [
      		[[928, 590],[160, 600]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-tab-sky3', {
      	path: '/5706918/sportensverden_europamester.dk_tab_sky3_253395',
      	size: [
      		[[1025, 590],[]],
      		[[737, 590],[160, 600]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-tab-sky4', {
      	path: '/5706918/sportensverden_europamester.dk_tab_sky4_253396',
      	size: [
      		[[1025, 590],[]],
      		[[737, 590],[160, 600]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-tab-rec2', {
      	path: '/5706918/sportensverden_europamester.dk_tab_rec2_253397',
      	size: [
      		[[1025, 590],[]],
      		[[737, 590],[[300, 250],[300, 600]]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-mob4', {
      	path: '/5706918/sportensverden_europamester.dk_mob4_253399',
      	size: [
      		[[737, 0],[]],
      		[[0, 0],[[320, 320],[320, 160]]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-mob5', {
      	path: '/5706918/sportensverden_europamester.dk_mob5',
      	size: [
      		[[737, 0],[]],
      		[[0, 0],[[320, 320],[320, 160]]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-mob6', {
      	path: '/5706918/sportensverden_europamester.dk_mob6',
      	size: [
      		[[737, 0],[]],
      		[[0, 0],[[320, 320],[320, 160]]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-sky6', {
      	path: '/5706918/SPV_europamester.dk_dsk_sky6',
      	size: [
      		[[928, 590],[160, 600]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.display('cncpt-lb1', 'def-lb1');
      adsmtag.display('cncpt-rec3', 'def-rec3');
      adsmtag.display('cncpt-sky1', 'def-sky1');
      adsmtag.display('cncpt-sky2', 'def-sky2');
      adsmtag.display('cncpt-sky4', 'def-sky4');
      adsmtag.display('cncpt-tab_rec3', 'def-tab-rec3');
      adsmtag.display('cncpt-tab_sky1', 'def-tab-sky1');
      adsmtag.display('cncpt-tab_sky2', 'def-tab-sky2');
      adsmtag.display('cncpt-mob1', 'def-mob1');
      adsmtag.display('cncpt-mob2', 'def-mob2');
      adsmtag.display('cncpt-mob3', 'def-mob3');
      adsmtag.display('cncpt-outstream', 'def-outstream');
      adsmtag.display('cncpt-lb2', 'def-lb2');
      adsmtag.display('cncpt-lb3', 'def-lb3');
      adsmtag.display('cncpt-dsk_rec1', 'def-rec1');
      adsmtag.display('cncpt-dsk_rec2', 'def-rec2');
      adsmtag.display('cncpt-dsk_rec4', 'def-rec4');
      adsmtag.display('cncpt-dsk_rec5', 'def-rec5');
      adsmtag.display('cncpt-dsk_sky3', 'def-sky3');
      adsmtag.display('cncpt-dsk_sky5', 'def-sky5');
      adsmtag.display('cncpt-tab_sky3', 'def-tab-sky3');
      adsmtag.display('cncpt-tab_sky4', 'def-tab-sky4');
      adsmtag.display('cncpt-tab_rec2', 'def-tab-rec2');
      adsmtag.display('cncpt-mob4', 'def-mob4');
      adsmtag.display('cncpt-mob5', 'def-mob5');
      adsmtag.display('cncpt-mob6', 'def-mob6');
      adsmtag.display('cncpt-sky6', 'def-sky6');
    });

    adsmtag.cmd = cmd.concat(adsmtag.cmd || []);

    script.load('https:' + '//rmb-adsembler.netdna-ssl.com/mnemonics/adsm.macro.edge.js');
  }
}
macro.bootstrap(config);