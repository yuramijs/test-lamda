'use strict;';
var css = require('css');

module.exports = function cssObjectLoader (source) {
  this.cacheable && this.cacheable();
  var parsedStylesheet = getParsedStylesheet(source);
  var selectors = parsedStylesheet && parsedStylesheet.rules.reduce(reduceRulesToSelectors, []);
  return 'module.exports = ' + JSON.stringify(selectors) + ';';
};

function getParsedStylesheet (source) {
  return css.parse(source).stylesheet;
}

function isValidRule (rule) {
  return !!(rule.type === 'rule' && rule.selectors && rule.selectors.length);
}

function isValidDeclaration (declaration) {
  return !!(declaration.type === 'declaration' && declaration.property && declaration.property.length);
}

function reduceDeclarationsToStyleObject (styleObj, declaration) {
  if (!isValidDeclaration(declaration)) {
    return styleObj;
  }
  var key = declaration.property;
  var value = declaration.value;
	styleObj.push(declaration.property + ':' + declaration.value);
  return styleObj;
}

function reduceRulesToSelectors (selectors, rule) {
  if (!isValidRule(rule)) {
    return selectors;
  }
  var styleObject = rule.declarations.reduce(reduceDeclarationsToStyleObject, []);
	selectors.push({ selector: rule.selectors.join(','), styles: styleObject.join(';') + ';' });
  return selectors;
}
