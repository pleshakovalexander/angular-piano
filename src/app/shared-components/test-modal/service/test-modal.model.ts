export interface TestModalInfo {
  text: string;
  okButtonText: string;
  cancelButtonString: string;
  onClose: (status: CloseStatus) => void;
}

export enum CloseStatus {
  Ok = 'Ok',
  Cancel = 'Cancel'
}
