import { MarkItem } from "../../utils/types";

interface Props {
  item: MarkItem;
}

export default function Folder(props: Props) {
  const {
    item: { name, children },
  } = props;

  return <span>{name}</span>;
}
