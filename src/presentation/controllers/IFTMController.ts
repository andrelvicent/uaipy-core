import { Router, Request, Response } from "express";
import { IFTMService } from "../../data/services/IFTMService";

export class IFTMController {
  public router: Router;
  private iftmService: IFTMService;

  constructor(){
    this.router = Router();
    this.iftmService = new IFTMService();
    this.routes();
  }

  public index = async (req: Request, res: Response) => {
    res.send(await this.iftmService.findAll());
  }

  public create = async (req: Request, res: Response) => {
    try{
      const data = JSON.stringify(req.body);
      await this.iftmService.create(data)
      res.send('ok');
    }catch(error: any){
      console.log(error)
    }
  }

  
  public update = async (req: Request, res: Response) => {
    res.send(this.iftmService.update());
  }

  
  public delete = async (req: Request, res: Response) => {
    res.send(this.iftmService.delete());
  }

  public routes(){
    this.router.get('/', this.index);
    this.router.post('/', this.create);
    this.router.put('/:uuid', this.update);
    this.router.delete('/:uuid', this.delete);
  }
}