// var css = require('./mnemonics/css');
// var scripts = require( './mnemonics/scripts');
var macro = require( 'macro');
var script = require( 'core/script');

var config = {
  uuid: '05d57bd2-78f7-46e5-92ad-bb162af45e81',
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
        path: '/5706918/herningfolkeblad_ugeavisenkarup.dk_dsk_lb1_skn',
        size: [
          [[928, 590] ,[[930, 180], [930, 600]]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-lb6', {
        path: '/5706918/MHF_ugeavisenkarup.dk_dsk_lb6',
        size: [
          [[928, 590] ,[930, 180]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-rec1', {
        path: '/5706918/herningfolkeblad_ugeavisenkarup.dk_dsk_rec1',
        size: [
          [[928, 590],[300, 250]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-sky3', {
        path: '/5706918/HF_ugeavisenkarup.dk_dsk_sky3',
        size: [
          [[1290, 590],[160, 600]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-sky4', {
        path: '/5706918/HF_ugeavisenkarup.dk_dsk_sky4',
        size: [
          [[1290, 590],[160, 600]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-featuresplash_left', {
        path: '/5706918/herningfolkeblad_ugeavisenkarup.dk_featuresplash_left',
        size: [
          [[928, 590],[230, 60]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-featuresplash_right', {
        path: '/5706918/herningfolkeblad_ugeavisenkarup.dk_featuresplash_right',
        size: [
          [[928, 590],[230, 60]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-mob_top', {
        path: '/5706918/herningfolkeblad_ugeavisenkarup.dk_mob_top_320x80',
        size: [
          [[737, 0],[]],
          [[0, 0],[320, 80]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-bis1', {
        path: '/5706918/HF_ugeavisenkarup.dk_dsk_bis01',
        size: [
          [[928, 590],[300, 250]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-bis2', {
        path: '/5706918/HF_ugeavisenkarup.dk_dsk_bis02',
        size: [
          [[928, 590],[300, 250]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-bis3', {
        path: '/5706918/HF_ugeavisenkarup.dk_dsk_bis03',
        size: [
          [[928, 590],[300, 250]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-bis4', {
        path: '/5706918/HF_ugeavisenkarup.dk_dsk_bis04',
        size: [
          [[928, 590],[300, 250]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.display('cncpt-lb1-skn', 'def-lb1-skn');
      adsmtag.display('cncpt-lb6', 'def-lb6');
      adsmtag.display('cncpt-rec1', 'def-rec1');
      adsmtag.display('cncpt-sky3', 'def-sky3');
      adsmtag.display('cncpt-sky4', 'def-sky4');
      adsmtag.display('cncpt-featuresplash_left', 'def-featuresplash_left');
      adsmtag.display('cncpt-featuresplash_right', 'def-featuresplash_right');
      adsmtag.display('cncpt-mob_top', 'def-mob_top');
      adsmtag.display('cncpt-bis1', 'def-bis1');
      adsmtag.display('cncpt-bis2', 'def-bis2');
      adsmtag.display('cncpt-bis3', 'def-bis3');
      adsmtag.display('cncpt-bis4', 'def-bis4');
    });

    adsmtag.cmd = cmd.concat(adsmtag.cmd || []);

    script.load('https:' + '//rmb-adsembler.netdna-ssl.com/mnemonics/adsm.macro.edge.js');
  }
}
macro.bootstrap(config);
