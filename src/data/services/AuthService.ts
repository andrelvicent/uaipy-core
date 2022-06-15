import { Encrypter } from "../adapters/Encrypter";
import { DeviceService } from "./DeviceService";

export class AuthService {
  private encrypter: Encrypter;
  constructor(){
    this.encrypter = new Encrypter();
  }

  public createAccessToken = async (entityUuid: string): Promise<string> => {
    return await this.encrypter.encrypt(entityUuid);
  }

  public validateAccessToken = async (jsonWebToken: string) => {
    return await this.encrypter.encrypt(entityUuid);
  }
}