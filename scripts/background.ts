import { ContextMenuId } from "../utils/constants";
import { openCreate } from "./functions";

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: ContextMenuId.RightClickTest,
    title: "测试右键菜单",
    contexts: ["page"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === ContextMenuId.RightClickTest) {
    console.log("您点击了右键菜单！");
    chrome.scripting.executeScript(
      {
        func: openCreate,
        target: {
          tabId: tab.id,
        },
      },
      () => {
        console.log('send msg from background.js');
        chrome.tabs.sendMessage(
          tab.id,
          JSON.stringify(tab),
        );
      }
    );
  }
});
