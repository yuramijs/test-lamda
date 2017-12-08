function get(name) {
  var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return v ? v[2] : null;
}

function set(name, value) {
  document.cookie = name + "=" + value + ";path=/;";
}

module.exports = {
  get: get,
  set: set,
};
