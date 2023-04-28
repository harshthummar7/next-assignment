import { colors } from "./constants";
var index = 0;
export const colorFunction = (i) => {
  const color = colors[index];
  console.log("before", index);
  index = (index + 1) % colors.length;
  console.log("after", index);
  return color;
};

export const fetchContact = () => {
  return JSON.parse(localStorage.getItem("contacts"));
};

export const setLocalStorage = (list) => {
  return localStorage.setItem("contacts", list);
};
