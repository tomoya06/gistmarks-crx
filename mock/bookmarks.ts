import { MarkItem, MarkType } from "../utils/types";

const marks: MarkItem[] = [
  {
    type: MarkType.Link,
    id: "1",
    name: "Gogle",
    link: "https://www.google.com",
    children: [],
  },
  {
    type: MarkType.Separator,
    id: "2",
    name: "",
    link: "",
    children: [],
  },
  {
    type: MarkType.Folder,
    id: "3",
    name: "Baidu",
    link: "https://www.baidu.com",
    children: [
      {
        type: MarkType.Link,
        id: "31",
        name: "Gogle",
        link: "https://www.google.com",
        children: [],
      },
      {
        type: MarkType.Link,
        id: "32",
        name: "Gogle",
        link: "https://www.google.com",
        children: [],
      },
    ],
  },
];

export default marks;
