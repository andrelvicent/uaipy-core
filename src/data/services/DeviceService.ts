import { DevicePostgresRepository } from "../../infra/repositories/DevicePostgresRepository";

export class DeviceService {
  private deviceRepository: DevicePostgresRepository
  constructor(){
    this.deviceRepository = new DevicePostgresRepository();
  }

  public findAll = async () => {
    const iftmData = await this.deviceRepository.getAll();
    return iftmData;
  }

  public create = async (newRecord) => {
    return await this.deviceRepository.create(newRecord);
  }

  public update = () => {
    return "update from Service";
  }

  public delete = () => {
    return "delete from Service";
  }
}