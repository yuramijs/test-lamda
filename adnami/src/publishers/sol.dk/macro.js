var css = require('./mnemonics/css');
// var scripts = require( './mnemonics/scripts');
var macro = require( 'macro');
var script = require( 'core/script');

var config = {
  uuid: 'da379e8a-6f49-4bde-8370-214b333f968f',
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
        path: '/5706918/Sol.dk_dsk_lb1_skn_193657',
        size: [
          [[0, 0] ,[930, 180]],
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-lb3', {
        path: '/5706918/Sol.dk_dsk_lb3_193653',
        size: [
          [[0, 0],[930, 180]],
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-lb4', {
        path: '/5706918/Sol.dk_dsk_lb4_248107',
        size: [
          [[0, 0],[930, 180]],
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-rec1', {
        path: '/5706918/Sol.dk_dsk_rec1_193654',
        size: [
          [[0, 0],[300, 250]],
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-rec2', {
        path: '/5706918/Sol.dk_dsk_rec2_193656',
        size: [
          [[0, 0],[300, 250]],
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-rec3', {
        path: '/5706918/Sol.dk_dsk_rec3_227176',
        size: [
          [[0, 0],[300, 250]],
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-sky1', {
        path: '/5706918/Sol.dk_dsk_sky1_blk_193651',
        size: [
          [[0, 0],[160, 600]],
        ],
        inview: [],
        refresh: 0,
        dependencies: ['cncpt-lb1']
      });

      adsmtag.define('def-sky2', {
        path: '/5706918/Sol.dk_dsk_sky2_blk_227178',
        size: [
          [[0, 0],[160, 600]],
        ],
        inview: [],
        refresh: 0,
        dependencies: ['cncpt-lb1']
      });

      adsmtag.define('def-email-lb1', {
        path: '/5706918/sol.dk_email_dsk_lb1',
        size: [
          [[0, 0] ,[930, 180]],
        ],
        inview: [100],
        refresh: 45000
      });

      adsmtag.define('def-email-lb3', {
        path: '/5706918/sol.dk_email_dsk_lb3',
        size: [
          [[0, 0],[930, 180]],
        ],
        inview: [100],
        refresh: 45000
      });

      adsmtag.define('def-email-lb4', {
        path: '/5706918/sol.dk_email_dsk_lb4',
        size: [
          [[0, 0],[930, 180]],
        ],
        inview: [100],
        refresh: 45000
      });

      adsmtag.define('def-email-rec1', {
        path: '/5706918/sol.dk_email_dsk_rec1',
        size: [
          [[0, 0],[300, 250]],
        ],
        inview: [100],
        refresh: 45000
      });

      adsmtag.define('def-email-rec2', {
        path: '/5706918/sol.dk_email_dsk_rec2',
        size: [
          [[0, 0],[300, 250]],
        ],
        inview: [100],
        refresh: 45000
      });

      adsmtag.define('def-email-rec3', {
        path: '/5706918/sol.dk_email_dsk_rec3',
        size: [
          [[0, 0],[300, 250]],
        ],
        inview: [100],
        refresh: 45000
      });

      adsmtag.define('def-email-sky1', {
        path: '/5706918/sol.dk_email_dsk_sky1',
        size: [
          [[0, 0],[160, 600]],
        ],
        inview: [100],
        refresh: 45000
      });

      adsmtag.define('def-email-sky2', {
        path: '/5706918/sol.dk_email_dsk_sky2',
        size: [
          [[0, 0],[160, 600]],
        ],
        inview: [100],
        refresh: 45000
      });

      adsmtag.define('def-outstream', {
        path: '/5706918/sol.dk_outstream',
        size: [
          [[0, 0],[1, 1]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.display('cncpt-lb1', 'def-lb1');
      adsmtag.display('cncpt-lb3', 'def-lb3');
      adsmtag.display('cncpt-lb4', 'def-lb4');
      adsmtag.display('cncpt-rec1', 'def-rec1');
      adsmtag.display('cncpt-rec2', 'def-rec2');
      adsmtag.display('cncpt-rec3', 'def-rec3');
      adsmtag.display('cncpt-sky1', 'def-sky1');
      adsmtag.display('cncpt-sky2', 'def-sky2');
      adsmtag.display('cncpt-email-lb1', 'def-email-lb1');
      adsmtag.display('cncpt-email-lb3', 'def-email-lb3');
      adsmtag.display('cncpt-email-lb4', 'def-email-lb4');
      adsmtag.display('cncpt-email-rec1', 'def-email-rec1');
      adsmtag.display('cncpt-email-rec2', 'def-email-rec2');
      adsmtag.display('cncpt-email-rec3', 'def-email-rec3');
      adsmtag.display('cncpt-email-sky1', 'def-email-sky1');
      adsmtag.display('cncpt-email-sky2', 'def-email-sky2');
      adsmtag.display('cncpt-outstream', 'def-outstream');
    });

    adsmtag.cmd = cmd.concat(adsmtag.cmd || []);

    script.load('https:' + '//rmb-adsembler.netdna-ssl.com/mnemonics/adsm.macro.edge.js');
  }
}
macro.bootstrap(config);
