import { action, observable } from 'mobx';

export class RecorderStore {
  @observable.ref public DeviceSeqNo: string;

  public constructor() {
    this.DeviceSeqNo = '';
  }

  @action public updateDeviceSeqNo = async (newDeviceSeqNo: string) => {
    this.DeviceSeqNo = newDeviceSeqNo;
  };
}
