import "./App.css";
import "antd/dist/antd.css";
import MarkTree from "../../components/MarkTree";
import mockMarkBarItems from "../../mock/bookmarks";
import { useState } from "react";

export default function App() {
  const [tabInfo, setTabInfo] = useState<chrome.tabs.Tab | null>(null);

  (window as any).updateTabInfo = setTabInfo;

  return (
    <div className="GistMark_CreateApp">
      <div className="">CURRENT TAB URL: {tabInfo?.url}</div>
      <MarkTree marks={mockMarkBarItems} onlyFolder={true} />
    </div>
  );
}
