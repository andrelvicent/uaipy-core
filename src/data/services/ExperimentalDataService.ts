import { ExperimentalDataPostgresRepository } from "../../infra/repositories/ExperimentalDataPostgresRepository";

export class ExperimentalDataService {
  private iftmRepository: ExperimentalDataPostgresRepository
  constructor(){
    this.iftmRepository = new ExperimentalDataPostgresRepository();
  }

  public findAll = async () => {
    const iftmData = await this.iftmRepository.getAll();
    return iftmData;
  }

  public create = async (newRecord) => {
    return await this.iftmRepository.create(newRecord);
  }
}