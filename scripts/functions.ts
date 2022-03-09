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

  let pageInfo = "";

  chrome.runtime.onMessage.addListener((msg, sender) => {
    console.log("received msg from ext", msg);

    pageInfo = msg;
  });

  div.addEventListener("load", () => {
    console.log("iframe loaded");

    div.contentWindow.postMessage(pageInfo, iframeOrigin);
  });
}
