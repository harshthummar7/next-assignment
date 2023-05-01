export const fetchContact = () => {
  return JSON.parse(localStorage.getItem("contacts"));
};

export const setLocalStorage = (list) => {
  return localStorage.setItem("contacts", list);
};
