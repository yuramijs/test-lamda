var css = require('./mnemonics/css');
// var scripts = require( './mnemonics/scripts');
var macro = require( 'macro');
var script = require( 'core/script');

var config = {
  uuid: '2ff5ddea-9034-463c-a0e5-768a261eaca7',
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
        path: '/5706918/Indkast_dtp_930x180_skn',
        size: [
          [[0, 0] ,[930, 180]]
        ],
        inview: [],
        refresh: 0,
        prebid: {
          'xhb': {
            params: {
              placementId: '11241947'
            }
          }
        },
      });

      adsmtag.define('def-lb3', {
        path: '/5706918/Indkast_desktop_930x180_B',
        size: [
          [[0, 0],[930, 180]]
        ],
        inview: [],
        refresh: 45000,
        prebid: {
          'xhb': {
            params: {
              placementId: '11241947'
            }
          }
        },
      });

      adsmtag.define('def-lb4', {
        path: '/5706918/Indkast.dk_dsk_lb4',
        size: [
          [[0, 0],[[930, 180],[930, 600]]]
        ],
        inview: [],
        refresh: 45000,
        prebid: {
          'xhb': {
            params: {
              placementId: '11241947'
            }
          }
        },
      });

      adsmtag.define('def-lb5', {
        path: '/5706918/Indkast.dk_dsk_lb5',
        size: [
          [[0, 0],[930, 180]]
        ],
        inview: [],
        refresh: 45000,
        prebid: {
          'xhb': {
            params: {
              placementId: '11241947'
            }
          }
        },
      });

      adsmtag.define('def-lb6', {
        path: '/5706918/Indkast.dk_dsk_lb6',
        size: [
          [[0, 0],[930, 180]]
        ],
        inview: [],
        refresh: 45000,
        prebid: {
          'xhb': {
            params: {
              placementId: '11241947'
            }
          }
        },
      });

      adsmtag.define('def-ovl', {
        path: '/5706918/Indkast.dk_ovl',
        size: [
          [[0, 0],[1, 1]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-rec1', {
        path: '/5706918/Indkast_desktop_300x250_T',
        size: [
          [[0, 0],[300, 250]]
        ],
        inview: [],
        refresh: 45000
      });

      adsmtag.define('def-rec2', {
        path: '/5706918/Indkast_desktop_300x250_T2',
        size: [
          [[0, 0],[300, 250]]
        ],
        inview: [],
        refresh: 45000
      });

      adsmtag.define('def-rec3', {
        path: '/5706918/Indkast_desktop_300x250_B1',
        size: [
          [[0, 0],[300, 250]]
        ],
        inview: [],
        refresh: 45000
      });

      adsmtag.define('def-rec4', {
        path: '/5706918/Indkast_desktop_300x250_B2',
        size: [
          [[0, 0],[300, 250]]
        ],
        inview: [],
        refresh: 45000
      });

      adsmtag.define('def-rec5', {
        path: '/5706918/Indkast_desktop_300x250_B3',
        size: [
          [[0, 0],[300, 250]]
        ],
        inview: [],
        refresh: 45000
      });

      adsmtag.define('def-rec6', {
        path: '/5706918/Indkast_desktop_300x250_B4',
        size: [
          [[0, 0],[300, 250]]
        ],
        inview: [],
        refresh: 45000
      });

      adsmtag.define('def-sky1', {
        path: '/5706918/Indkast_dtp_160x600_L_blk_sticky',
        size: [
          [[0, 0],[[160, 600],[300, 600]]]
        ],
        inview: [],
        refresh: 0,
        dependencies: ['cncpt-lb1_skn'],
        prebid: {
          'xhb': {
            params: {
              placementId: '11241946'
            }
          }
        },
      });

      adsmtag.define('def-sky2', {
        path: '/5706918/Indkast_dtp_160x600_R_blk_sticky',
        size: [
          [[0, 0],[[160, 600],[300, 600]]]
        ],
        inview: [],
        refresh: 0,
        dependencies: ['cncpt-lb1_skn'],
        prebid: {
          'xhb': {
            params: {
              placementId: '11241946'
            }
          }
        },
      });

      adsmtag.define('def-sky3', {
        path: '/5706918/Indkast_dtp_160x600_BTF_L_blk_210258',
        size: [
          [[0, 0],[160, 600]]
        ],
        inview: [],
        refresh: 0,
        prebid: {
          'xhb': {
            params: {
              placementId: '11241946'
            }
          }
        },
      });

      adsmtag.define('def-sky4', {
        path: '/5706918/Indkast_dtp_160x600_BTF_R_blk_210259',
        size: [
          [[0, 0],[[160, 600],[300, 600]]]
        ],
        inview: [],
        refresh: 0,
        prebid: {
          'xhb': {
            params: {
              placementId: '11241946'
            }
          }
        },
      });

      adsmtag.define('def-sky5', {
        path: '/5706918/Indkast_dtp_160x600_5_dis_210260',
        size: [
          [[0, 0],[[160, 600],[300, 600]]]
        ],
        inview: [],
        refresh: 0,
        prebid: {
          'xhb': {
            params: {
              placementId: '11241946'
            }
          }
        },
      });

      adsmtag.define('def-outstream', {
        path: '/5706918/Indkast_dsk_outstream',
        size: [
          [[0, 0],[1, 1]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-tab-rec1', {
        path: '/5706918/Indkast_300x250_tablet_BTF1',
        size: [
          [[0, 0],[300, 250]]
        ],
        inview: [],
        refresh: 45000
      });

      adsmtag.define('def-tab-rec2', {
        path: '/5706918/Indkast_300x250_tablet_BTF2',
        size: [
          [[0, 0],[300, 250]]
        ],
        inview: [],
        refresh: 45000
      });

      adsmtag.define('def-tab-rec3', {
        path: '/5706918/Indkast_300x250_tablet_BTF3',
        size: [
          [[0, 0],[300, 250]]
        ],
        inview: [],
        refresh: 45000
      });

      adsmtag.define('def-tab-rec4', {
        path: '/5706918/Indkast_300x250_tablet_BTF4',
        size: [
          [[0, 0],[300, 250]]
        ],
        inview: [],
        refresh: 45000
      });

      adsmtag.define('def-tab-rec5', {
        path: '/5706918/Indkast_300x250_tablet_BTF5',
        size: [
          [[0, 0],[300, 250]]
        ],
        inview: [],
        refresh: 45000
      });

      adsmtag.define('def-tab-rec6', {
        path: '/5706918/Indkast_300x250_tablet_BTF6',
        size: [
          [[0, 0],[300, 250]]
        ],
        inview: [],
        refresh: 45000
      });


      adsmtag.define('def-mob1', {
        path: '/5706918/Indkast.dk_mob1_320x160',
        size: [
          [[0, 0],[[320, 320],[320, 160]]]
        ],
        inview: [],
        refresh: 45000,
        prebid: {
          'xhb': {
            params: {
              placementId: '11241948'
            }
          }
        },
      });

      adsmtag.define('def-mob2', {
        path: '/5706918/Indkast_mobil_300x250_BTF1',
        size: [
          [[0, 0],[[320, 320],[320, 160]]]
        ],
        inview: [],
        refresh: 45000,
        prebid: {
          'xhb': {
            params: {
              placementId: '11241948'
            }
          }
        },
      });

      adsmtag.define('def-mob3', {
        path: '/5706918/Indkast_mobil_300x250_BTF2',
        size: [
          [[0, 0],[[320, 320],[320, 160]]]
        ],
        inview: [],
        refresh: 45000,
        prebid: {
          'xhb': {
            params: {
              placementId: '11241948'
            }
          }
        },
      });

      adsmtag.define('def-mob4', {
        path: '/5706918/Indkast_mobil_300x250_BTF3',
        size: [
          [[0, 0],[[320, 320],[320, 160]]]
        ],
        inview: [],
        refresh: 45000,
        prebid: {
          'xhb': {
            params: {
              placementId: '11241948'
            }
          }
        },
      });

      adsmtag.define('def-mob5', {
        path: '/5706918/Indkast_mobil_300x250_BTF4',
        size: [
          [[0, 0],[[320, 320],[320, 160]]]
        ],
        inview: [],
        refresh: 45000,
        prebid: {
          'xhb': {
            params: {
              placementId: '11241948'
            }
          }
        },
      });

      adsmtag.define('def-mob6', {
        path: '/5706918/Indkast_mobil_300x250_BTF5',
        size: [
          [[0, 0],[[320, 320],[320, 160]]]
        ],
        inview: [],
        refresh: 45000,
        prebid: {
          'xhb': {
            params: {
              placementId: '11241948'
            }
          }
        },
      });

      adsmtag.define('def-mob7', {
        path: '/5706918/ndkast_mobil_300x250_BTF6',
        size: [
          [[0, 0],[[320, 320],[320, 160]]]
        ],
        inview: [],
        refresh: 45000,
        prebid: {
          'xhb': {
            params: {
              placementId: '11241948'
            }
          }
        },
      });

      adsmtag.define('def-mob8', {
        path: '/5706918/Indkast_mobil_300x250_BTF7',
        size: [
          [[0, 0],[[320, 320],[320, 160]]]
        ],
        inview: [],
        refresh: 45000,
        prebid: {
          'xhb': {
            params: {
              placementId: '11241948'
            }
          }
        },
      });

      adsmtag.define('def-mob9', {
        path: '/5706918/Indkast.dk_mob9',
        size: [
          [[0, 0],[[320, 320],[320, 160]]]
        ],
        inview: [],
        refresh: 45000,
        prebid: {
          'xhb': {
            params: {
              placementId: '11241948'
            }
          }
        },
      });

      adsmtag.define('def-mob10', {
        path: '/5706918/Indkast.dk_mob10',
        size: [
          [[0, 0],[[320, 320],[320, 160]]]
        ],
        inview: [],
        refresh: 45000
      });

      adsmtag.define('def-mob11', {
        path: '/5706918/Indkast.dk_mob11',
        size: [
          [[0, 0],[[320, 320],[320, 160]]]
        ],
        inview: [],
        refresh: 45000
      });

      adsmtag.define('def-mob_outstream', {
        path: '/5706918/Indkast.dk_mob_outstream',
        size: [
          [[0, 0],[1, 1]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.display('cncpt-lb1_skn', 'def-lb1');
      adsmtag.display('cncpt-lb3', 'def-lb3');
      adsmtag.display('cncpt-lb4_meg', 'def-lb4');
      adsmtag.display('cncpt-lb5', 'def-lb5');
      adsmtag.display('cncpt-lb6', 'def-lb6');
      adsmtag.display('cncpt-ovl', 'def-ovl');
      adsmtag.display('cncpt_rec1', 'def-rec1');
      adsmtag.display('cncpt_rec2', 'def-rec2');
      adsmtag.display('cncpt-rec3', 'def-rec3');
      adsmtag.display('cncpt_rec4', 'def-rec4');
      adsmtag.display('cncpt_rec5', 'def-rec5');
      adsmtag.display('cncpt-rec6', 'def-rec6');
      adsmtag.display('cncpt-sky1', 'def-sky1');
      adsmtag.display('cncpt-sky2', 'def-sky2');
      adsmtag.display('cncpt_sky3', 'def-sky3');
      adsmtag.display('cncpt-sky4', 'def-sky4');
      adsmtag.display('cncpt_sky5', 'def-sky5');
      adsmtag.display('cncpt-outstream', 'def-outstream');
      adsmtag.display('cncpt-tab_rec1', 'def-tab-rec1');
      adsmtag.display('cncpt-tab_rec2', 'def-tab-rec2');
      adsmtag.display('cncpt-tab_rec3', 'def-tab-rec3');
      adsmtag.display('cncpt-tab_rec4', 'def-tab-rec4');
      adsmtag.display('cncpt-tab_rec5', 'def-tab-rec5');
      adsmtag.display('cncpt-tab_rec6', 'def-tab-rec6');
      adsmtag.display('cncpt-mob1', 'def-mob1');
      adsmtag.display('cncpt-mob2', 'def-mob2');
      adsmtag.display('cncpt-mob3', 'def-mob3');
      adsmtag.display('cncpt-mob4', 'def-mob4');
      adsmtag.display('cncpt-mob5', 'def-mob5');
      adsmtag.display('cncpt-mob6', 'def-mob6');
      adsmtag.display('cncpt-mob7', 'def-mob7');
      adsmtag.display('cncpt-mob8', 'def-mob8');
      adsmtag.display('cncpt-mob9', 'def-mob9');
      adsmtag.display('cncpt-mob10', 'def-mob10');
      adsmtag.display('cncpt-mob11', 'def-mob11');
      adsmtag.display('cncpt-mob_outstream', 'def-mob_outstream');
    });

    adsmtag.cmd = cmd.concat(adsmtag.cmd || []);

    script.load('https:' + '//rmb-adsembler.netdna-ssl.com/mnemonics/adsm.macro.prebid.js');
  }
}
macro.bootstrap(config);