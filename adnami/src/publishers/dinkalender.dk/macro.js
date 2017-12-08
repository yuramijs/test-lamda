// var css = require('./mnemonics/css');
// var scripts = require( './mnemonics/scripts');
var macro = require( 'macro');
var script = require( 'core/script');

var config = {
  uuid: '93f00983-e4f7-48cc-81a6-01c8f39e1c2e',
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
        path: '/5706918/herningfolkeblad_dinkalender.dk_dsk_lb1_skn',
        size: [
          [[928, 590] ,[[930, 180], [930, 600]]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-lb6', {
        path: '/5706918/herningfolkeblad_dinkalender.dk_dsk_lb6',
        size: [
          [[928, 590] ,[930, 180]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-rec1', {
        path: '/5706918/herningfolkeblad_dinkalender.dk_dsk_rec1',
        size: [
          [[928, 590],[300, 250]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-bis1', {
        path: '/5706918/herningfolkeblad_dinkalender.dk_dsk_bis1',
        size: [
          [[928, 590],[300, 250]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-bis2', {
        path: '/5706918/herningfolkeblad_dinkalender.dk_dsk_bis2',
        size: [
          [[928, 590],[300, 250]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });


      adsmtag.define('def-sky1', {
        path: '/5706918/herningfolkeblad_dinkalender.dk_dsk_sky1_blk',
        size: [
          [[1290, 590],[[160, 600], [300, 600]]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0,
        dependencies: ['cncpt-lb1-skn']
      });

      adsmtag.define('def-sky2', {
        path: '/5706918/herningfolkeblad_dinkalender.dk_dsk_sky2_blk',
        size: [
          [[1290, 590],[[160, 600], [300, 600]]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0,
        dependencies: ['cncpt-lb1-skn']
      });

      adsmtag.define('def-sky3', {
        path: '/5706918/HF_dinkalender.dk_dsk_sky3',
        size: [
          [[1290, 590],[160, 600]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-sky4', {
        path: '/5706918/HF_dinkalender.dk_dsk_sky4',
        size: [
          [[1290, 590],[160, 600]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-mob_top', {
        path: '/5706918/herningfolkeblad_dinkalender.dk_mob_top_320x80',
        size: [
          [[737, 0],[]],
          [[0, 0],[320, 80]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-mob_botttom', {
        path: '/5706918/herningfolkeblad_dinkalender.dk_mob_bottom_320x80',
        size: [
          [[737, 0],[]],
          [[0, 0],[320, 80]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-mob3_320x320', {
        path: '/5706918/herningfolkeblad_dinkalender.dk_mob3',
        size: [
          [[737, 0],[]],
          [[0, 0],[320, 80]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-mob_bis1', {
        path: '/5706918/herningfolkeblad_dinkalender.dk_mob_bis1',
        size: [
          [[737, 0],[]],
          [[0, 0],[300, 250]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-mob_bis2', {
        path: '/5706918/herningfolkeblad_dinkalender.dk_mob_bis2',
        size: [
          [[737, 0],[]],
          [[0, 0],[300, 250]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.display('cncpt-lb1-skn', 'def-lb1-skn');
      adsmtag.display('cncpt-lb6', 'def-lb6');
      adsmtag.display('cncpt-rec1', 'def-rec1');
      adsmtag.display('cncpt-bis1', 'def-bis1');
      adsmtag.display('cncpt-bis2', 'def-bis2');
      adsmtag.display('cncpt-sky1', 'def-sky1');
      adsmtag.display('cncpt-sky2', 'def-sky2');
      adsmtag.display('cncpt-sky3', 'def-sky3');
      adsmtag.display('cncpt-sky4', 'def-sky4');
      adsmtag.display('cncpt-mob_top', 'def-mob_top');
      adsmtag.display('cncpt-mob_botttom', 'def-mob_botttom');
      adsmtag.display('cncpt-mob3_320x320', 'def-mob3_320x320');
      adsmtag.display('cncpt-mob_bis1', 'def-mob_bis1');
      adsmtag.display('cncpt-mob_bis2', 'def-mob_bis2');
    });

    adsmtag.cmd = cmd.concat(adsmtag.cmd || []);

    script.load('https:' + '//rmb-adsembler.netdna-ssl.com/mnemonics/adsm.macro.edge.js');
  }
}
macro.bootstrap(config);
