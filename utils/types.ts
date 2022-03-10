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

export interface ConfirmCreatePayload {
  title: string;
  url: string;
  folder: string;
}