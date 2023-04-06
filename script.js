import { copyToClipboard } from "./modules/copy-result.js";
import { copyBtn, convertBtn, textArea } from "./modules/variables.js";
import { convert } from "./modules/convert-into-object.js";

convertBtn.addEventListener("click", () => {
  convert(textArea.value);
});
copyBtn.addEventListener("click", copyToClipboard);
