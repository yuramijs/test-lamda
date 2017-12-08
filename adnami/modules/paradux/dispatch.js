function dispatch(target, message) {
  if (target && target.postMessage) {
    target.postMessage(message, '*');
  }
}

module.exports = dispatch;
