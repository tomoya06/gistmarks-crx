import { StorageKey } from "../utils/constants";

export function openCreate() {
  const iframeOrigin = "chrome-extension://" + chrome.runtime.id;
  const createHtmlPath = "src/create/index.html";

  const div = document.createElement("iframe");
  div.src = `${iframeOrigin}/${createHtmlPath}`;
  div.id = "GistMarkIFrame";
  div.style.right = "10px";
  div.style.top = "10px";
  div.style.width = "600px";
  div.style.height = "300px";
  document.body.insertBefore(div, document.body.firstChild);

  chrome.runtime.onMessage.addListener((msg) => {
    console.log("received msg from ext", msg);

    chrome.storage.local.set({ [StorageKey.CurrentTabInfo]: msg });
  });
}
