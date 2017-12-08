var css = require('./mnemonics/css');
var scripts = require( './mnemonics/scripts');
var macro = require( 'macro');
var script = require( 'core/script');

var config = {
  uuid: 'fa81bb5f-3c7b-4cbd-8538-de29282d9b3b',
  default: function() {
    var adsmtag = window.adsmtag = window.adsmtag || {};
    var cmd = [];
    cmd.push(function () {
      scripts.run();
      css.run();
    });
    cmd.push(function () {
      adsmtag.service().setTargeting('entry', 'first');
      adsmtag.define('def-lb1', {
        path: '/5706918/nordicadpartner_hockeymagasinet.dk_dsk_lb1_245154',
        size: [
          [[737, 600],[[ 930, 180],[930, 600]]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-rec3', {
        path: '/5706918/nordicadpartner_hockeymagasinet.dk_dsk_rec3_300x600_245156',
        size: [
          [[928, 590],[[300, 250],[300, 600]]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-sky1', {
        path: '/5706918/nordicadpartner_hockeymagasinet.dk_dsk_sky1_245157',
        size: [
          [[1290, 590],[160, 600]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0,
        dependencies: ['cncpt-lb1']
      });

      adsmtag.define('def-sky2', {
        path: '/5706918/nordicadpartner_hockeymagasinet.dk_dsk_sky2_245158',
        size: [
          [[1290, 590],[[160, 600],[300, 600]]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0,
        dependencies: ['cncpt-lb1']
      });

      adsmtag.define('def-sky3', {
        path: '/5706918/nordicadpartner_hockeymagasinet.dk_dsk_sky3_245159',
        size: [
          [[928, 590],[160, 600]],
          [[0, 0],[]]
        ],
        inview: [100],
        refresh: 45000
      });

      adsmtag.define('def-sky4', {
        path: '/5706918/nordicadpartner_hockeymagasinet.dk_dsk_sky4_245160',
        size: [
          [[928, 590],[160, 600]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-tab_rec3', {
        path: '/5706918/nordicadpartner_hockeymagasinet.dk_tab_rec3_300x600_245165',
        size: [
          [[1025, 590],[]],
          [[737, 590],[[300, 250],[300, 600]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-tab_sky1', {
        path: '/5706918/nordicadpartner_hockeymagasinet.dk_tab_sky1_245166',
        size: [
          [[1025, 590],[]],
          [[737, 590],[160, 600]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-tab_sky2', {
        path: '/5706918/nordicadpartner_hockeymagasinet.dk_tab_sky2_300x600_245167',
        size: [
          [[1025, 590],[]],
          [[737, 590],[160, 600]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-tab_sky3', {
        path: '/5706918/nordicadpartner_hockeymagasinet.dk_tab_sky3_245168',
        size: [
          [[1025, 590],[]],
          [[737, 590],[160, 600]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-mob1', {
        path: '/5706918/nordicadpartner_hockeymagasinet.dk_mob1_245161',
        size: [
          [[737, 0],[]],
          [[0, 0],[[320, 320],[320, 160]]]
        ],
        inview: [100],
        refresh: 45000
      });

      adsmtag.define('def-mob2', {
        path: '/5706918/nordicadpartner_hockeymagasinet.dk_mob2_245162',
        size: [
          [[737, 0],[]],
          [[0, 0],[[320, 320],[320, 160]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-mob3', {
        path: '/5706918/nordicadpartner_hockeymagasinet.dk_mob3_245163',
        size: [
          [[737, 0],[]],
          [[0, 0],[[320, 320],[320, 160]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-outstream', {
        path: '/5706918/Hockeymagasinet.dk_outstream',
        size: [
          [[0, 0],[1, 1]]
        ],
        inview: [],
        refresh: 0
      });


      adsmtag.define('def-lb2', {
        path: '/5706918/sportensverden_hockeymagasinet.dk_dsk_lb2_meg_253645',
        size: [
          [[737, 590],[[ 930, 180],[930, 600]]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-rec1', {
        path: '/5706918/sportensverden_hockeymagasinet.dk_dsk_rec1_253372',
        size: [
          [[928, 590],[[300, 250],[300, 600]]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-rec2', {
        path: '/5706918/sportensverden_hockeymagasinet.dk_dsk_rec2_253374',
        size: [
          [[928, 590],[[300, 250],[300, 600]]],
          [[0, 0],[]]
        ],
        inview: [100],
        refresh: 45000
      });

      adsmtag.define('def-rec4', {
        path: '/5706918/sportensverden_hockeymagasinet.dk_dsk_rec4_253376',
        size: [
          [[928, 590],[300, 250]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-rec5', {
        path: '/5706918/sportensverden_hockeymagasinet.dk_dsk_rec5_253646',
        size: [
          [[928, 590],[300, 250]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-rec6', {
        path: '/5706918/sportensverden_hockeymagasinet.dk_dsk_rec6_253647',
        size: [
          [[928, 590],[300, 250]],
          [[0, 0],[]]
        ],
        inview: [100],
        refresh: 45000
      });

      adsmtag.define('def-rec7', {
        path: '/5706918/sportensverden_hockeymagasinet.dk_dsk_rec7_253648',
        size: [
          [[928, 590],[300, 250]],
          [[0, 0],[]]
        ],
        inview: [100],
        refresh: 45000
      });

      adsmtag.define('def-rec8', {
        path: '/5706918/sportensverden_hockeymagasinet.dk_dsk_rec8_253649',
        size: [
          [[928, 590],[300, 250]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-rec9', {
        path: '/5706918/sportensverden_hockeymagasinet.dk_dsk_rec9_253650',
        size: [
          [[928, 590],[300, 250]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-tab_sky4', {
        path: '/5706918/sportensverden_hockeymagasinet.dk_tab_sky4_253652',
        size: [
          [[1025, 590],[]],
          [[737, 590],[160, 600]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-tab_sky5', {
        path: '/5706918/sportensverden_hockeymagasinet.dk_tab_sky5_253653',
        size: [
          [[1025, 590],[]],
          [[737, 590],[160, 600]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-tab_sky6', {
        path: '/5706918/sportensverden_hockeymagasinet.dk_tab_sky6_253654',
        size: [
          [[1025, 590],[]],
          [[737, 590],[160, 600]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-tab_rec1', {
        path: '/5706918/sportensverden_hockeymagasinet.dk_tab_rec1_253655',
        size: [
          [[1025, 590],[]],
          [[737, 590],[[300, 250],[300, 600]]]
        ],
        inview: [],
        refresh: 0
      });
      adsmtag.define('def-tab_rec2', {
        path: '/5706918/sportensverden_hockeymagasinet.dk_tab_rec2_253383',
        size: [
          [[1025, 590],[]],
          [[737, 590],[[300, 250],[300, 600]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-tab_rec4', {
        path: '/5706918/sportensverden_hockeymagasinet.dk_tab_rec4_253657',
        size: [
          [[1025, 590],[]],
          [[737, 590],[[300, 250],[300, 600]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-tab_rec5', {
        path: '/5706918/sportensverden_hockeymagasinet.dk_tab_rec5_253658',
        size: [
          [[1025, 590],[]],
          [[737, 590],[[300, 250],[300, 600]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-tab_rec6', {
        path: '/5706918/sportensverden_hockeymagasinet.dk_tab_rec6_253659',
        size: [
          [[1025, 590],[]],
          [[737, 590],[[300, 250],[300, 600]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-tab_rec7', {
        path: '/5706918/sportensverden_hockeymagasinet.dk_tab_rec7_253660',
        size: [
          [[1025, 590],[]],
          [[737, 590],[[300, 250],[300, 600]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-tab_rec8', {
        path: '/5706918/sportensverden_hockeymagasinet.dk_tab_rec8_253661',
        size: [
          [[1025, 590],[]],
          [[737, 590],[[300, 250],[300, 600]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-tab_rec9', {
        path: '/5706918/sportensverden_hockeymagasinet.dk_tab_rec9_253662',
        size: [
          [[1025, 590],[]],
          [[737, 590],[[300, 250],[300, 600]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-mob4', {
        path: '/5706918/sportensverden_hockeymagasinet.dk_mob4_253664',
        size: [
          [[737, 0],[]],
          [[0, 0],[[320, 320],[320, 160]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-sky5', {
        path: '/5706918/SPV_hockeymagasinet.dk_dsk_sky5',
        size: [
          [[928, 590],[160, 600]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-sky6', {
        path: '/5706918/SPV_hockeymagasinet.dk_dsk_sky6',
        size: [
          [[928, 590],[160, 600]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-sky6', {
        path: '/5706918/SPV_hockeymagasinet.dk_dsk_sky6',
        size: [
          [[928, 590],[160, 600]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-mob5', {
        path: '/5706918/SPV_hockeymagasinet.dk_mob5',
        size: [
          [[737, 0],[]],
          [[0, 0],[[320, 320],[320, 160]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-mob6', {
        path: '/5706918/SPV_hockeymagasinet.dk_mob6',
        size: [
          [[737, 0],[]],
          [[0, 0],[[320, 320],[320, 160]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.display('cncpt-lb1', 'def-lb1');

      adsmtag.display('cncpt-sky1', 'def-sky1');

      adsmtag.display('cncpt-sky2', 'def-sky2');

      adsmtag.display('cncpt-sky3', 'def-sky3');

      adsmtag.display('cncpt-sky4', 'def-sky4');

      adsmtag.display('cncpt-rec3', 'def-rec3');

      adsmtag.display('cncpt-tab_rec3', 'def-tab_rec3');

      adsmtag.display('cncpt-tab_sky1', 'def-tab_sky1');

      adsmtag.display('cncpt-tab_sky2', 'def-tab_sky2');

      adsmtag.display('cncpt-tab_sky3', 'def-tab_sky3');

      adsmtag.display('cncpt-mob1', 'def-mob1');

      adsmtag.display('cncpt-mob2', 'def-mob2');

      adsmtag.display('cncpt-mob3', 'def-mob3');

      adsmtag.display('cncpt-outstream', 'def-outstream');

      adsmtag.display('cncpt-lb2', 'def-lb2');

      adsmtag.display('cncpt-rec1', 'def-rec1');

      adsmtag.display('cncpt-rec2', 'def-rec2');

      adsmtag.display('cncpt-rec4', 'def-rec4');

      adsmtag.display('cncpt-rec5', 'def-rec5');

      adsmtag.display('cncpt-rec6', 'def-rec6');

      adsmtag.display('cncpt-rec7', 'def-rec7');

      adsmtag.display('cncpt-rec8', 'def-rec8');

      adsmtag.display('cncpt-rec9', 'def-rec9');

      adsmtag.display('cncpt-tab_sky4', 'def-tab_sky4');

      adsmtag.display('cncpt-tab_sky5', 'def-tab_sky5');

      adsmtag.display('cncpt-tab_sky6', 'def-tab_sky6');

      adsmtag.display('cncpt-tab_rec1', 'def-tab_rec1');

      adsmtag.display('cncpt-tab_rec2', 'def-tab_rec2');

      adsmtag.display('cncpt-tab_rec4', 'def-tab_rec4');

      adsmtag.display('cncpt-tab_rec5', 'def-tab_rec5');

      adsmtag.display('cncpt-tab_rec6', 'def-tab_rec6');

      adsmtag.display('cncpt-tab_rec7', 'def-tab_rec7');

      adsmtag.display('cncpt-tab_rec8', 'def-tab_rec8');

      adsmtag.display('cncpt-tab_rec9', 'def-tab_rec9');

      adsmtag.display('cncpt-mob4', 'def-mob4');

      adsmtag.display('cncpt-sky5', 'def-sky5');

      adsmtag.display('cncpt-sky6', 'def-sky6');

      adsmtag.display('cncpt-mob5', 'def-mob5');

      adsmtag.display('cncpt-mob6', 'def-mob6');
    });

    adsmtag.cmd = cmd.concat(adsmtag.cmd || []);

    script.load('https:' + '//rmb-adsembler.netdna-ssl.com/mnemonics/adsm.macro.edge.js');
  }
}
macro.bootstrap(config);
