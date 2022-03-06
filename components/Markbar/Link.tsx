import { MarkItem } from "../../utils/types";

interface Props {
  item: MarkItem;
}

export default function Link(props: Props) {
  const { item: { link, name } } = props;
  return (
    <a href={link}>{name}</a>
  )
}