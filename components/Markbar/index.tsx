import { MarkItem } from "../../utils/types";
import MarkBarItem from "../MarkBarItem";

interface Props {
  marks: MarkItem[];
}

function MarkBar(props: Props) {
  const { marks } = props;

  return (
    <div>
      {marks.map((mark) => (
        <MarkBarItem item={mark} key={mark.id} />
      ))}
    </div>
  );
}
