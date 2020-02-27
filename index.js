const handlers = {};

const on = (event, fn) => {
  if (typeof fn !== 'function') {
    throw new Error(`Listener to ${event}  is not a function`);
  }
  if (handlers[event]) {
    handlers[event].push(fn);
  } else {
    handlers[event] = [fn];
  }
};

const off = (event, func) => {
  const index = handlers[event].indexOf(func);
  if (index !== -1) {
    handlers[event].splice(index, 1);
  }
};

const trigger = (event, ...args) => {
  if (!handlers[event]) {
    return;
  }
  for (let i = 0, l = handlers[event].length; i < l; ++i) {
    handlers[event][i].apply(this, args);
  }
};

module.exports = {
  on,
  off,
  trigger,
};
