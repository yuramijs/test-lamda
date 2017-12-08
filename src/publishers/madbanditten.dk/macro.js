// var css = require('./mnemonics/css');
// var scripts = require( './mnemonics/scripts');
var macro = require( 'macro');
var script = require( 'core/script');

var config = {
  uuid: '9beed0b6-cadb-41d5-ad8b-b48bf16c9e6f',
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
        path: '/5706918/2017_madbanditten.dk_dsk_lb1_skn',
        size: [
          [[928, 590] ,[[930, 180], [930, 600]]],
          [[0, 0],[]]
        ],
        inview: [100],
        refresh: 0
      });

      adsmtag.define('def-lb3', {
        path: '/5706918/2017_madbanditten.dk_dsk_lb3',
        size: [
          [[756, 590] ,[930, 180]],
          [[0, 0],[]]
        ],
        inview: [100],
        refresh: 0
      });

      adsmtag.define('def-lb3', {
        path: '/5706918/2017_madbanditten.dk_dsk_lb3',
        size: [
          [[756, 590] ,[930, 180]],
          [[0, 0],[]]
        ],
        inview: [100],
        refresh: 0
      });

      adsmtag.define('def-lb4', {
        path: '/5706918/2017_madbanditten.dk_dsk_lb4',
        size: [
          [[756, 590] ,[930, 180]],
          [[0, 0],[]]
        ],
        inview: [100],
        refresh: 0
      });

      adsmtag.define('def-rec1', {
        path: '/5706918/2017_madbanditten.dk_dsk_rec1',
        size: [
          [[928, 590],[300, 250]],
          [[0, 0],[]]
        ],
        inview: [100],
        refresh: 0
      });

      adsmtag.define('def-rec2', {
        path: '/5706918/2017_madbanditten.dk_dsk_rec2',
        size: [
          [[928, 590],[300, 250]],
          [[0, 0],[]]
        ],
        inview: [100],
        refresh: 0
      });

      adsmtag.define('def-sky2', {
        path: '/5706918/2017_madbanditten.dk_dsk_sky2',
        size: [
          [[1290, 590],[160, 600]],
          [[0, 0],[]]
        ],
        inview: [100],
        refresh: 0
      });

      adsmtag.define('def-mob1', {
        path: '/5706918/2017_madbanditten.dk_mob1',
        size: [
          [[737, 0],[]],
          [[0, 0],[[320, 320],[320, 160]]]
        ],
        inview: [100],
        refresh: 0
      });

      adsmtag.define('def-mob2', {
        path: '/5706918/2017_madbanditten.dk_mob2',
        size: [
          [[737, 0],[]],
          [[0, 0],[[320, 320],[320, 160]]]
        ],
        inview: [100],
        refresh: 0
      });

      adsmtag.define('def-mob3', {
        path: '/5706918/2017_madbanditten.dk_mob3',
        size: [
          [[737, 0],[]],
          [[0, 0],[[320, 320],[320, 160]]]
        ],
        inview: [100],
        refresh: 0
      });

      adsmtag.define('def-mob4', {
        path: '/5706918/2017_madbanditten.dk_mob4',
        size: [
          [[737, 0],[]],
          [[0, 0],[[320, 320],[320, 160]]]
        ],
        inview: [100],
        refresh: 0
      });

      adsmtag.define('def-tab-lb1', {
        path: '/5706918/2017_madbanditten.dk_tab_lb1',
        size: [
          [[756, 590] ,[930, 180]],
          [[0, 0],[]]
        ],
        inview: [100],
        refresh: 0
      });

      adsmtag.define('def-outstream', {
        path: '/5706918/2017_madbanditten.dk_outstream',
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
      adsmtag.display('cncpt-sky2', 'def-sky2');
      adsmtag.display('cncpt-mob1', 'def-mob1');
      adsmtag.display('cncpt-mob2', 'def-mob2');
      adsmtag.display('cncpt-mob3', 'def-mob3');
      adsmtag.display('cncpt-mob4', 'def-mob4');
      adsmtag.display('cncpt-tab-lb1', 'def-tab-lb1');
      adsmtag.display('cncpt-outstream', 'def-outstream');
    });

    adsmtag.cmd = cmd.concat(adsmtag.cmd || []);

    script.load('https:' + '//rmb-adsembler.netdna-ssl.com/mnemonics/adsm.macro.edge.js');
  }
}
macro.bootstrap(config);
