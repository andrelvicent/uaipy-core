import { device } from "../../domain/models/Device";
import { IFTM } from "../../domain/models/IFTM";

export class DevicePostgresRepository {
  constructor(){}

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
}