// var css = require('./mnemonics/css');
// var scripts = require( './mnemonics/scripts');
var macro = require( 'macro');
var script = require( 'core/script');

var config = {
  uuid: '2cee7b6a-3135-40d1-b410-b7f04a22d4f9',
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
        path: '/5706918/HFB_valgsite_dsk_lb1',
        size: [
          [[992, 0], [930, 180]],
        ],
        inview: [],
        refresh: 0,
      });

      adsmtag.define('def-lb2', {
        path: '/5706918/HFB_valgsite_dsk_lb2',
        size: [
          [[992, 0], [930, 180]],
        ],
        inview: [],
        refresh: 0,
      });

      adsmtag.define('def-lb3', {
        path: '/5706918/HFB_valgsite_dsk_lb3',
        size: [
          [[992, 0], [930, 180]],
        ],
        inview: [],
        refresh: 0,
      });

      adsmtag.define('def-mob1', {
        path: '/5706918/HFB_valgsite_mob1',
        size: [
          [[992, 0], []],
          [[0, 0], [320, 320]],
        ],
        inview: [],
        refresh: 0,
      });

      adsmtag.define('def-mob2', {
        path: '/5706918/HFB_valgsite_mob2',
        size: [
          [[992, 0], []],
          [[0, 0], [320, 320]],
        ],
        inview: [],
        refresh: 0,
      });

      adsmtag.define('def-mob3', {
        path: '/5706918/HFB_valgsite_mob3',
        size: [
          [[992, 0], []],
          [[0, 0], [320, 320]],
        ],
        inview: [],
        refresh: 0,
      });

      adsmtag.display('cncpt-lb1', 'def-lb1');
      adsmtag.display('cncpt-lb2', 'def-lb2');
      adsmtag.display('cncpt-lb3', 'def-lb3');
      adsmtag.display('cncpt-mob1', 'def-mob1');
      adsmtag.display('cncpt-mob2', 'def-mob2');
      adsmtag.display('cncpt-mob3', 'def-mob3');
    });

    adsmtag.cmd = cmd.concat(adsmtag.cmd || []);

    script.load('https:' + '//rmb-adsembler.netdna-ssl.com/mnemonics/adsm.macro.edge.js');
  }
}
macro.bootstrap(config);
