var css = require('./mnemonics/css');
// var scripts = require( './mnemonics/scripts');
var macro = require( 'macro');
var script = require( 'core/script');

var config = {
  uuid: '92bde83d-a958-45e1-a7fc-47d6dd45a05f',
  default: function() {
    var adsmtag = window.adsmtag = window.adsmtag || {};
    var cmd = [];
    cmd.push(function () {
      // scripts.run();
      css.run();
    });
    cmd.push(function () {
      adsmtag.service().setTargeting('entry', 'first');
      adsmtag.define('def-lb1-skn', {
      	path: '/5706918/tipsbladet_fp_dsk_lb1_skn',
      	size: [
      		[[928, 590] ,[[930, 180], [930, 600]]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-lb1-dis', {
      	path: '/5706918/tipsbladet_rs_dsk_lb1_dis',
      	size: [
      		[[756, 590] ,[[930, 180], [930, 600]]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-lb6', {
      	path: '/5706918/tipsbladet_rs_dsk_lb6',
      	size: [
      		[[928, 590],[930, 180]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-rec1', {
      	path: '/5706918/tipsbladet_rs_dsk_rec1',
      	size: [
      		[[928, 590],[[300, 250], [300, 600]]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-rec2', {
      	path: '/5706918/tipsbladet_rs_dsk_rec2',
      	size: [
      		[[928, 590],[[300, 250], [300, 600]]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-rec3', {
      	path: '/5706918/tipsbladet_rs_dsk_rec3',
      	size: [
      		[[928, 590],[[300, 250], [300, 600]]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-rec4', {
      	path: '/5706918/tipsbladet_rs_dsk_rec4',
      	size: [
      		[[928, 590],[[300, 250], [300, 600]]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-sky1', {
      	path: '/5706918/tipsbladet_160x600_L1_213155',
      	size: [
      		[[1290, 590],[160, 600]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0,
      	dependencies: ['cncpt-lb1-skn']
      });


      adsmtag.define('def-sky2', {
      	path: '/5706918/tipsbladet_160x600_R1_213157',
      	size: [
      		[[1290, 590],[[160, 600], [300, 600]]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0,
      	dependencies: ['cncpt-lb1-skn']
      });

      adsmtag.define('def-mob1', {
      	path: '/5706918/tipsbladet_rs_mob1',
      	size: [
      		[[927, 0],[]],
      		[[0, 0],[[320, 320],[320, 160]]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-mob2', {
      	path: '/5706918/tipsbladet_rs_mob2',
      	size: [
      		[[927, 0],[]],
      		[[0, 0],[[320, 320],[320, 160]]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-mob3', {
      	path: '/5706918/tipsbladet_rs_mob3',
      	size: [
      		[[927, 0],[]],
      		[[0, 0],[[320, 320],[320, 160]]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-mob4', {
      	path: '/5706918/tipsbladet_rs_mob4',
      	size: [
      		[[927, 0],[]],
      		[[0, 0],[[320, 320],[320, 160]]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-mob_320x80', {
      	path: '/5706918/tipsbladet.dk_mob_320x80',
      	size: [
      		[[927, 0],[]],
      		[[0, 0],[320, 80]]
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

      adsmtag.define('def-text-link2', {
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

      adsmtag.define('def-930x26-ticker', {
      	path: '/61409566/930x26_ticker',
      	size: [
      		[[0, 0],[930, 26]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-614x26-ticker', {
      	path: '/61409566/614x26_ticker',
      	size: [
      		[[0, 0],[614, 26]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-ipad-930x180', {
      	path: '/61409566/ipad_930x180',
      	size: [
      		[[0, 0],[930, 180]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-node-collapsable', {
      	path: '/61409566/node_collapsable',
      	size: [
      		[[0, 0],[1, 1]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-mob5', {
      	path: '/5706918/tipsbladet_rs_mob5',
      	size: [
      		[[927, 0],[]],
      		[[0, 0],[[320, 320],[320, 160]]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-mob6', {
      	path: '/5706918/tipsbladet_rs_mob6',
      	size: [
      		[[927, 0],[]],
      		[[0, 0],[[320, 320],[320, 160]]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-outstream', {
      	path: '/5706918/tipsbladet_rs_dsk_outstream',
      	size: [
      		[[0, 0],[1, 1]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.display('cncpt-lb1-skn', 'def-lb1-skn');
      adsmtag.display('cncpt-lb1-dis', 'def-lb1-dis');
      adsmtag.display('cncpt-lb6', 'def-lb6');
      adsmtag.display('cncpt-rec1', 'def-rec1');
      adsmtag.display('cncpt-rec2', 'def-rec2');
      adsmtag.display('cncpt-rec3', 'def-rec3');
      adsmtag.display('cncpt-rec4', 'def-rec4');
      adsmtag.display('cncpt-sky1', 'def-sky1');
      adsmtag.display('cncpt-sky2', 'def-sky2');
      adsmtag.display('cncpt-mob1', 'def-mob1');
      adsmtag.display('cncpt-mob2', 'def-mob2');
      adsmtag.display('cncpt-mob3', 'def-mob3');
      adsmtag.display('cncpt-mob4', 'def-mob4');
      adsmtag.display('cncpt-mob_320x80', 'def-mob_320x80');
      adsmtag.display('tb-text-link', 'def-text-link');
      adsmtag.display('tb-text-link-2', 'def-text-link2');
      adsmtag.display('tb-800x800-layerpop', 'def-800x800-layerpop');
      adsmtag.display('tb-930x26-ticker', 'def-930x26-ticker');
      adsmtag.display('tb-614x26-ticker', 'def-614x26-ticker');
      adsmtag.display('tb-ipad-930x180', 'def-ipad-930x180');
      adsmtag.display('tb-node-collapsable', 'def-node-collapsable');
      adsmtag.display('cncpt-mob5', 'def-mob5');
      adsmtag.display('cncpt-mob6', 'def-mob6');
      adsmtag.display('cncpt-outstream', 'def-outstream');
    });

    adsmtag.cmd = cmd.concat(adsmtag.cmd || []);

    script.load('https:' + '//rmb-adsembler.netdna-ssl.com/mnemonics/adsm.macro.edge.js');
  }
}
macro.bootstrap(config);
