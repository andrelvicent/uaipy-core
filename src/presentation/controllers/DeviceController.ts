import { Router, Request, Response } from "express";
import { DeviceService } from "../../data/services/DeviceService";

export class DeviceController {
  public router: Router;
  private deviceService: DeviceService;

  constructor(){
    this.router = Router();
    this.deviceService = new DeviceService();
    this.routes();
  }

  public index = async (req: Request, res: Response) => {
    console.log(req);
    res.send(await this.deviceService.findAll());
  }

  public create = async (req: Request, res: Response) => {
    try{
      console.log(req.body);
      const dataReceived = JSON.stringify(req.body);
      const data = JSON.parse(dataReceived);
      const response = await this.deviceService.create(data);
      res.status(201).send(response);
    }catch(error: any){
      console.log(error)
    }
  }
  
  public authenticate = async (req: Request, res: Response) => {
    try{
      const data = req.body;
      const response = await this.deviceService.authenticate(data.name, data.deviceKey)
      res.status(200).send({AcessToken: response });
    }catch(error: any){
      res.status(error.statusCode || 500).send(error.params);
    }
  }

  public routes(){
    this.router.get('/', this.index);
    this.router.post('/auth', this.authenticate);
    this.router.post('/', this.create);
  }
}