// var css = require('./mnemonics/css');
// var scripts = require( './mnemonics/scripts');
var macro = require( 'macro');
var script = require( 'core/script');

var config = {
  uuid: 'c2d00cd4-7d5e-4fcd-aa48-e3d709943dcf',
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
        path: '/5706918/Valdemarsro_dsk_lb1_skn',
        size: [
          [[928, 590] ,[[930, 180], [930, 600]]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });


      adsmtag.define('def-rec1', {
        path: '/5706918/Valdemarsro.dk_300x250_ATF_214107',
        size: [
          [[928, 590],[[300, 250], [300, 600]]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-rec2', {
        path: '/5706918/Valdemarsro.dk_300x250_BTF_214108',
        size: [
          [[928, 590],[300, 250]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });


      adsmtag.define('def-mob1', {
        path: '/5706918/Valdemarsro.dk_Mobile_320x160_ATF_214115',
        size: [
          [[927, 0],[]],
          [[0, 0],[[320, 160], [320, 320]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-mob2', {
        path: '/5706918/Valdemarsro.dk_Mobile_1x1_BTF_1_214112',
        size: [
          [[927, 0],[]],
          [[0, 0],[[320, 320],[320, 160], [320, 480]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-mob3', {
        path: '/5706918/Valdemarsro.dk_Mobile_1x1_BTF_2_214113',
        size: [
          [[927, 0],[]],
          [[0, 0],[[320, 320],[320, 160], [320, 480]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.display('cncpt-lb1', 'def-lb1');
      adsmtag.display('cncpt-rec1', 'def-rec1');
      adsmtag.display('cncpt-rec2', 'def-rec2');
      adsmtag.display('cncpt-mob1', 'def-mob1');
      adsmtag.display('cncpt-mob2', 'def-mob2');
      adsmtag.display('cncpt-mob3', 'def-mob3');
    });

    adsmtag.cmd = cmd.concat(adsmtag.cmd || []);

    script.load('https:' + '//rmb-adsembler.netdna-ssl.com/mnemonics/adsm.macro.edge.js');
  }
}
macro.bootstrap(config);
