export enum MarkType {
  Separator = 1,
  Link,
  Folder,
}

export interface MarkItem {
  type: MarkType;
  id: string;
  name: string;
  link: string;
  children: MarkItem[];
}
