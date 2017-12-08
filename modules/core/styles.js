function addRule(sheet, selector, rules, index) {
  try {
    if ('insertRule' in sheet) {
      sheet.insertRule(selector + '{' + rules + '}', index);
    } else if ('addRule' in sheet) {
      sheet.addRule(selector, rules, index);
    }
  } catch (e) { }
}

function create(css, id) {
  var style = window.document.createElement('style');
  if (style.styleSheet) {
    style.appendChild(window.document.createTextNode(''));
  }
  var head = window.document.head || window.document.getElementsByTagName('head')[0];
  head.appendChild(style);

  var sheet = style.sheet || style.styleSheet;
  var rules = sheet.cssRules || sheet.rules;

  for (var i = 0; i < css.length; i++) {
    var rule = css[i];
    addRule(sheet, rule.selector, rule.styles, rules.length);
  }
}

module.exports = {
  create: create
};
