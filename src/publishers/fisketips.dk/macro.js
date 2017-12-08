// var css = require('./mnemonics/css');
// var scripts = require( './mnemonics/scripts');
var macro = require( 'macro');
var script = require( 'core/script');

var config = {
  uuid: 'a956d9fe-1f0b-42cd-ba58-1ee0033ba599',
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
        path: '/5706918/fisketips.dk_dsk_lb1_skn',
        size: [
          [[928, 590] ,[930, 180]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-rec1', {
        path: '/5706918/fisketips.dk_dsk_rec1',
        size: [
          [[928, 590],[300, 250]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-sky2', {
        path: '/5706918/fisketips.dk_dsk_sky2',
        size: [
          [[1290, 590],[160, 600]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-sky4', {
        path: '/5706918/fisketips.dk_dsk_sky4',
        size: [
          [[1290, 590],[160, 600]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-mob1', {
        path: '/5706918/fisketips.dk_mob1',
        size: [
          [[927, 0],[]],
          [[0, 0],[[320, 320],[320, 160]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.display('cncpt-lb1', 'def-lb1');
      adsmtag.display('cncpt-rec1', 'def-rec1');
      adsmtag.display('cncpt-sky2', 'def-sky2');
      adsmtag.display('cncpt-sky4', 'def-sky4');
      adsmtag.display('cncpt-mob1', 'def-mob1');
    });

    adsmtag.cmd = cmd.concat(adsmtag.cmd || []);

    script.load('https:' + '//rmb-adsembler.netdna-ssl.com/mnemonics/adsm.macro.edge.js');
  }
}
macro.bootstrap(config);
