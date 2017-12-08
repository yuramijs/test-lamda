// var css = require('./mnemonics/css');
// var scripts = require( './mnemonics/scripts');
var macro = require( 'macro');
var script = require( 'core/script');

var config = {
  uuid: '90c9bb61-7eb8-47e3-b1e3-ec15eba21279',
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
        path: '/5706918/tv3.dk_dsk_lb1_skn_238397',
        size: [
          [[928, 590] ,[930, 180]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });


      adsmtag.define('def-rec1', {
        path: '/5706918/tv3.dk_dsk_rec1_238398',
        size: [
          [[928, 590],[300, 250]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-rec2', {
        path: '/5706918/tv3.dk_dsk_rec2_238399',
        size: [
          [[928, 590],[300, 250]],
          [[0, 0],[]]
        ],
        inview: [100],
        refresh: 0
      });

      adsmtag.define('def-rec3', {
        path: '/5706918/tv3.dk_dsk_rec3_238400',
        size: [
          [[928, 590],[300, 250]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-tab-lb1', {
        path: '/5706918/juicyplay.dk_tab_lb1',
        size: [
          [[737, 590],[930, 180]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-tab-rec1', {
        path: '/5706918/tv3.dk_tab_rec1_238406',
        size: [
          [[737, 0],[300, 250]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-tab-rec2', {
        path: '/5706918/tv3.dk_tab_rec2_238407',
        size: [
          [[737, 0],[300, 250]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-tab-rec3', {
        path: '/5706918/tv3.dk_tab_rec3_238408',
        size: [
          [[737, 0],[300, 250]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-mob1', {
        path: '/5706918/tv3.dk_mob1_238401',
        size: [
          [[737, 0],[]],
          [[0, 0],[[320, 320],[320, 160]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-mob2', {
        path: '/5706918/tv3.dk_mob2_238402',
        size: [
          [[737, 0],[]],
          [[0, 0],[[320, 320],[320, 160]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-mob3', {
        path: '/5706918/tv3.dk_mob3_238403',
        size: [
          [[737, 0],[]],
          [[0, 0],[[320, 320],[320, 160]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-mob4', {
        path: '/5706918/tv3.dk_mob4_238404',
        size: [
          [[737, 0],[]],
          [[0, 0],[[320, 320],[320, 160]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.display('cncpt-lb1', 'def-lb1');
      adsmtag.display('cncpt_rec1', 'def-rec1');
      adsmtag.display('cncpt_rec2', 'def-rec2');
      adsmtag.display('cncpt-rec3', 'def-rec3');
      adsmtag.display('cncpt-tab-lb1', 'def-tab-lb1');
      adsmtag.display('cncpt-tab_rec1', 'def-tab-rec1');
      adsmtag.display('cncpt-tab_rec2', 'def-tab-rec2');
      adsmtag.display('cncpt-tab_rec3', 'def-tab-rec3');
      adsmtag.display('cncpt-mob1', 'def-mob1');
      adsmtag.display('cncpt-mob2', 'def-mob2');
      adsmtag.display('cncpt-mob3', 'def-mob3');
      adsmtag.display('cncpt-mob4', 'def-mob4');
    });

    adsmtag.cmd = cmd.concat(adsmtag.cmd || []);

    script.load('https:' + '//rmb-adsembler.netdna-ssl.com/mnemonics/adsm.macro.edge.js');
  }
}
macro.bootstrap(config);
