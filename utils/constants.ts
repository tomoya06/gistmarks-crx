import { ConfirmCreatePayload } from "./types";

const ContextMenuIdPrefix = "GistMark_ContextMenu_";
const IframeMsgCommandPrefix = "GistMark_MsgCmd_";

export const IframeCreateId = "GistMarkIFrame";

export const ContextMenuId = {
  RightClickTest: `${ContextMenuIdPrefix}rightclicktest`,
};

export const RootFolderId = 'GistMark_rootFolderId';

export interface IframeMsgPayload {
  closeCreate: null;
  confirmCreate: ConfirmCreatePayload;
}

type IframeMsgPayloadKeyType = keyof IframeMsgPayload;
type IframeMsgPayloadValType = IframeMsgPayload[IframeMsgPayloadKeyType]; 

export interface IframePayloadBundle {
  type: IframeMsgPayloadKeyType,
  data: IframeMsgPayloadValType
}

export function iframePostMsg(type: IframeMsgPayloadKeyType, data: IframeMsgPayloadValType) {
  parent.window.postMessage({
    type,
    data,
  }, "*");
}