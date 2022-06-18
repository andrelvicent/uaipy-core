import { device } from "../../domain/entities/Device";
import { DeviceModel } from "../../domain/Models/DeviceModel";

export class DevicePostgresRepository {
  constructor(){}

  public find = async (deviceName: string): Promise<DeviceModel> =>  {
    try{
      const data = await device.findOne({ where: { name: deviceName } });
      const response = data ? this.adaptToDomain(data) : undefined;
      return response;
    } catch(error: any){
      console.log(error);
      throw error;
    }
  }

  private adaptToDomain = (data: any) : DeviceModel => ({
    uuid: data.uuid,
    name: data.name,
    securityKey: data.securityKey,
  });
}