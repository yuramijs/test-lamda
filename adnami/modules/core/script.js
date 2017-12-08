function load(url, name) {
  var script = document.createElement('script');
  if (name) {
    script.id = name;
  }
  script.async = true;
  script.type = 'text/javascript';
  script.src = url;
  var node = document.getElementsByTagName('script')[0];
  node.parentNode.insertBefore(script, node);
}

module.exports = {
  load: load,
};
