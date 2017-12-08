// var css = require('./mnemonics/css');
// var scripts = require( './mnemonics/scripts');
var macro = require( 'macro');
var script = require( 'core/script');

var config = {
  uuid: '2e27d290-f19b-4b85-b8b4-d8320e568759',
  default: function() {
    var adsmtag = window.adsmtag = window.adsmtag || {};
    var cmd = [];
    // cmd.push(function () {
    //   scripts.run();
    //   css.run();
    // });
    cmd.push(function () {
      adsmtag.service().setTargeting('entry', 'first');
      adsmtag.define('def-lb1_728x90', {
        path: '/5706918/spanienidag.es_dsk_728x90',
        size: [
          [[0, 0] ,[728, 90]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-rec1', {
        path: '/5706918/spanienidag.es_dsk_rec1',
        size: [
          [[0, 0],[300, 250]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-rec2', {
        path: '/5706918/spanienidag.es_dsk_rec2',
        size: [
          [[0, 0],[300, 250]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-rec3', {
        path: '/5706918/spanienidag.es_dsk_rec3',
        size: [
          [[0, 0],[300, 250]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.define('def-rec4', {
        path: '/5706918/spanienidag.es_dsk_rec4',
        size: [
          [[0, 0],[300, 250]]
        ],
        inview: [],
        refresh: 0
      });

      adsmtag.display('cncpt-lb1_728x90', 'def-lb1_728x90');
      adsmtag.display('cncpt_rec1', 'def-rec1');
      adsmtag.display('cncpt_rec2', 'def-rec2');
      adsmtag.display('cncpt-rec3', 'def-rec3');
      adsmtag.display('cncpt_rec4', 'def-rec4');
    });

    adsmtag.cmd = cmd.concat(adsmtag.cmd || []);

    script.load('https:' + '//rmb-adsembler.netdna-ssl.com/mnemonics/adsm.macro.edge.js');
  }
}
macro.bootstrap(config);
