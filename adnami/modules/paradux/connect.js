var actions = {};

function handler(event) {
  if (event.data){
    var type = event.data.type;
    var cmd = actions[type];
    if (cmd) {
      for (var i = 0; i < cmd.length; i++) {
        cmd[i](event.data.payload, event.source);
      }
    }
  }
}

function connect(type, callback) {
  var cmd = actions[type] = actions[type] || [];
  cmd.push(callback);
}

window.addEventListener('message', handler, false);

module.exports = connect;
