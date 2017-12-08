// var css = require('./mnemonics/css');
// var scripts = require( './mnemonics/scripts');
var macro = require( 'macro');
var script = require( 'core/script');

var config = {
  uuid: 'ace5a628-76fc-41e7-9414-c12a26b53aa0',
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
        path: '/5706918/viasatsport.se_dsk_lb1_skn',
        size: [
          [[1025, 0], [[980, 120], [980, 240], [980, 360]]],
        ],
        inview: [],
        refresh: 0,
      });
      adsmtag.define('def-mpu1', {
        path: '/5706918/viasatsport.se_dsk_mpu1',
        size: [
          [[1025, 0], [[600, 250], [480, 400]]],
        ],
        inview: [],
        refresh: 0,
      });
      adsmtag.define('def-sky2', {
        path: '/5706918/viasatsport.se_dsk_sky2',
        size: [
          [[1141, 0], [[250, 600], [160, 600], [300, 600], [250, 360], [250, 720]]],
        ],
        inview: [],
        refresh: 0,
      	dependencies: ['cncpt-lb1'],
      });
      adsmtag.define('def-mob1', {
        path: '/5706918/viasatsport.se_mob1',
        size: [
          [[768, 0], []],
          [[0, 0], [[320, 50], [320, 160], [320, 320]]],
        ],
        inview: [],
        refresh: 0,
      });
      adsmtag.define('def-mob2', {
        path: '/5706918/viasatsport.se_mob2',
        size: [
          [[768, 0], []],
          [[0, 0], [[320, 50], [320, 160], [320, 320]]],
        ],
        inview: [],
        refresh: 0,
      });
      adsmtag.define('def-tab-lb1', {
        path: '/5706918/viasatsport.se_tab_lb1_728x90',
        size: [
          [[1025, 0], []],
          [[768, 0], [728, 90]],
          [[0, 0], []],
        ],
        inview: [],
        refresh: 0,
      });
      adsmtag.define('def-tab-rec1', {
        path: '/5706918/viasatsport.se_tab_rec1',
        size: [
          [[1025, 0], []],
          [[768, 0], [300, 250]],
          [[0, 0], []],
        ],
        inview: [],
        refresh: 0,
      });

      adsmtag.display('cncpt-lb1', 'def-lb1');
      adsmtag.display('cncpt-mpu1', 'def-mpu1');
      adsmtag.display('cncpt-sky2', 'def-sky2');
      adsmtag.display('cncpt-mob1', 'def-mob1');
      adsmtag.display('cncpt-mob2', 'def-mob2');
      adsmtag.display('cncpt-tab-lb1', 'def-tab-lb1');
      adsmtag.display('cncpt-tab-rec1', 'def-tab-rec1');
    });

    adsmtag.cmd = cmd.concat(adsmtag.cmd || []);

    script.load('https:' + '//rmb-adsembler.netdna-ssl.com/mnemonics/adsm.macro.edge.js');
  }
}
macro.bootstrap(config);
