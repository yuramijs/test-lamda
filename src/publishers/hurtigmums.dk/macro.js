// var css = require('./mnemonics/css');
// var scripts = require( './mnemonics/scripts');
var macro = require( 'macro');
var script = require( 'core/script');

var config = {
  uuid: '4acce6f8-b9b2-434f-9d9d-ebb42abe8c48',
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
        path: '/5706918/2017_hurtigmums.dk_dsk_lb1_skn',
        size: [
          [[928, 590], [[930, 180], [930, 600]]],
          [[0, 0], []]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-lb2', {
        path: '/5706918/2017_hurtigmums.dk_dsk_lb2_meg',
        size: [
          [[928, 590], [[930, 180], [930, 600]]],
          [[0, 0], []]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-lb3', {
        path: '/5706918/2017_hurtigmums.dk_dsk_lb3',
        size: [
          [[928, 590], [[930, 180], [930, 600]]],
          [[0, 0], []]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-rec1', {
        path: '/5706918/2017_hurtigmums.dk_dsk_rec1',
        size: [
          [[928, 590], [300, 250]],
          [[0, 0], []]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-rec2', {
        path: '/5706918/2017_hurtigmums.dk_dsk_rec2',
        size: [
          [[928, 590], [300, 250]],
          [[0, 0], []]
        ],
        inview: [],
        refresh: 0
      });


      adsmtag.define('def-outstream', {
        path: '/5706918/2017_hurtigmums.dk_dsk_outstream',
        size: [
          [[0, 0], [1, 1]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-tab-lb1', {
        path: '/5706918/2017_hurtigmums.dk_tab_lb1',
        size: [
          [[728, 590], [[930, 180], [930, 600]]],
          [[0, 0], []]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-tab-lb2', {
        path: '/5706918/2017_hurtigmums.dk_tab_lb2_meg',
        size: [
          [[728, 590], [[930, 180], [930, 600]]],
          [[0, 0], []]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-tab-lb3', {
        path: '/5706918/2017_hurtigmums.dk_tab_lb3',
        size: [
          [[728, 590], [[930, 180], [930, 600]]],
          [[0, 0], []]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-mob1', {
        path: '/5706918/2017_hurtigmums.dk_mob1',
        size: [
          [[737, 0], []],
          [[0, 0], [[320, 320], [320, 160]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-mob2', {
        path: '/5706918/2017_hurtigmums.dk_mob2',
        size: [
          [[737, 0], []],
          [[0, 0], [[320, 320], [320, 160]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-mob3', {
        path: '/5706918/2017_hurtigmums.dk_mob3',
        size: [
          [[737, 0], []],
          [[0, 0], [[320, 320], [320, 160]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-mob4', {
        path: '/5706918/2017_hurtigmums.dk_mob4',
        size: [
          [[737, 0], []],
          [[0, 0], [[320, 320], [320, 160]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.display('cncpt-lb1', 'def-lb1');

      adsmtag.display('cncpt-lb2', 'def-lb2');

      adsmtag.display('cncpt-lb3', 'def-lb3');

      adsmtag.display('cncpt-rec1', 'def-rec1');

      adsmtag.display('cncpt-rec2', 'def-rec2');

      adsmtag.display('cncpt-outstream', 'def-outstream');

      adsmtag.display('cncpt-tab-lb1', 'def-tab-lb1');

      adsmtag.display('cncpt-tab-lb2', 'def-tab-lb2');

      adsmtag.display('cncpt-tab-lb3', 'def-tab-lb3');

      adsmtag.display('cncpt-mob1', 'def-mob1');

      adsmtag.display('cncpt-mob2', 'def-mob2');

      adsmtag.display('cncpt-mob3', 'def-mob3');
    });

    adsmtag.cmd = cmd.concat(adsmtag.cmd || []);

    script.load('https:' + '//rmb-adsembler.netdna-ssl.com/mnemonics/adsm.macro.edge.js');
  }
}
macro.bootstrap(config);
