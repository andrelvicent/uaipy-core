import { IFTM } from "../../domain/models/IFTM";

export class IFTMPostgresRepository {
  constructor(){}

  public getAll = async () => {
    try{
      console.log(await IFTM.findAll());
    } catch(error: any){
      console.log(error);
    }
  }

  public create = async (input: string) => {
    try{
      const newData = await IFTM.create({
        data: input
      });

      console.log(newData);
    }
    catch(error: any) {
      console.log(error);
    }
  }
}