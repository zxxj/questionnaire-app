export const setLocal = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const getLocal = (key: string) => {
  return localStorage.getItem(key);
};

export const removeLocal = (key: string) => {
  localStorage.removeItem(key);
};
