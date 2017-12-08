var css = require('./mnemonics/css');
// var scripts = require( './mnemonics/scripts');
var macro = require( 'macro');
var script = require( 'core/script');

var config = {
  uuid: 'f00f17aa-0284-43de-bd4b-45ba1f2332f0',
  default: function() {
    var adsmtag = window.adsmtag = window.adsmtag || {};
    var cmd = [];
    cmd.push(function () {
      // scripts.run();
      css.run();
    });
    cmd.push(function () {
      adsmtag.service().setTargeting('entry', 'first');
      adsmtag.define('def-lb1', {
        path: '/5706918/hardwareonline.dk_dsk_lb1_skn_250324',
        size: [
          [[0, 0] ,[930, 180]],
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-lb3', {
        path: '/5706918/hardwareonline.dk_dsk_lb3_250328',
        size: [
          [[0, 0],[[930, 180]]],
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-rec1', {
        path: '/5706918/hardwareonline.dk_dsk_rec1_250927',
        size: [
          [[0, 0],[300, 250]],
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-sky2', {
        path: '/5706918/hardwareonline.dk_dsk_sky2_blk_250329',
        size: [
          [[0, 0],[160, 600]],
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-sky4', {
        path: '/5706918/hardwareonline.dk_dsk_sky4_blk_250330',
        size: [
          [[0, 0],[160, 600]],
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-sky1', {
        path: '/5706918/hardwareonline.dk_dsk_sky1_blk',
        size: [
          [[0, 0],[160, 600]],
        ],
        inview: [],
        refresh: 0,
        dependencies: ['cncpt-lb1']
      });

      adsmtag.define('def-sky3', {
        path: '/5706918/hardwareonline.dk_dsk_sky3_blk',
        size: [
          [[0, 0],[160, 600]],
        ],
        inview: [],
        refresh: 0,
        dependencies: ['cncpt-lb1']
      });

      adsmtag.display('cncpt-lb1', 'def-lb1');
      adsmtag.display('cncpt-lb3', 'def-lb3');
      adsmtag.display('cncpt-rec1', 'def-rec1');
      adsmtag.display('cncpt-sky2', 'def-sky2');
      adsmtag.display('cncpt-sky4', 'def-sky4');
      adsmtag.display('cncpt-sky1', 'def-sky1');
      adsmtag.display('cncpt-sky3', 'def-sky3');
    });

    adsmtag.cmd = cmd.concat(adsmtag.cmd || []);

    script.load('https:' + '//rmb-adsembler.netdna-ssl.com/mnemonics/adsm.macro.edge.js');
  }
}
macro.bootstrap(config);
