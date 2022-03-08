import { ContextMenuId } from "../utils/constants";

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: ContextMenuId.RightClickTest,
    title: "测试右键菜单",
    contexts: ["page"],
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === ContextMenuId.RightClickTest) {
    console.log("您点击了右键菜单！");
  }
});
