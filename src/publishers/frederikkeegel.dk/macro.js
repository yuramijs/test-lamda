// var css = require('./mnemonics/css');
// var scripts = require( './mnemonics/scripts');
var macro = require( 'macro');
var script = require( 'core/script');

var config = {
  uuid: 'bc325614-5fdb-4db9-b7a0-38e4a7c0e9e3',
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
      	path: '/5706918/frederikkeegel.dk_dsk_lb1_skn',
      	size: [
      		[[928, 590] ,[[930, 180], [930, 600]]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-lb2', {
      	path: '/5706918/frederikkeegel.dk_dsk_lb2',
      	size: [
      		[[928, 590] ,[[930, 180], [930, 600]]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-lb3', {
      	path: '/5706918/frederikkeegel.dk_dsk_lb3',
      	size: [
      		[[928, 590] ,[[930, 180], [930, 600]]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-lb4', {
      	path: '/5706918/frederikkeegel.dk_dsk_lb4',
      	size: [
      		[[928, 590] ,[[930, 180], [930, 600]]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-lb5', {
      	path: '/5706918/frederikkeegel.dk_dsk_lb5',
      	size: [
      		[[928, 590] ,[[930, 180], [930, 600]]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-lb6', {
      	path: '/5706918/frederikkeegel.dk_dsk_lb6',
      	size: [
      		[[928, 590] ,[[930, 180], [930, 600]]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-rec1', {
      	path: '/5706918/frederikkeegel.dk_dsk_rec1',
      	size: [
      		[[928, 590],[300, 250]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-rec2', {
      	path: '/5706918/frederikkeegel.dk_dsk_rec2',
      	size: [
      		[[928, 590],[300, 250]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-rec3', {
      	path: '/5706918/frederikkeegel.dk_dsk_rec3',
      	size: [
      		[[928, 590],[300, 250]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-rec4', {
      	path: '/5706918/frederikkeegel.dk_dsk_rec4',
      	size: [
      		[[928, 590],[300, 250]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-rec5', {
      	path: '/5706918/frederikkeegel.dk_dsk_rec5',
      	size: [
      		[[928, 590],[300, 250]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-rec6', {
      	path: '/5706918/frederikkeegel.dk_dsk_rec6',
      	size: [
      		[[928, 590],[300, 250]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-rec7', {
      	path: '/5706918/frederikkeegel.dk_dsk_rec7',
      	size: [
      		[[928, 590],[300, 250]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-rec8', {
      	path: '/5706918/frederikkeegel.dk_dsk_rec8',
      	size: [
      		[[928, 590],[300, 250]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-mob1', {
      	path: '/5706918/frederikkeegel.dk_mob1',
      	size: [
      		[[927, 0],[]],
      		[[0, 0],[[320, 320],[320, 160]]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-mob2', {
      	path: '/5706918/frederikkeegel.dk_mob2',
      	size: [
      		[[927, 0],[]],
      		[[0, 0],[[320, 320],[320, 160]]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-mob3', {
      	path: '/5706918/frederikkeegel.dk_mob3',
      	size: [
      		[[927, 0],[]],
      		[[0, 0],[[320, 320],[320, 160]]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-mob4', {
      	path: '/5706918/frederikkeegel.dk_mob4',
      	size: [
      		[[927, 0],[]],
      		[[0, 0],[[320, 320],[320, 160]]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-mob5', {
      	path: '/5706918/frederikkeegel.dk_mob5',
      	size: [
      		[[927, 0],[]],
      		[[0, 0],[[320, 320],[320, 160]]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-mob6', {
      	path: '/5706918/frederikkeegel.dk_mob6',
      	size: [
      		[[927, 0],[]],
      		[[0, 0],[[320, 320],[320, 160]]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.display('cncpt-lb1', 'def-lb1');

      adsmtag.display('cncpt-lb2', 'def-lb2');

      adsmtag.display('cncpt-lb3', 'def-lb3');

      adsmtag.display('cncpt-lb4', 'def-lb4');

      adsmtag.display('cncpt-lb5', 'def-lb5');

      adsmtag.display('cncpt-lb6', 'def-lb6');

      adsmtag.display('cncpt-rec1', 'def-rec1');

      adsmtag.display('cncpt-rec2', 'def-rec2');

      adsmtag.display('cncpt-rec3', 'def-rec3');

      adsmtag.display('cncpt-rec4', 'def-rec4');

      adsmtag.display('cncpt-rec5', 'def-rec5');

      adsmtag.display('cncpt-rec6', 'def-rec6');

      adsmtag.display('cncpt-rec7', 'def-rec7');

      adsmtag.display('cncpt-rec8', 'def-rec8');

      adsmtag.display('cncpt-mob1', 'def-mob1');

      adsmtag.display('cncpt-mob2', 'def-mob2');

      adsmtag.display('cncpt-mob3', 'def-mob3');

      adsmtag.display('cncpt-mob4', 'def-mob4');

      adsmtag.display('cncpt-mob5', 'def-mob5');

      adsmtag.display('cncpt-mob6', 'def-mob6');
    });

    adsmtag.cmd = cmd.concat(adsmtag.cmd || []);

    script.load('https:' + '//rmb-adsembler.netdna-ssl.com/mnemonics/adsm.macro.edge.js');
  }
}
macro.bootstrap(config);