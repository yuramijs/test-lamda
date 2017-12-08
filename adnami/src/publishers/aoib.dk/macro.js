// var css = require('./mnemonics/css');
// var scripts = require( './mnemonics/scripts');
var macro = require( 'macro');
var script = require( 'core/script');

var config = {
  uuid: '00e6cdca-b0dd-4a87-8e97-1bd278a4b377',
  default: function() {
    var adsmtag = window.adsmtag = window.adsmtag || {};
    var cmd = [];
    // cmd.push(function () {
    //   scripts.run();
    //   css.run();
    // });
    cmd.push(function () {
      adsmtag.service().setTargeting('entry', 'first');
      adsmtag.define('def-lb1-skn', {
      	path: '/5706918/Herning_Folkeblad_aoib.dk_930x180_T_206343',
      	size: [
      		[[928, 590] ,[[930, 180], [930, 600]]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-lb4', {
      	path: '/5706918/Herning_Folkeblad_aoib.dk_930x180_B_206342',
      	size: [
      		[[928, 590] ,[[930, 180], [930, 600]]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-lb5', {
      	path: '/5706918/HFB_aoib.dk_dsk_lb5',
      	size: [
      		[[928, 590] ,[[930, 180], [930, 600]]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-lb6', {
      	path: '/5706918/HFB_aoib.dk_dsk_lb6',
      	size: [
      		[[928, 590] ,[[930, 180], [930, 600]]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-lb10', {
      	path: '/5706918/HFB_aoib.dk_dsk_lb10',
      	size: [
      		[[928, 590] ,[[930, 180], [930, 600]]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-featuresplash_center', {
      	path: '/5706918/herningfolkeblad_aoib.dk_featuresplash_center',
      	size: [
      		[[928, 590],[300, 60]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-featuresplash_left', {
      	path: '/5706918/herningfolkeblad_aoib.dk_featuresplash_left',
      	size: [
      		[[928, 590],[300, 60]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-featuresplash_right', {
      	path: '/5706918/herningfolkeblad_aoib.dk_featuresplash_right',
      	size: [
      		[[928, 590],[300, 60]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-centre_630x180', {
      	path: '/5706918/herningfolkeblad.dk_aoib.dk_centre_630x180',
      	size: [
      		[[928, 590],[630, 180]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-rec1', {
      	path: '/5706918/Herning_Folkeblad_aoib.dk_300x250_T_206340',
      	size: [
      		[[928, 590],[300, 250]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-rec2', {
      	path: '/5706918/Herningfolkeblad_aoib.dk_dsk_rec2',
      	size: [
      		[[928, 590],[300, 250]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-rec3', {
      	path: '/5706918/Herningfolkeblad_aoib.dk_dsk_rec3',
      	size: [
      		[[928, 590],[300, 250]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-rec4', {
      	path: '/5706918/Herningfolkeblad_aoib.dk_dsk_rec4',
      	size: [
      		[[928, 590],[300, 250]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-bis1', {
      	path: '/5706918/aoib_bis01_300x250',
      	size: [
      		[[928, 590],[300, 250]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-bis2', {
      	path: '/5706918/aoib_bis02_300x250',
      	size: [
      		[[928, 590],[300, 250]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-bis3', {
      	path: '/5706918/aoib_bis03_300x250',
      	size: [
      		[[928, 590],[300, 250]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-bis4', {
      	path: '/5706918/aoib_bis04_300x250',
      	size: [
      		[[928, 590],[300, 250]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-bis5', {
      	path: '/5706918/aoib_bis05_300x250',
      	size: [
      		[[928, 590],[300, 250]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-bis6', {
      	path: '/5706918/aoib_bis06_300x250',
      	size: [
      		[[928, 590],[300, 250]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-sky1', {
      	path: '/5706918/Herningfolkeblad_aoib.dk_dsk_sky1',
      	size: [
      		[[1290, 590],[160, 600]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0,
      });

      adsmtag.define('def-sky2', {
      	path: '/5706918/Herning_Folkeblad_aoib.dk_160x600_R_206338',
      	size: [
      		[[1290, 590],[160, 600]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0,
      });

      adsmtag.define('def-sky3', {
      	path: '/5706918/HFB_aoib.dk_dsk_sky3',
      	size: [
      		[[1290, 590],[160, 600]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-sky4', {
      	path: '/5706918/HFB_aoib.dk_dsk_sky4',
      	size: [
      		[[1290, 590],[160, 600]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-outstream', {
      	path: '/5706918/Herningfolkeblad_aoib.dk_outstream',
      	size: [
      		[[0, 0],[1, 1]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-mob1', {
      	path: '/5706918/Herning_Folkeblad_aoib.dk_MOB_300x250_1_206894',
      	size: [
      		[[737, 0],[]],
      		[[0, 0],[[320, 320],[320, 160],[320, 80],[300, 250]]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-mob2', {
      	path: '/5706918/HFB_aoib.dk_mob2',
      	size: [
      		[[737, 0],[]],
      		[[0, 0],[[320, 320],[320, 160],[320, 80],[300, 250]]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-mob3', {
      	path: '/5706918/HFB_aoib.dk_mob3',
      	size: [
      		[[737, 0],[]],
      		[[0, 0],[[320, 320],[320, 160],[320, 80],[300, 250]]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-mob_bis1', {
      	path: '/5706918/aoib_mobil_bis01_300x250',
      	size: [
      		[[737, 0],[]],
      		[[0, 0],[300, 250]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-mob_bis2', {
      	path: '/5706918/aoib_mobil_bis02_300x250',
      	size: [
      		[[737, 0],[]],
      		[[0, 0],[300, 250]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-mob_bis3', {
      	path: '/5706918/aoib_mobil_bis03_300x250',
      	size: [
      		[[737, 0],[]],
      		[[0, 0],[300, 250]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-mob_bis4', {
      	path: '/5706918/aoib_mobil_bis04_300x250',
      	size: [
      		[[737, 0],[]],
      		[[0, 0],[300, 250]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-eavis-rec1', {
      	path: '/5706918/HFB_aoib.dk_eavis_rec1',
      	size: [
      		[[928, 590],[300, 250]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-eavis-mob1', {
      	path: '/5706918/HFB_aoib.dk_eavis_mob1',
      	size: [
      		[[737, 0],[]],
      		[[0, 0],[320, 80]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-dsk-300x150', {
      	path: '/5706918/HFB_aoib.dk_dsk_300x150',
      	size: [
      		[[928, 590],[300, 150]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.display('cncpt-lb1-skn', 'def-lb1-skn');
      adsmtag.display('cncpt-lb4', 'def-lb4');
      adsmtag.display('cncpt-lb5', 'def-lb5');
      adsmtag.display('cncpt-lb6', 'def-lb6');
      adsmtag.display('cncpt-lb10', 'def-lb10');
      adsmtag.display('cncpt-featuresplash_center', 'def-featuresplash_center');
      adsmtag.display('cncpt-featuresplash_left', 'def-featuresplash_left');
      adsmtag.display('cncpt-featuresplash_right', 'def-featuresplash_right');
      adsmtag.display('cncpt-centre_630x180', 'def-centre_630x180');
      adsmtag.display('cncpt-rec1', 'def-rec1');
      adsmtag.display('cncpt-rec2', 'def-rec2');
      adsmtag.display('cncpt-rec3', 'def-rec3');
      adsmtag.display('cncpt-rec4', 'def-rec4');
      adsmtag.display('cncpt-bis1', 'def-bis1');
      adsmtag.display('cncpt-bis2', 'def-bis2');
      adsmtag.display('cncpt-bis3', 'def-bis3');
      adsmtag.display('cncpt-bis4', 'def-bis4');
      adsmtag.display('cncpt-bis5', 'def-bis5');
      adsmtag.display('cncpt-bis6', 'def-bis6');
      adsmtag.display('cncpt-sky1', 'def-sky1');
      adsmtag.display('cncpt-sky2', 'def-sky2');
      adsmtag.display('cncpt-sky3', 'def-sky3');
      adsmtag.display('cncpt-sky4', 'def-sky4');
      adsmtag.display('cncpt-outstream', 'def-outstream');
      adsmtag.display('cncpt-mob1', 'def-mob1');
      adsmtag.display('cncpt-mob2', 'def-mob2');
      adsmtag.display('cncpt-mob3', 'def-mob3');
      adsmtag.display('cncpt-mob_bis1', 'def-mob_bis1');
      adsmtag.display('cncpt-mob_bis2', 'def-mob_bis2');
      adsmtag.display('cncpt-mob_bis3', 'def-mob_bis3');
      adsmtag.display('cncpt-mob_bis4', 'def-mob_bis4');
      adsmtag.display('cncpt-eavis-rec1', 'def-eavis-rec1');
      adsmtag.display('cncpt-eavis-mob1', 'def-eavis-mob1');
      adsmtag.display('cncpt-dsk-300x150', 'def-dsk-300x150');
    });

    adsmtag.cmd = cmd.concat(adsmtag.cmd || []);

    script.load('https:' + '//rmb-adsembler.netdna-ssl.com/mnemonics/adsm.macro.edge.js');
  }
}
macro.bootstrap(config);
