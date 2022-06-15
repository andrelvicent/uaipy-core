import { sign, verify } from "jsonwebtoken";
import 'dotenv/config'

export class Encrypter {
  public encrypt = async (entityUuid: string): Promise<string> => {
    const token = await sign(
      {
        uuid: entityUuid,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_TIMEOUT,
      }
    );
    return token;
  }

  public validate = (jsonWebToken: string): any => {
    try {
      const decoded = verify(jsonWebToken, process.env.JWT_SECRET) as any;
      return decoded;
    } catch(error) {
      throw error;
    }
  }
}