import { Router, Request, Response } from "express";
import { defaultHttpHeaders } from "../index";
import { AuthService } from "../../data/services/AuthService";
import { ExperimentalDataService } from "../../data/services/ExperimentalDataService";

export class ExperimentalDataController {
  public router: Router;
  private iftmService: ExperimentalDataService;
  private authService: AuthService;

  constructor(){
    this.router = Router();
    this.iftmService = new ExperimentalDataService();
    this.authService = new AuthService();
    this.routes();
  }

  public index = async (req: Request, res: Response) => {
    res.status(200).set(defaultHttpHeaders()).send(await this.iftmService.findAll());
  }

  public create = async (req: Request, res: Response) => {
    try{
      this.getAuthorization(req);
      const data = req.body.data;
      const response = await this.iftmService.create(data)
      res.status(201).set(defaultHttpHeaders()).send(response);
    }catch(error: any){
      res.status(error.statusCode || 500).set(defaultHttpHeaders()).send(error.params);
    }
  }

  private getAuthorization  = (req: Request) => {
      const accessToken = req.get('Authorization');
      this.authService.validateAccessToken(accessToken);
  } 

  public routes(){
    this.router.get('/', this.index);
    this.router.post('/', this.create);
  }
}