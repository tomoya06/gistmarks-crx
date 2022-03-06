import { MarkItem, MarkType } from '../../utils/types';
import Folder from './Folder';
import Link from './Link';
import Seperator from './Seperator';

interface Props {
  item: MarkItem;
}

export default function MarkItem(props: Props) {
  const { item } = props;

  switch (item.type) {
    case MarkType.Separator: return (
      <Seperator />
    );
    case MarkType.Link: return (
      <Link item={item}/>
    );
    case MarkType.Folder: return (
      <Folder item={item}/>
    )
    default: return null;
  }
}