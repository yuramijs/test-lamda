// var css = require('./mnemonics/css');
// var scripts = require( './mnemonics/scripts');
var macro = require( 'macro');
var script = require( 'core/script');

var config = {
  uuid: 'ca27480f-d5c4-45b8-bb20-40ddccc63cac',
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
        path: '/5706918/spekulant.dk_dsk_lb1_skn',
        size: [
          [[928, 590] ,[[930, 180], [930, 600]]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-rec1', {
        path: '/5706918/spekulant.dk_dsk_rec1',
        size: [
          [[928, 590],[300, 250]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-rec2', {
        path: '/5706918/spekulant.dk_dsk_rec2',
        size: [
          [[928, 590],[300, 250]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-rec3', {
        path: '/5706918/spekulant.dk_dsk_rec3',
        size: [
          [[928, 590],[300, 250]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-rec4', {
        path: '/5706918/spekulant.dk_dsk_rec4',
        size: [
          [[928, 590],[300, 250]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-sky1', {
        path: '/5706918/spekulant.dk_dsk_sky1',
        size: [
          [[928, 590],[160, 600]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });


      adsmtag.define('def-sky2', {
        path: '/5706918/spekulant.dk_dsk_sky2',
        size: [
          [[928, 590],[160, 600]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-sky3', {
        path: '/5706918/spekulant.dk_dsk_sky3',
        size: [
          [[928, 590],[160, 600]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-sky4', {
        path: '/5706918/spekulant.dk_dsk_sky4',
        size: [
          [[928, 590],[160, 600]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-sky5', {
        path: '/5706918/spekulant.dk_dsk_sky5',
        size: [
          [[928, 590],[160, 600]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-sky6', {
        path: '/5706918/spekulant.dk_dsk_sky6',
        size: [
          [[928, 590],[160, 600]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.display('cncpt-lb1', 'def-lb1');

      adsmtag.display('cncpt-rec1', 'def-rec1');

      adsmtag.display('cncpt-rec2', 'def-rec2');

      adsmtag.display('cncpt-rec3', 'def-rec3');

      adsmtag.display('cncpt-rec4', 'def-rec4');

      adsmtag.display('cncpt-sky1', 'def-sky1');

      adsmtag.display('cncpt-sky2', 'def-sky2');

      adsmtag.display('cncpt-sky3', 'def-sky3');

      adsmtag.display('cncpt-sky4', 'def-sky4');

      adsmtag.display('cncpt-sky5', 'def-sky5');

      adsmtag.display('cncpt-sky6', 'def-sky6');
    });

    adsmtag.cmd = cmd.concat(adsmtag.cmd || []);

    script.load('https:' + '//rmb-adsembler.netdna-ssl.com/mnemonics/adsm.macro.edge.js');
  }
}
macro.bootstrap(config);