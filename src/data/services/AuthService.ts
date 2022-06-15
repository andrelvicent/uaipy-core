import { Unauthorized } from "../../domain/errors";
import { Encrypter } from "../adapters/Encrypter";

export class AuthService {
  private encrypter: Encrypter;
  constructor(){
    this.encrypter = new Encrypter();
  }

  public createAccessToken = async (entityUuid: string): Promise<string> => {
    return await this.encrypter.encrypt(entityUuid);
  }

  public validateAccessToken = (jsonWebToken: string): Promise<string> => {
    try {
      const decryptedData = this.encrypter.validate(jsonWebToken);
      return decryptedData.uuid;
    }catch(error: any){
      throw new Unauthorized({
        code: 'INVALID-TOKEN',
        message: error.message,
        details: {}
      });
    }
  }
}