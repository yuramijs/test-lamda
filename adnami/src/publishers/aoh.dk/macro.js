// var css = require('./mnemonics/css');
// var scripts = require( './mnemonics/scripts');
var macro = require( 'macro');
var script = require( 'core/script');

var config = {
  uuid: 'dea8a57d-ede8-4cb1-92d7-bb70118c150c',
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
      	path: '/5706918/Herningfolkeblad_aoh.dk_dsk_lb1_megabanner_930x600_251291',
      	size: [
      		[[928, 590] ,[[930, 180], [930, 600]]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-lb4', {
      	path: '/5706918/Herning_Folkeblad_aoh.dk_930x180_B_206349',
      	size: [
      		[[928, 590] ,[[930, 180], [930, 600]]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-lb5', {
      	path: '/5706918/HFB_aoh.dk_dsk_lb5',
      	size: [
      		[[928, 590] ,[[930, 180], [930, 600]]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-lb6', {
      	path: '/5706918/Herning_Folkeblad_aoh.dk_930x180_T_206350',
      	size: [
      		[[928, 590] ,[[930, 180], [930, 600]]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-lb10', {
      	path: '/5706918/HFB_aoh.dk_dsk_lb10',
      	size: [
      		[[928, 590] ,[[930, 180], [930, 600]]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-centre_630x180', {
      	path: '/5706918/herningfolkeblad.dk_aoh.dk_centre_630x180',
      	size: [
      		[[928, 590],[630, 180]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-featuresplash_center', {
      	path: '/5706918/herningfolkeblad.dk_aoh.dk_featuresplash1_300x60',
      	size: [
      		[[928, 590],[300, 60]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-featuresplash_left', {
      	path: '/5706918/herningfolkeblad.dk_aoh.dk_featuresplash2_300x60',
      	size: [
      		[[928, 590],[300, 60]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-featuresplash_right', {
      	path: '/5706918/herningfolkeblad.dk_aoh.dk_featuresplash3_300x60',
      	size: [
      		[[928, 590],[300, 60]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-rec1', {
      	path: '/5706918/Herning_Folkeblad_aoh.dk_300x250_T_206347',
      	size: [
      		[[928, 590],[300, 250]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-rec2', {
      	path: '/5706918/Herning_Folkeblad_aoh.dk_300x250_B_206348',
      	size: [
      		[[928, 590],[300, 250]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-rec3', {
      	path: '/5706918/Herning_Folkeblad_aoh.dk_MOB_300x250_ATF_206901',
      	size: [
      		[[928, 590],[300, 250]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-rec4', {
      	path: '/5706918/Herningfolkeblad_aoh.dk_dsk_rec4',
      	size: [
      		[[928, 590],[300, 250]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-bis1', {
      	path: '/5706918/Herningfolkeblad_aoh.dk_dsk_bis1',
      	size: [
      		[[928, 590],[300, 250]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-bis2', {
      	path: '/5706918/Herningfolkeblad_aoh.dk_dsk_bis2',
      	size: [
      		[[928, 590],[300, 250]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-bis3', {
      	path: '/5706918/Herningfolkeblad_aoh.dk_dsk_bis3',
      	size: [
      		[[928, 590],[300, 250]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-bis4', {
      	path: '/5706918/Herningfolkeblad_aoh.dk_dsk_bis4',
      	size: [
      		[[928, 590],[300, 250]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-bis5', {
      	path: '/5706918/Herningfolkeblad_aoh.dk_dsk_bis5',
      	size: [
      		[[928, 590],[300, 250]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-bis6', {
      	path: '/5706918/Herningfolkeblad_aoh.dk_dsk_bis6',
      	size: [
      		[[928, 590],[300, 250]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-sky1', {
      	path: '/5706918/Herningfolkeblad_aoh.dk_dsk_sky1_blk',
      	size: [
      		[[1290, 590],[160, 600]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0,
      });

      adsmtag.define('def-sky2', {
      	path: '/5706918/Herning_Folkeblad_aoh.dk_160x600_R_206345',
      	size: [
      		[[1290, 590],[160, 600]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0,
      });

      adsmtag.define('def-sky3', {
      	path: '/5706918/HFB_aoh.dk_dsk_sky3',
      	size: [
      		[[1290, 590],[160, 600]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-sky4', {
      	path: '/5706918/HFB_aoh.dk_dsk_sky4',
      	size: [
      		[[1290, 590],[160, 600]],
      		[[0, 0],[]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-outstream', {
      	path: '/5706918/Herningfolkeblad_aoh.dk_outstream',
      	size: [
      		[[0, 0],[1, 1]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-mob1', {
      	path: '/5706918/Herning_Folkeblad_aoh.dk_MOB_300x250_1_206891',
      	size: [
      		[[737, 0],[]],
      		[[0, 0],[[320, 320],[320, 160],[320, 80],[300, 250]]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-mob2', {
      	path: '/5706918/Herning_Folkeblad_aoh.dk_MOB_300x250_2_206892',
      	size: [
      		[[737, 0],[]],
      		[[0, 0],[[320, 320],[320, 160],[320, 80],[300, 250]]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-mob3', {
      	path: '/5706918/HFB_aoh.dk_mob3',
      	size: [
      		[[737, 0],[]],
      		[[0, 0],[[320, 320],[320, 160],[320, 80],[300, 250]]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-mob_bis1', {
      	path: '/5706918/aoh_mobil_bis01_300x250',
      	size: [
      		[[737, 0],[]],
      		[[0, 0],[[320, 320],[320, 160], [300, 250]]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-mob_bis2', {
      	path: '/5706918/aoh_mobil_bis02_300x250',
      	size: [
      		[[737, 0],[]],
      		[[0, 0],[[320, 320],[320, 160], [300, 250]]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-mob_bis3', {
      	path: '/5706918/aoh_mobil_bis03_300x250',
      	size: [
      		[[737, 0],[]],
      		[[0, 0],[[320, 320],[320, 160], [300, 250]]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-mob_bis4', {
      	path: '/5706918/aoh_mobil_bis04_300x250',
      	size: [
      		[[737, 0],[]],
      		[[0, 0],[[320, 320],[320, 160], [300, 250]]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-eavis_rec1', {
      	path: '/5706918/HFB_aoh.dk_eavis_rec1',
      	size: [
      		[[0, 0],[300, 250]],
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.define('def-eavis_mob1', {
      	path: '/5706918/HFB_aoh.dk_eavis_mob1',
      	size: [
      		[[0, 0],[320, 80]]
      	],
      	inview: [],
      	refresh: 0
      });

      adsmtag.display('cncpt-lb1-skn', 'def-lb1-skn');
      adsmtag.display('cncpt-lb4', 'def-lb4');
      adsmtag.display('cncpt-lb5', 'def-lb5');
      adsmtag.display('cncpt-lb6', 'def-lb6');
      adsmtag.display('cncpt-lb10', 'def-lb10');
      adsmtag.display('cncpt-centre_630x180', 'def-centre_630x180');
      adsmtag.display('cncpt-featuresplash_center', 'def-featuresplash_center');
      adsmtag.display('cncpt-featuresplash_left', 'def-featuresplash_left');
      adsmtag.display('cncpt-featuresplash_right', 'def-featuresplash_right');
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
      adsmtag.display('cncpt-eavis_rec1', 'def-eavis_rec1');
      adsmtag.display('cncpt-eavis_mob1', 'def-eavis_mob1');
    });

    adsmtag.cmd = cmd.concat(adsmtag.cmd || []);

    script.load('https:' + '//rmb-adsembler.netdna-ssl.com/mnemonics/adsm.macro.edge.js');
  }
}
macro.bootstrap(config);
