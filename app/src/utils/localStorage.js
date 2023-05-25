const setItem = (key, body) => {
  localStorage.setItem(key, JSON.stringify(body));
};

const getItem = (key) => JSON.parse(localStorage.getItem(key) || 'null');

const setLocalStorage = (key, value) => {
  if (!getItem(key)) setItem(key, {});
  setItem(key, value);
};

export default {
  setItem,
  getItem,
  setLocalStorage
};
