import { useRef } from "react";

const useLocalStorage = () => {
  const storage = useRef(localStorage);

  const set = (key, value) => {
    storage.current.setItem(key, value);
  };

  const get = (key) => {
    if (!validateKey) throw new Error(`Item key: ${key} does not exists`);
    return storage.current.getItem(key);
  };

  const remove = (key) => {
    if (key instanceof Array)
      return key.forEach((key) => localStorage.removeItem(key));
    return localStorage.removeItem(key);
  };

  const validateKey = (key) => {
    if (storage.current.getItem(key)) {
      return true;
    } else return false;
  };

  return {
    set,
    get,
    remove,
  };
};

export default useLocalStorage;
