// var css = require('./mnemonics/css');
// var scripts = require( './mnemonics/scripts');
var macro = require( 'macro');
var script = require( 'core/script');

var config = {
  uuid: 'cd1b796b-9d84-4c62-8935-0ea63776cb14',
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
        path: '/5706918/Herningfolkeblad_HN.dk_dsk_lb1_skn',
        size: [
          [[928, 590] ,[[930, 180], [930, 600]]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-lb1-dis', {
        path: '/5706918/Herningfolkeblad_HN.dk_dsk_lb1_dis',
        size: [
          [[928, 590] ,[[930, 180], [930, 600]]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-lb4', {
        path: '/5706918/Herningfolkeblad_HN.dk_dsk_lb4',
        size: [
          [[928, 590] ,[930, 180]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-rec1', {
        path: '/5706918/Herningfolkeblad_HN.dk_dsk_rec1',
        size: [
          [[928, 590],[300, 250]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-rec2', {
        path: '/5706918/Herningfolkeblad_HN.dk_dsk_rec2',
        size: [
          [[928, 590],[300, 250]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-sky1', {
        path: '/5706918/Herningfolkeblad_HN.dk_dsk_sky1_blk',
        size: [
          [[1290, 590],[160, 600]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0,
        dependencies: ['cncpt-lb1-skn']
      });

      adsmtag.define('def-sky2', {
        path: '/5706918/Herningfolkeblad_HN.dk_dsk_sky2_blk',
        size: [
          [[1290, 590],[160, 600]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0,
        dependencies: ['cncpt-lb1-skn']
      });

      adsmtag.define('def-sky3', {
        path: '/5706918/HF_herningnyt.dk_dsk_sky3',
        size: [
          [[1290, 590],[160, 600]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0,
        dependencies: ['cncpt-lb1-skn']
      });

      adsmtag.define('def-sky4', {
        path: '/5706918/HF_herningnyt.dk_dsk_sky3',
        size: [
          [[1290, 590],[160, 600]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0,
        dependencies: ['cncpt-lb1-skn']
      });

      adsmtag.define('def-outstream', {
        path: '/5706918/Herningfolkeblad_HN.dk_outstream',
        size: [
          [[0, 0],[1, 1]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-mob1', {
        path: '/5706918/Herningfolkeblad_HN.dk_mob1',
        size: [
          [[737, 0],[]],
          [[0, 0],[[320, 320],[320, 160]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-mob2', {
        path: '/5706918/Herningfolkeblad_HN.dk_mob2',
        size: [
          [[737, 0],[]],
          [[0, 0],[[320, 320],[320, 160]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-mob3', {
        path: '/5706918/herningfolkeblad_HN_mob3',
        size: [
          [[737, 0],[]],
          [[0, 0],[[320, 320],[320, 160]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.display('cncpt-lb1-skn', 'def-lb1-skn');
      adsmtag.display('cncpt-lb1-dis', 'def-lb1-dis');
      adsmtag.display('cncpt-lb4', 'def-lb4');
      adsmtag.display('cncpt-rec1', 'def-rec1');
      adsmtag.display('cncpt-rec2', 'def-rec2');
      adsmtag.display('cncpt-sky1', 'def-sky1');
      adsmtag.display('cncpt-sky2', 'def-sky2');
      adsmtag.display('cncpt-sky3', 'def-sky3');
      adsmtag.display('cncpt-sky4', 'def-sky4');
      adsmtag.display('cncpt-outstream', 'def-outstream');
      adsmtag.display('cncpt-mob1', 'def-mob1');
      adsmtag.display('cncpt-mob2', 'def-mob2');
      adsmtag.display('cncpt-mob3', 'def-mob3');
    });

    adsmtag.cmd = cmd.concat(adsmtag.cmd || []);

    script.load('https:' + '//rmb-adsembler.netdna-ssl.com/mnemonics/adsm.macro.edge.js');
  }
}
macro.bootstrap(config);
