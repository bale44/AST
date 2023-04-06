import { resultArea } from "./variables.js";

export function copyToClipboard() {
  navigator.clipboard
    .writeText(resultArea.textContent)
    .then(() => {
      alert("Copied the text: " + resultArea.textContent);
    })
    .catch((error) => {
      console.error("Failed to copy text: ", error);
    });
}
