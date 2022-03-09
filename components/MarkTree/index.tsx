import { Tree } from "antd";
import { useMemo } from "react";
import { MarkItem, MarkType } from "../../utils/types";
import { transMarksToTreenodes } from "./middleware";

interface Props {
  marks: MarkItem[];
  onlyFolder?: boolean;
}

export default function MarkTree(props: Props) {
  const { marks, onlyFolder = false } = props;

  const treeData = useMemo(() => {
    const filters = new Set([MarkType.Folder]);
    if (!onlyFolder) {
      filters.add(MarkType.Link);
    }

    return transMarksToTreenodes(marks, filters);
  }, [marks, onlyFolder]);

  return (
    <Tree
      showIcon={true}
      treeData={treeData}
      height={400}
      selectable={false}
    />
  );
}
