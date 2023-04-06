import { errorText, resultArea } from "./variables.js";

export const processObject = (object) => {
  errorText.style.display = "none";
  const attributes = object.attributes
    .map((el) => `${el.name}="${el.value}"`)
    .join("");
  const children = object.children
    .map((el) => {
      if (el.nodeType == "text") {
        return el.value;
      } else if (el.nodeType == "element") {
        return processObject(el);
      }
    })
    .join("");

  resultArea.innerHTML = `<${object.tagName} ${attributes}>${children}</${object.tagName}>`;
};
