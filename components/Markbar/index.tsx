import { MarkItem } from "../../utils/types";
import MarkBarItem from "./MarkBarItem";
import './index.css';

interface Props {
  marks: MarkItem[];
}

export default function MarkBar(props: Props) {
  const { marks } = props;

  return (
    <div className="MarkBar">
      {marks.map((mark) => (
        <MarkBarItem item={mark} key={mark.id} />
      ))}
    </div>
  );
}
