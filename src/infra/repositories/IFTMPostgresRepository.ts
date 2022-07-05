import { IFTM } from "../../domain/entities/IFTM";

export class IFTMPostgresRepository {
  constructor(){}

  public getAll = async () => {
    try{
      return await IFTM.findAll();
    } catch(error: any){
      console.log(error);
    }
  }

  public create = async (input: string) => {
    try{
      const filterData = input.replace(/[\\]/g, ''); //para remover a (")
      const newData = await IFTM.create({
        data: filterData
      });
      console.log(newData);
      return newData;
    }
    catch(error: any) {
      console.log(error);
    }
  }
}