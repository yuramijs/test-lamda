var css = require('./mnemonics/css');
// var scripts = require( './mnemonics/scripts');
var macro = require( 'macro');
var script = require( 'core/script');

var config = {
  uuid: '2008d12f-dda5-43ec-bee8-f29cfe9c75cc',
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
        path: '/5706918/skoenhedsuniverset.dk_dsk_lb1_skn',
        size: [
          [[928, 590] ,[930, 180]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-lb3', {
        path: '/5706918/skoenhedsuniverset.dk_dsk_lb3_meg',
        size: [
          [[928, 590] ,[[930, 180], [930, 600]]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-sky1', {
        path: '/5706918/skoenhedsuniverset.dk_dsk_sky1_blk',
        size: [
          [[1290, 590],[[160, 600], [300, 600]]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0,
        dependencies: ['cncpt-lb1']
      });

      adsmtag.define('def-sky2', {
        path: '/5706918/skoenhedsuniverset.dk_dsk_sky2_blk',
        size: [
          [[1290, 590],[[160, 600], [300, 600]]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0,
        dependencies: ['cncpt-lb1']
      });

      adsmtag.display('cncpt-lb1', 'def-lb1');
      adsmtag.display('cncpt-lb3', 'def-lb3');
      adsmtag.display('cncpt-sky1', 'def-sky1');
      adsmtag.display('cncpt-sky2', 'def-sky2');
    });

    adsmtag.cmd = cmd.concat(adsmtag.cmd || []);

    script.load('https:' + '//rmb-adsembler.netdna-ssl.com/mnemonics/adsm.macro.edge.js');
  }
}
macro.bootstrap(config);
