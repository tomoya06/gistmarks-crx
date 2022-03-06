import { MarkItem, MarkType } from '../../utils/types';
import Folder from './Folder';
import Link from './Link';
import Seperator from './Seperator';

interface Props {
  item: MarkItem;
}

function getItemComponent(item: MarkItem) {
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

export default function MarkBarItem(props: Props) {
  const { item } = props;

  return (
    <div className='MarkBarItem'>
      {getItemComponent(item)}
    </div>
  )
}