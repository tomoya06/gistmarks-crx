import { TreeDataNode } from "antd";
import { MarkItem, MarkType } from "../../utils/types";
import "./index.css";
import { LinkOutlined } from "@ant-design/icons";

// TODO: 注意限制一下link的schema
function openLinkInTab(link: string) {
  chrome.tabs.create({
    url: link,
  });
}

function MarkItemLink(props: { item: MarkItem }) {
  const { item } = props;
  return (
    <span className="MarkTreeItem" onClick={() => openLinkInTab(item.link)}>
      {item.name}
    </span>
  );
}

function MarkItemSeperator(props: { item: MarkItem }) {
  return <span className="MarkTreeDevider"></span>;
}

export const transMarksToTreenodes = (marks: MarkItem[], filters: Set<MarkType>): TreeDataNode[] => {
  return marks
    .filter((item) => filters.has(item.type))
    .map((item) => {
      if (item.type === MarkType.Link) {
        return {
          key: item.id,
          icon: <LinkOutlined />,
          title: <MarkItemLink item={item} />,
        };
      }
      if (item.type === MarkType.Folder) {
        return {
          key: item.id,
          title: item.name,
          children: transMarksToTreenodes(item.children, filters),
        };
      }
      return {
        key: item.id,
        title: <MarkItemSeperator item={item} />,
      };
    });
};
