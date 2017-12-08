// var css = require('./mnemonics/css');
// var scripts = require( './mnemonics/scripts');
var macro = require( 'macro');
var script = require( 'core/script');

var config = {
  uuid: 'd0b31b8c-0368-4373-a835-8186d79f7979',
  default: function() {
    var adsmtag = window.adsmtag = window.adsmtag || {};
    var cmd = [];
    // cmd.push(function () {
    //   scripts.run();
    //   css.run();
    // });
    cmd.push(function () {
      adsmtag.service().setTargeting('entry', 'first');
      adsmtag.define('def-onblog-lb1', {
        path: '/5706918/onblog.dk_dsk_lb1',
        size: [
          [[737, 590],[930, 180]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-onblog-lb2', {
        path: '/5706918/onblog.dk_dsk_lb2',
        size: [
          [[737, 590],[930, 180]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-onblog-lb3', {
        path: '/5706918/onblog.dk_dsk_lb3',
        size: [
          [[737, 590],[930, 180]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-onblog-lb4', {
        path: '/5706918/onblog.dk_dsk_lb4',
        size: [
          [[737, 590],[930, 180]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-onblog-lb5', {
        path: '/5706918/onblog.dk_dsk_lb5',
        size: [
          [[737, 590],[930, 180]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-onblog-lb6', {
        path: '/5706918/onblog.dk_dsk_lb6',
        size: [
          [[737, 590],[930, 180]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-onblog-mob1', {
        path: '/5706918/onblog.dk_mob1',
        size: [
          [[0, 0],[[320, 320],[320, 160]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-onblog-mob2', {
        path: '/5706918/onblog.dk_mob2',
        size: [
          [[0, 0],[[320, 320],[320, 160]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-onblog-mob3', {
        path: '/5706918/onblog.dk_mob3',
        size: [
          [[0, 0],[[320, 320],[320, 160]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-onblog-mob4', {
        path: '/5706918/onblog.dk_mob4',
        size: [
          [[0, 0],[[320, 320],[320, 160]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-onblog-mob5', {
        path: '/5706918/onblog.dk_mob5',
        size: [
          [[0, 0],[[320, 320],[320, 160]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-onblog-mob6', {
        path: '/5706918/onblog.dk_mob6',
        size: [
          [[0, 0],[[320, 320],[320, 160]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-seduc-lb1', {
        path: '/5706918/seduc.dk_dsk_lb1',
        size: [
          [[737, 590],[930, 180]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-seduc-mob1', {
        path: '/5706918/seduc.dk_mob1',
        size: [
          [[0, 0],[[320, 320],[320, 160]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.display('cncpt-onblog-lb1', 'def-onblog-lb1');
      adsmtag.display('cncpt-onblog-lb2', 'def-onblog-lb2');
      adsmtag.display('cncpt-onblog-lb3', 'def-onblog-lb3');
      adsmtag.display('cncpt-onblog-lb4', 'def-onblog-lb4');
      adsmtag.display('cncpt-onblog-lb5', 'def-onblog-lb5');
      adsmtag.display('cncpt-onblog-lb6', 'def-onblog-lb6');
      adsmtag.display('cncpt-onblog-mob1', 'def-onblog-mob1');
      adsmtag.display('cncpt-onblog-mob2', 'def-onblog-mob2');
      adsmtag.display('cncpt-onblog-mob3', 'def-onblog-mob3');
      adsmtag.display('cncpt-onblog-mob4', 'def-onblog-mob4');
      adsmtag.display('cncpt-onblog-mob5', 'def-onblog-mob5');
      adsmtag.display('cncpt-onblog-mob6', 'def-onblog-mob6');
      adsmtag.display('cncpt-seduc-lb1', 'def-seduc-lb1');
      adsmtag.display('cncpt-seduc-mob1', 'def-seduc-mob1');
    });

    adsmtag.cmd = cmd.concat(adsmtag.cmd || []);

    script.load('https:' + '//rmb-adsembler.netdna-ssl.com/mnemonics/adsm.macro.edge.js');
  }
}
macro.bootstrap(config);
