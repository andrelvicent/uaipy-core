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
    this.router.post('/auth', this.authenticate);
  }
}