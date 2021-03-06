import { BadRequest } from "../../domain/errors";
import { DevicePostgresRepository } from "../../infra/repositories/DevicePostgresRepository";
import { AuthService } from "./AuthService";

export class DeviceService {
  private deviceRepository: DevicePostgresRepository;
  private authService: AuthService;
  constructor(){
    this.deviceRepository = new DevicePostgresRepository();
    this.authService = new AuthService();
  }

  public authenticate = async (deviceName: string, deviceKey: string) => {
    const device = await this.deviceRepository.find(deviceName);
    if(deviceKey != device.securityKey){
      throw new BadRequest({
        code: 'AUTH-INVALID-KEY',
        message: 'Senha incorreta',
        details: {
          reference: 'Caso não lembre de sua senha, por favor, entre em contato com o administrador o mais rápido possível. '
        }
      });
    }
    return await this.authService.createAccessToken(device.uuid);
  }

  public findAll = async () => {
    const devices = await this.deviceRepository.getAll();
    return devices;
  }

  public create = async (newRecord) => {
    return await this.deviceRepository.create(newRecord);
  }
}