import "./App.css";
import "antd/dist/antd.css";
import MarkTree from "../../components/MarkTree";
import mockMarkBarItems from "../../mock/bookmarks";
import { useCallback, useMemo, useState } from "react";
import { Button } from "antd";
import { IframeCreateId, IframeMsgCommand } from "../../utils/constants";

export default function App() {
  const [tabInfo, setTabInfo] = useState<chrome.tabs.Tab | null>(null);

  (window as any).updateTabInfo = setTabInfo;

  const closeMyself = useCallback(() => {
    // if (tabInfo?.id === undefined) {
    //   return;
    // }
    parent.window.postMessage(IframeMsgCommand.CloseCreate, "*");
  }, []);

  return (
    <div className="GistMark_CreateApp">
      <div className="">CURRENT TAB URL: {tabInfo?.url}</div>
      <MarkTree marks={mockMarkBarItems} onlyFolder={true} />
      <Button onClick={closeMyself}>取消</Button>
    </div>
  );
}
