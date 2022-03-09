import "./App.css";
import "antd/dist/antd.css";
import MarkTree from "../../components/MarkTree";
import mockMarkBarItems from "../../mock/bookmarks";
import { useEffect } from "react";

export default function App() {
  return (
    <div className="GistMark_CreateApp">
      <div className=""></div>
      <MarkTree marks={mockMarkBarItems} onlyFolder={true} />
    </div>
  );
}
