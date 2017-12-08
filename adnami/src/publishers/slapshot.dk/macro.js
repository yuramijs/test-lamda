// var css = require('./mnemonics/css');
// var scripts = require( './mnemonics/scripts');
var macro = require( 'macro');
var script = require( 'core/script');

var config = {
  uuid: '0b3b3ce5-d50f-4b01-8cb9-a7d9b9621e50',
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
      	path: '/5706918/slapshot.dk_dsk_lb1',
      	size: [
      		[[928, 590] ,[[930, 180], [930, 600]]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-sky1', {
      	path: '/5706918/slapshot.dk_dsk_sky1',
      	size: [
      		[[1290, 590],[[160, 600], [300, 600]]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0,
      });

      adsmtag.define('def-728x90_1', {
      	path: '/5706918/slapshot.dk_dsk_728x90',
      	size: [
      		[[928, 590],[728, 90]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-728x90_2', {
      	path: '/5706918/slapshot.dk_dsk_728x90_2',
      	size: [
      		[[928, 590],[728, 90]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-rec1', {
      	path: '/5706918/slapshot.dk_dsk_rec1',
      	size: [
      		[[928, 590],[300, 250]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-rec2', {
      	path: '/5706918/slapshot.dk_dsk_rec2',
      	size: [
      		[[928, 590],[300, 250]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-rec3', {
      	path: '/5706918/slapshot.dk_dsk_rec3',
      	size: [
      		[[928, 590],[300, 250]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-rec4', {
      	path: '/5706918/slapshot.dk_dsk_rec4',
      	size: [
      		[[928, 590],[300, 250]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-rec5', {
      	path: '/5706918/slapshot.dk_dsk_rec5',
      	size: [
      		[[928, 590],[300, 250]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-mob1', {
      	path: '/5706918/slapshot.dk_mob1',
      	size: [
      		[[927, 0],[]],
      		[[0, 0],[[320, 320],[320, 160], [320, 480]]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-mob2', {
      	path: '/5706918/slapshot.dk_mob2',
      	size: [
      		[[927, 0],[]],
      		[[0, 0],[[320, 320],[320, 160], [320, 480]]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.display('cncpt-lb1', 'def-lb1');
      adsmtag.display('cncpt-sky1', 'def-sky1');
      adsmtag.display('cncpt-728x90_1', 'def-728x90_1');
      adsmtag.display('cncpt-728x90_2', 'def-728x90_2');
      adsmtag.display('cncpt-rec1', 'def-rec1');
      adsmtag.display('cncpt-rec2', 'def-rec2');
      adsmtag.display('cncpt-rec3', 'def-rec3');
      adsmtag.display('cncpt-rec4', 'def-rec4');
      adsmtag.display('cncpt-rec5', 'def-rec5');
      adsmtag.display('cncpt-mob1', 'def-mob1');
      adsmtag.display('cncpt-mob2', 'def-mob2');
    });

    adsmtag.cmd = cmd.concat(adsmtag.cmd || []);

    script.load('https:' + '//rmb-adsembler.netdna-ssl.com/mnemonics/adsm.macro.edge.js');
  }
}
macro.bootstrap(config);
