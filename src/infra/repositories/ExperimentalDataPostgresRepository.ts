import { experimentalData } from "../../domain/entities/ExperimentalData";
import { ExperimentalDataModel } from "../../domain/Models/ExperimentalDataModel";

export class ExperimentalDataPostgresRepository {
  constructor(){}

  public getAll = async () => {
    try{
      return await experimentalData.findAll();
    } catch(error: any){
      console.log(error);
      throw error;
    }
  }

  public create = async (input: string) => {
    try{
      const newData = await experimentalData.create({
        data: input
      });

      return newData;
    }
    catch(error: any) {
      console.log(error);
      throw error;
    }
  }

    private adaptToDomain = (data: any) : ExperimentalDataModel => ({
    id: data.id,
    data: data.name,
  });
}