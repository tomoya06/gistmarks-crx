import { Tree } from "antd";
import { useMemo } from "react";
import { MarkItem } from "../../utils/types";
import { transMarksToTreenodes } from "./middleware";

interface Props {
  marks: MarkItem[];
}

export default function MarkTree(props: Props) {
  const { marks } = props;

  const treeData = useMemo(() => {
    return transMarksToTreenodes(marks);
  }, [marks]);

  return (
    <Tree
      showIcon={true}
      treeData={treeData}
      height={400}
      selectable={false}
    />
  );
}
