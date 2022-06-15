import { device } from "../../domain/entities/Device";
import { DeviceModel } from "../../domain/Models/DeviceModel.ts";

export class DevicePostgresRepository {
  constructor(){}

  public find = async (deviceName: string): Promise<DeviceModel> =>  {
    try{
      const data = await device.findOne({ where: { name: deviceName } });
      return this.adaptToDomain(data);
    } catch(error: any){
      console.log(error);
    }
  }
  
  public getAll = async () => {
    try{
      return await device.findAll();
    } catch(error: any){
      console.log(error);
    }
  }

  public create = async (input: any) => {
    try{
      const newData = await device.create({
        name: input.devices.name,
        securityKey: input.devices.securitykey
      });

      return newData;
    }
    catch(error: any) {
      console.log(error);
    }
  }

  private adaptToDomain = (data: any) : DeviceModel => ({
    uuid: data.uuid,
    name: data.name,
    securityKey: data.securityKey,
  });
}