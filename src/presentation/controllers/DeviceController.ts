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
    res.send(await this.deviceService.findAll());
  }

  public create = async (req: Request, res: Response) => {
    try{
      console.log(req.body);
      const dataReceived = JSON.stringify(req.body);
      const data = JSON.parse(dataReceived);
      const response = await this.deviceService.create(data);
      res.send(response);
    }catch(error: any){
      console.log(error)
    }
  }

  
  public update = async (req: Request, res: Response) => {
    res.send(this.deviceService.update());
  }

  
  public delete = async (req: Request, res: Response) => {
    res.send(this.deviceService.delete());
  }

  public routes(){
    this.router.get('/', this.index);
    this.router.post('/', this.create);
    this.router.put('/:uuid', this.update);
    this.router.delete('/:uuid', this.delete);
  }
}