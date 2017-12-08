var css = require('./mnemonics/css');
// var scripts = require( './mnemonics/scripts');
var macro = require( 'macro');
var script = require( 'core/script');

var config = {
  uuid: 'd2096774-92d0-49ad-a725-777f9a675d6a',
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
        path: '/5706918/flixfilmer.se_dsk_lb1',
        size: [
          [[768, 0], [[930, 180], [980, 240], [980, 120]]]
        ],
        inview: [],
        refresh: 0,
      });

      adsmtag.define('def-lb6', {
        path: '/5706918/flixfilmer.se_dsk_lb6',
        size: [
          [[768, 0], [[930, 180], [980, 120]]]
        ],
        inview: [],
        refresh: 0,
      });

      adsmtag.define('def-rec1', {
        path: '/5706918/flixfilmer.se_dsk_rec1',
        size: [
          [[768, 0], [[300, 250]]]
        ],
        inview: [],
        refresh: 0,
      });

      adsmtag.define('def-mob1', {
        path: '/5706918/flixfilmer.se_mob1',
        size: [
          [[768, 0], []],
          [[0, 0], [[300, 250], [320, 50], [320, 160], [320, 320]]]
        ],
        inview: [],
        refresh: 0,
      });

      adsmtag.define('def-mob2', {
        path: '/5706918/flixfilmer.se_mob2',
        size: [
          [[768, 0], []],
          [[0, 0], [[300, 250], [320, 50], [320, 160], [320, 320]]]
        ],
        inview: [],
        refresh: 0,
      });

      adsmtag.define('def-mob3', {
        path: '/5706918/flixfilmer.se_mob3',
        size: [
          [[768, 0], []],
          [[0, 0], [[300, 250], [320, 50], [320, 160], [320, 320]]]
        ],
        inview: [],
        refresh: 0,
      });

      adsmtag.display('cncpt-lb1', 'def-lb1');
      adsmtag.display('cncpt-lb6', 'def-lb6');
      adsmtag.display('cncpt-rec1', 'def-rec1');
      adsmtag.display('cncpt-mob1', 'def-mob1');
      adsmtag.display('cncpt-mob2', 'def-mob2');
      adsmtag.display('cncpt-mob3', 'def-mob3');
    });

    adsmtag.cmd = cmd.concat(adsmtag.cmd || []);

    script.load('https:' + '//rmb-adsembler.netdna-ssl.com/mnemonics/adsm.macro.edge.js');
  }
}
macro.bootstrap(config);
