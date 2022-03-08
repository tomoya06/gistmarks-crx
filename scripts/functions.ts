export function openCreate() {
  const iframeSrc = 'chrome-extension://' + chrome.runtime.id;
  const createHtmlPath = 'src/create/index.html';

  const myIFrame = `<iframe src="${iframeSrc}/${createHtmlPath}"></iframe>`;
  const div = document.createElement("div");
  div.style.zIndex = '9999999';
  div.innerHTML = myIFrame;
  document.body.insertBefore(div, document.body.firstChild);
}
