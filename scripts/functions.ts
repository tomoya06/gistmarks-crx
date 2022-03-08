export function openCreate() {
  const iframeSrc = 'chrome-extension://' + chrome.runtime.id;
  const createHtmlPath = 'src/create/index.html';

  const div = document.createElement("iframe");
  div.src = `${iframeSrc}/${createHtmlPath}`
  div.id = 'GistMarkIFrame';
  div.style.right = '10px';
  div.style.top = '10px';
  div.style.width = '600px';
  div.style.height = '300px';
  document.body.insertBefore(div, document.body.firstChild);
}
