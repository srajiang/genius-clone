export const stringToHTML = (str) => {
  var dom = document.createElement("div");
  dom.innerHTML = str;
  return dom;
};
