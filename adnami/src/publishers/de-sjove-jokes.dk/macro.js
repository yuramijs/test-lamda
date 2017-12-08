var css = require('./mnemonics/css');
// var scripts = require( './mnemonics/scripts');
var macro = require( 'macro');
var script = require( 'core/script');

var config = {
  uuid: '709edc65-7ee4-4913-8f86-2df82cf76e6d',
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
        path: '/5706918/de_sjove_jokes_dsk_lb1_skn',
        size: [
          [[1025, 0], [[930, 180]]]
        ],
        inview: [],
        refresh: 0,
      });

      adsmtag.define('def-lb2', {
        path: '/5706918/de_sjove_jokes_dsk_lb2',
        size: [
          [[1025, 0], [[930, 180]]]
        ],
        inview: [],
        refresh: 0,
      });

      adsmtag.define('def-sky1', {
        path: '/5706918/de_sjove_jokes_dsk_sky1',
        size: [
          [[1025, 0], [[300, 600]]]
        ],
        inview: [],
        refresh: 0,
      });

      adsmtag.define('def-mob1', {
        path: '/5706918/de_sjove_jokes_mob1',
        size: [
          [[768, 0], []],
          [[0, 0], [[320, 320]]]
        ],
        inview: [],
        refresh: 0,
      });

      adsmtag.define('def-mob2', {
        path: '/5706918/de_sjove_jokes_mob2',
        size: [
          [[768, 0], []],
          [[0, 0], [[320, 320]]]
        ],
        inview: [],
        refresh: 0,
      });

      adsmtag.define('def-mob3', {
        path: '/5706918/de_sjove_jokes_mob3',
        size: [
          [[768, 0], []],
          [[0, 0], [[320, 320]]]
        ],
        inview: [],
        refresh: 0,
      });

      adsmtag.define('def-outstream', {
        path: '/5706918/de_sjove_jokes_outstream',
        size: [
          [[0, 0], [[1, 1]]]
        ],
        inview: [],
        refresh: 0,
      });

      adsmtag.define('def-tab-lb1', {
        path: '/5706918/de_sjove_jokes_tab_lb1',
        size: [
          [[1025, 0], []],
          [[768, 0], [[930, 180]]]
        ],
        inview: [],
        refresh: 0,
      });

      adsmtag.define('def-tab-lb2', {
        path: '/5706918/de_sjove_jokes_tab_lb2',
        size: [
          [[1025, 0], []],
          [[768, 0], [[930, 180]]]
        ],
        inview: [],
        refresh: 0,
      });

      adsmtag.display('cncpt-lb1', 'def-lb1');
      adsmtag.display('cncpt-lb2', 'def-lb2');
      adsmtag.display('cncpt-sky1', 'def-sky1');
      adsmtag.display('cncpt-mob1', 'def-mob1');
      adsmtag.display('cncpt-mob2', 'def-mob2');
      adsmtag.display('cncpt-mob3', 'def-mob3');
      adsmtag.display('cncpt-outstream', 'def-outstream');
      adsmtag.display('cncpt-tab-lb1', 'def-tab-lb1');
      adsmtag.display('cncpt-tab-lb2', 'def-tab-lb2');
    });

    adsmtag.cmd = cmd.concat(adsmtag.cmd || []);

    script.load('https:' + '//rmb-adsembler.netdna-ssl.com/mnemonics/adsm.macro.edge.js');
  }
}
macro.bootstrap(config);
