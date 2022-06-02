import fs from 'fs';

export class IFTMPostgresRepository {
  private txtFile: string;
  constructor(){
    this.txtFile = "./src/infra/repositories/repo.txt"
  }

  public get = async () => {
    const iftmData = fs.readFileSync(this.txtFile, 'utf8');
    return iftmData;
  }

  public create = async (data: string) => {
    fs.appendFile(this.txtFile, data, (error) => {
      if(error) console.log(error);
    });
  }
}