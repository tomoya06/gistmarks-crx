import "./App.css";
import MarkBar from "../../components/Markbar";
import mockMarkBarItems from "../../mock/bookmarks";

export default function App() {
  return (
    <div className="App">
      <MarkBar marks={mockMarkBarItems} />
    </div>
  );
}
