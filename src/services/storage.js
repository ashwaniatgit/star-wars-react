var Global = typeof window !== 'undefined' ? window : global;

const localStorage = () => {
  return Global.localStorage;
};

const read = (key) => {
  try {
    const data = localStorage().getItem(key);
    return JSON.parse(data);
  } catch (e) {
    return undefined;
  }
};

const write = (key, data) => {
  console.log(data)
  return localStorage().setItem(key, JSON.stringify(data));
};

const each = (fn) => {
  for (var i = localStorage().length - 1; i >= 0; i--) {
    var key = localStorage().key(i);
    fn(read(key), key);
  }
};

const remove = (key) => {
  return localStorage().removeItem(key);
};

const clearAll = () => {
  return localStorage().clear();
};

const localStore = {
  read: read,
  write: write,
  each: each,
  remove: remove,
  clearAll: clearAll,
};

export default localStore;
