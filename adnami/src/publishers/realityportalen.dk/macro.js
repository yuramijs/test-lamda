// var css = require('./mnemonics/css');
// var scripts = require( './mnemonics/scripts');
var macro = require( 'macro');
var script = require( 'core/script');

var config = {
  uuid: '7efebe16-6344-493c-a6c4-4dbdab26d84f',
  default: function() {
    var adsmtag = window.adsmtag = window.adsmtag || {};
    var cmd = [];
    // cmd.push(function () {
    //   scripts.run();
    //   css.run();
    // });
    cmd.push(function () {
      adsmtag.service().setTargeting('entry', 'first');
      adsmtag.define('def-rp-lb1', {
        path: '/5706918/realityportalen_forside_930x180_skn',
        size: [
          [[756, 590] ,[[930, 180], [930, 600]]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-rp-sky1', {
        path: '/5706918/Realityportalen_160x600_R_167671',
        size: [
          [[1290, 590],[[160, 600], [300, 600]]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0,
        dependencies: ['cncpt-rp-lb1']
      });

      adsmtag.define('def-rp-sky2', {
        path: '/5706918/realityportalen_dsk_forside_sky2_blk',
        size: [
          [[1290, 590],[[160, 600], [300, 600]]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0,
        dependencies: ['cncpt-rp-lb1']
      });

      adsmtag.define('def-rp-rec1', {
        path: '/5706918/realityportalen_dsk_forside_rec2',
        size: [
          [[928, 590],[300, 250]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-rp-rec2', {
        path: '/5706918/realityportalen_forside_300x250_BTF_2',
        size: [
          [[928, 590],[300, 250]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-rp-rec3', {
        path: '/5706918/realityportalen_forside_300x250_BTF_3',
        size: [
          [[928, 590],[300, 250]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-rp-mob1', {
        path: '/5706918/Realityportalen_mob_Forside_1',
        size: [
          [[756, 0],[]],
          [[0, 0],[[320, 320],[320, 160]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-rp-mob2', {
        path: '/5706918/Realityportalen_mob_Forside_2',
        size: [
          [[756, 0],[]],
          [[0, 0],[[320, 320],[320, 160]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-rp-mob3', {
        path: '/5706918/Realityportalen_mob_Forside_3',
        size: [
          [[756, 0],[]],
          [[0, 0],[[320, 320],[320, 160]]]
        ],
        inview: [],
        refresh: 0
      });


      adsmtag.define('def-rp-outstream', {
        path: '/5706918/realityportalen.dk_outstream',
        size: [
          [[0, 0],[1, 1]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-herognu-lb1', {
        path: '/5706918/Herognu.dk_STD_930x180_skin_216917',
        size: [
          [[756, 590] ,[[930, 180], [930, 600]]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-herognu-sky1', {
        path: '/5706918/Herognu.dk_STD_160x600_top_L_sticky_blk_216906',
        size: [
          [[1290, 590],[[160, 600], [300, 600]]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0,
        dependencies: ['cncpt-herognu-lb1']
      });

      adsmtag.define('def-herognu-sky2', {
        path: '/5706918/Herognu.dk_STD_160x600_top_R_sticky_blk_216907',
        size: [
          [[1290, 590],[[160, 600], [300, 600]]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0,
        dependencies: ['cncpt-herognu-lb1']
      });

      adsmtag.define('def-herognu-rec1', {
        path: '/5706918/Herognu.dk_STD_300x250_1_dis_216910',
        size: [
          [[928, 590],[300, 250]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-herognu-rec2', {
        path: '/5706918/Herognu.dk_STD_300x250_3_sticky_dis_216912',
        size: [
          [[928, 590],[300, 250]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-herognu-rec3', {
        path: '/5706918/Herognu.dk_STD_300x250_5_dis_216914',
        size: [
          [[928, 590],[300, 250]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-herognu-mob1', {
        path: '/5706918/egmont_herognu.dk_mob1_244312',
        size: [
          [[756, 0],[]],
          [[0, 0],[[320, 320],[320, 160]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-herognu-mob2', {
        path: '/5706918/herognu.dk_mob2',
        size: [
          [[756, 0],[]],
          [[0, 0],[[320, 320],[320, 160]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-herognu-mob3', {
        path: '/5706918/herognu.dk_mob3',
        size: [
          [[756, 0],[]],
          [[0, 0],[[320, 320],[320, 160]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-herognu-outstream', {
        path: '/5706918/herognu.dk_outstream',
        size: [
          [[0, 0],[1, 1]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.display('cncpt-rp-lb1', 'def-rp-lb1');
      adsmtag.display('cncpt-rp-sky1', 'def-rp-sky1');
      adsmtag.display('cncpt-rp-sky2', 'def-rp-sky2');
      adsmtag.display('cncpt-rp-rec1', 'def-rp-rec1');
      adsmtag.display('cncpt-rp-rec2', 'def-rp-rec2');
      adsmtag.display('cncpt-rp-rec3', 'def-rp-rec3');
      adsmtag.display('cncpt-rp-mob1', 'def-rp-mob1');
      adsmtag.display('cncpt-rp-mob2', 'def-rp-mob2');
      adsmtag.display('cncpt-rp-mob3', 'def-rp-mob3');
      adsmtag.display('cncpt-rp-outstream', 'def-rp-outstream');
      adsmtag.display('cncpt-herognu-lb1', 'def-herognu-lb1');
      adsmtag.display('cncpt-herognu-sky1', 'def-herognu-sky1');
      adsmtag.display('cncpt-herognu-sky2', 'def-herognu-sky2');
      adsmtag.display('cncpt-herognu-rec1', 'def-herognu-rec1');
      adsmtag.display('cncpt-herognu-rec2', 'def-herognu-rec2');
      adsmtag.display('cncpt-herognu-rec3', 'def-herognu-rec3');
      adsmtag.display('cncpt-herognu-mob1', 'def-herognu-mob1');
      adsmtag.display('cncpt-herognu-mob2', 'def-herognu-mob2');
      adsmtag.display('cncpt-herognu-mob3', 'def-herognu-mob3');
      adsmtag.display('cncpt-herognu-outstream', 'def-herognu-outstream');
    });

    adsmtag.cmd = cmd.concat(adsmtag.cmd || []);

    script.load('https:' + '//rmb-adsembler.netdna-ssl.com/mnemonics/adsm.macro.edge.js');
  }
}
macro.bootstrap(config);
