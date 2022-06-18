import { BadRequest } from "../../domain/errors";
import { deviceAuthenticationError } from "../../domain/errors/ErrorCode";
import { DeviceModel } from "../../domain/Models/DeviceModel";
import { DevicePostgresRepository } from "../../infra/repositories/DevicePostgresRepository";
import { AuthService } from "./AuthService";

export class DeviceService {
  private repository: DevicePostgresRepository;
  private authService: AuthService;

  constructor(){
    this.repository = new DevicePostgresRepository();
    this.authService = new AuthService();
  }

  public find = async (deviceName: string): Promise<DeviceModel> => {
    const device = await this.repository.find(deviceName);
    if(!device){
      throw new BadRequest(deviceAuthenticationError);
    }
    return device;
  }

  public authenticate = async (deviceName: string, deviceKey: string) => {
    const device = await this.find(deviceName)
    if(deviceKey != device.securityKey){
      throw new BadRequest(deviceAuthenticationError);
    }
    return await this.authService.createAccessToken(device.uuid);
  }
}