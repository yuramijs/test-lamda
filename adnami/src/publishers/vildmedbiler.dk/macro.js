var css = require('./mnemonics/css');
// var scripts = require( './mnemonics/scripts');
var macro = require( 'macro');
var script = require( 'core/script');

var config = {
  uuid: 'bb9fdd2f-8130-44e6-875c-78466141fa45',
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
        path: '/5706918/vildmbiler.dk_dsk_lb1_skn',
        size: [
          [[1025, 0], [[930, 360], [930, 600], [930, 180]]]
        ],
        inview: [],
        refresh: 0,
        dependencies: [],
      });
      
      adsmtag.define('def-lb2', {
        path: '/5706918/vildmbiler.dk_dsk_lb2',
        size: [
          [[1025, 0], [[930, 360], [930, 600], [930, 180]]]
        ],
        inview: [],
        refresh: 0,
        dependencies: [],
      });
      
      adsmtag.define('def-rec1', {
        path: '/5706918/vildmbiler.dk_dsk_rec1',
        size: [
          [[768, 0], [[300, 250]]]
        ],
        inview: [],
        refresh: 0,
        dependencies: [],
      });
      
      adsmtag.define('def-rec2', {
        path: '/5706918/vildmbiler.dk_dsk_rec2',
        size: [
          [[768, 0], [[300, 250]]]
        ],
        inview: [],
        refresh: 0,
        dependencies: [],
      });
      
      adsmtag.define('def-mob1', {
        path: '/5706918/vildmbiler.dk_mob1',
        size: [
          [[768, 0], []],
          [[0, 0], [[320, 50], [300, 250], [320, 320], [320, 160]]]
        ],
        inview: [],
        refresh: 0,
        dependencies: [],
      });
      
      adsmtag.define('def-mob2', {
        path: '/5706918/vildmbiler.dk_mob2',
        size: [
          [[768, 0], []],
          [[0, 0], [[320, 50], [300, 250], [320, 320], [320, 160]]]
        ],
        inview: [],
        refresh: 0,
        dependencies: [],
      });
      
      adsmtag.define('def-mob3', {
        path: '/5706918/vildmbiler.dk_mob3',
        size: [
          [[768, 0], []],
          [[0, 0], [[320, 50], [300, 250], [320, 320], [320, 160]]]
        ],
        inview: [],
        refresh: 0,
        dependencies: [],
      });
      
      adsmtag.define('def-mob4', {
        path: '/5706918/vildmbiler.dk_mob4',
        size: [
          [[768, 0], []],
          [[0, 0], [[320, 50], [300, 250], [320, 320], [320, 160]]]
        ],
        inview: [],
        refresh: 0,
        dependencies: [],
      });
      
      adsmtag.define('def-tab-lb1', {
        path: '/5706918/vildmbiler.dk_tab_lb1',
        size: [
          [[1025, 0], []],
          [[768, 0], [[930, 180], [728, 90]]],
          [[0, 0], []],
        ],
        inview: [],
        refresh: 0,
        dependencies: [],
      });
      
      adsmtag.define('def-tab-lb2', {
        path: '/5706918/vildmbiler.dk_tab_lb2',
        size: [
          [[1025, 0], []],
          [[768, 0], [[930, 180], [728, 90]]],
          [[0, 0], []],
        ],
        inview: [],
        refresh: 0,
        dependencies: [],
      });
      
      
      adsmtag.display('cncpt-lb1', 'def-lb1');
      adsmtag.display('cncpt-lb2', 'def-lb2');
      adsmtag.display('cncpt-rec1', 'def-rec1');
      adsmtag.display('cncpt-rec2', 'def-rec2');
      adsmtag.display('cncpt-mob1', 'def-mob1');
      adsmtag.display('cncpt-mob2', 'def-mob2');
      adsmtag.display('cncpt-mob3', 'def-mob3');
      adsmtag.display('cncpt-mob4', 'def-mob4');
      adsmtag.display('cncpt-tab-lb1', 'def-tab-lb1');
      adsmtag.display('cncpt-tab-lb2', 'def-tab-lb2');
    });

    adsmtag.cmd = cmd.concat(adsmtag.cmd || []);

    script.load('https:' + '//rmb-adsembler.netdna-ssl.com/mnemonics/adsm.macro.edge.js');
  }
}
macro.bootstrap(config);
