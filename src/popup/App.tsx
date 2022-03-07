import "./App.css";
import "antd/dist/antd.css";
import MarkTree from "../../components/MarkTree";
import mockMarkBarItems from "../../mock/bookmarks";

export default function App() {
  return (
    <div className="App">
      <MarkTree marks={mockMarkBarItems} />
    </div>
  );
}
