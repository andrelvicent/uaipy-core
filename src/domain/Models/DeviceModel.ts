export class DeviceModel {
  uuid: string;
  name: string;
  securityKey: string;
  constructor(
    uuid: string,
    name: string,
    securityKey: string,
  ){
    this.uuid = uuid;
    this.name = name;
    this.securityKey = securityKey;
  }
}