var css = require('./mnemonics/css');
// var scripts = require( './mnemonics/scripts');
var macro = require( 'macro');
var script = require( 'core/script');

var config = {
  uuid: '23a66897-57bd-4224-8d71-13c6c26e88f4',
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
        path: '/5706918/juliekarla.dk_dsk_lb1',
        size: [
          [[737, 590] ,[930, 180]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-rec1', {
        path: '/5706918/juliekarla.dk_dsk_rec1',
        size: [
          [[928, 590],[[300, 250],[300, 600]]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-rec2', {
        path: '/5706918/juliekarla.dk_dsk_rec2',
        size: [
          [[928, 590],[[300, 250],[300, 600]]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-rec3', {
        path: '/5706918/juliekarla.dk_dsk_rec3',
        size: [
          [[928, 590],[[300, 250],[300, 600]]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-rec4', {
        path: '/5706918/juliekarla.dk_dsk_rec4',
        size: [
          [[928, 590],[[300, 250],[300, 600]]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-rec5', {
        path: '/5706918/juliekarla.dk_dsk_rec5',
        size: [
          [[928, 590],[[300, 250],[300, 600]]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-rec6', {
        path: '/5706918/juliekarla.dk_dsk_rec6',
        size: [
          [[928, 590],[[300, 250],[300, 600]]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-sky1', {
        path: '/5706918/juliekarla.dk_dsk_sky1',
        size: [
          [[1290, 590],[160, 600]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });


      adsmtag.define('def-sky2', {
        path: '/5706918/juliekarla.dk_dsk_sky2',
        size: [
          [[1290, 590],[160, 600]],
          [[0, 0],[]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-mob1', {
        path: '/5706918/juliekarla.dk_mob1',
        size: [
          [[737, 0],[]],
          [[0, 0],[[320, 320],[320, 160]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-mob2', {
        path: '/5706918/juliekarla.dk_mob2',
        size: [
          [[737, 0],[]],
          [[0, 0],[[320, 320],[320, 160]]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.display('cncpt-lb1', 'def-lb1');

      adsmtag.display('cncpt-dsk_rec1', 'def-rec1');

      adsmtag.display('cncpt-dsk_rec2', 'def-rec2');

      adsmtag.display('cncpt-dsk_rec3', 'def-rec3');

      adsmtag.display('cncpt-dsk_rec4', 'def-rec4');

      adsmtag.display('cncpt-dsk_rec5', 'def-rec5');

      adsmtag.display('cncpt-dsk_rec6', 'def-rec6');

      adsmtag.display('cncpt-sky1', 'def-sky1');

      adsmtag.display('cncpt-sky2', 'def-sky2');

      adsmtag.display('cncpt-mob1', 'def-mob1');

      adsmtag.display('cncpt-mob2', 'def-mob2');
    });

    adsmtag.cmd = cmd.concat(adsmtag.cmd || []);

    script.load('https:' + '//rmb-adsembler.netdna-ssl.com/mnemonics/adsm.macro.edge.js');
  }
}
macro.bootstrap(config);
