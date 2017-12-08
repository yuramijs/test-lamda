var css = require('./mnemonics/css');
// var scripts = require( './mnemonics/scripts');
var macro = require( 'macro');
var script = require( 'core/script');

var config = {
  uuid: 'bbed3a27-db57-47e7-bd3f-11a05677fc5b',
  default: function() {
    var adsmtag = window.adsmtag = window.adsmtag || {};
    var cmd = [];
    cmd.push(function () {
      // scripts.run();
      css.run();
    });
    // cmd.push(function () {
    //   adsmtag.service().setTargeting('entry', 'first');
    //   adsmtag.define('def-lb1', {
    //     path: '/5706918/concept_test_930x180',
    //     size: [
    //       [[0, 0], [[930, 180]]]
    //     ],
    //     inview: [],
    //     refresh: 0,
    //   });
    //
    //   adsmtag.display('adsm-lb1', 'def-lb1');
    // });

    adsmtag.cmd = cmd.concat(adsmtag.cmd || []);

    script.load('https:' + '//rmb-adsembler.netdna-ssl.com/mnemonics/adsm.macro.rmb.js');
  }
}
macro.bootstrap(config);
