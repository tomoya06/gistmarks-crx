import "./App.css";
import "antd/dist/antd.css";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Button, Input, Spin, TreeSelect } from "antd";
import {
  iframePostMsg as _iframePostMsg,
  RootFolderId,
} from "../../utils/constants";
import { MarkItem, MarkType } from "../../utils/types";
import { transMarksToTreenodes } from "../../components/MarkTree/middleware";
import mockMarks from "../../mock/bookmarks";

const iframePostMsg = _iframePostMsg.bind(window);

export default function App() {
  const [newUrl, setNewUrl] = useState("");
  const [newName, setNewName] = useState("");
  const [loading, setLoading] = useState(true);
  const [newFolder, setNewFolder] = useState<string | undefined>(undefined);
  const [marks, setMarks] = useState<MarkItem[]>([]);

  (window as any).updateTabInfo = (tab: chrome.tabs.Tab) => {
    const { url = "", title = "" } = tab;
    setNewUrl(url);
    setNewName(title);
    setLoading(false);
  };

  useEffect(() => {
    setMarks(mockMarks);
  }, []);

  const closeMyself = () => {
    iframePostMsg("closeCreate", null);
  };

  const confirmMyself = () => {
    console.log("confirm");
    iframePostMsg("confirmCreate", {
      url: newUrl,
      title: newName,
      folder: newFolder || RootFolderId,
    });
  };

  const treeData = useMemo(() => {
    const filter = new Set([MarkType.Folder]);
    return transMarksToTreenodes(marks, filter);
  }, [marks]);

  return (
    <div className="GistMark_CreateApp">
      <Spin spinning={loading}>
        <div>
          <span>名称</span>
          <Input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          <span>URL</span>
          <Input value={newUrl} onChange={(e) => setNewUrl(e.target.value)} />
        </div>

        <div>
          <span>位置</span>
          <TreeSelect
            treeData={treeData}
            value={newFolder}
            style={{ width: "100%" }}
            onChange={(value) => setNewFolder(value)}
          />
        </div>

        <div>
          <Button onClick={closeMyself}>取消</Button>
          <Button onClick={confirmMyself} type="primary">
            确认
          </Button>
        </div>
      </Spin>
    </div>
  );
}
