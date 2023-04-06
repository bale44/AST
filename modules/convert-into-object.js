import { processObject } from "./convert-object-into-html.js";
import { errorText } from "./variables.js";

export const convert = (text) => {
  try {
    const convertedTextToObject = JSON.parse(text);
    return processObject(convertedTextToObject);
  } catch (error) {
    console.log(error);
    errorText.style.display = "block";
    return null;
  }
};
