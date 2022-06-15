import { Router, Request, Response } from "express";
import { defaultHttpHeaders } from "./../index";
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
    res.status(200).set(defaultHttpHeaders()).send(await this.iftmService.findAll());
  }

  public create = async (req: Request, res: Response) => {
    try{
      const data = req.body.data;
      const response = await this.iftmService.create(data)
      res.status(201).set(defaultHttpHeaders()).send(response);
    }catch(error: any){
      res.status(500).set(defaultHttpHeaders()).send('error');
    }
  }

  public routes(){
    this.router.get('/', this.index);
    this.router.post('/', this.create);
  }
}