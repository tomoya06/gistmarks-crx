import "./App.css";
import "antd/dist/antd.css";
import MarkTree from "../../components/MarkTree";
import mockMarkBarItems from "../../mock/bookmarks";
import { useEffect } from "react";
import { StorageKey } from "../../utils/constants";

export default function App() {
  useEffect(() => {
    setTimeout(() => {
      chrome.storage.local.get([StorageKey.CurrentTabInfo], (result) => {
        console.log("App got storage", result);
      });
    }, 1000);
  }, []);

  return (
    <div className="GistMark_CreateApp">
      <div className=""></div>
      <MarkTree marks={mockMarkBarItems} onlyFolder={true} />
    </div>
  );
}
