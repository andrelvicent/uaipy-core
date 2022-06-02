import { IFTMPostgresRepository } from "../../infra/repositories/IFTMPostgresRepository";

export class IFTMService {
  private iftmRepository: IFTMPostgresRepository
  constructor(){
    this.iftmRepository = new IFTMPostgresRepository();
  }

  public findAll = async () => {
    const iftmData = await this.iftmRepository.get();
    return iftmData;
  }

  public create = async (newRecord) => {
    return await this.iftmRepository.create(newRecord);
  }

  public update = () => {
    return "update from Service";
  }

  public delete = () => {
    return "delete from Service";
  }
}