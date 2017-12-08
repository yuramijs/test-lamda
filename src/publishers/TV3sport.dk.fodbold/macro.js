// var css = require('./mnemonics/css');
// var scripts = require( './mnemonics/scripts');
var macro = require( 'macro');
var script = require( 'core/script');

var config = {
  uuid: 'edbaff59-c1e6-441e-90ac-0d88eb07b4b0',
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
        path: '/5706918/tv3sport.dk_fodb_dsk_lb1_241122',
        size: [
          [[928, 590] ,[930, 180]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-rec1', {
        path: '/5706918/tv3sport.dk_fodb_dsk_rec1_241125',
        size: [
          [[928, 590],[300, 250]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-tab-lb1', {
        path: '/5706918/tv3sport.dk_fodb_tab_lb1',
        size: [
          [[737, 590],[930, 180]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-tab-rec1', {
        path: '/5706918/tv3sport.dk_fodb_tab_rec1_241133',
        size: [
          [[737, 590],[]],
          [[0, 0],[300, 250]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-mob1', {
        path: '/5706918/tv3sport.dk_fodb_mob1_241127',
        size: [
          [[737, 0],[]],
          [[0, 0],[[320, 320],[320, 160]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-mob2', {
        path: '/5706918/tv3sport.dk_fodb_mob2_241128',
        size: [
          [[737, 0],[]],
          [[0, 0],[[320, 320],[320, 160]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.display('cncpt-lb1', 'def-lb1');
      adsmtag.display('cncpt_rec1', 'def-rec1');
      adsmtag.display('cncpt-tab-lb1', 'def-tab-lb1');
      adsmtag.display('cncpt-tab_rec1', 'def-tab-rec1');
      adsmtag.display('cncpt-mob1', 'def-mob1');
      adsmtag.display('cncpt-mob2', 'def-mob2');
    });

    adsmtag.cmd = cmd.concat(adsmtag.cmd || []);

    script.load('https:' + '//rmb-adsembler.netdna-ssl.com/mnemonics/adsm.macro.edge.js');
  }
}
macro.bootstrap(config);
