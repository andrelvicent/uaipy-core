import express, {Request, Response} from 'express'
import bp from 'body-parser';
import { DeviceController } from './src/presentation/controllers/DeviceController';
import { ExperimentalDataController } from './src/presentation/controllers/ExperimentalDataController';
class Server {
  private iftmController: ExperimentalDataController;
  private deviceController: DeviceController;
  private app: express.Application;

  constructor(){
    this.app = express();
    this.configuration();
    this.iftmController = new ExperimentalDataController();
    this.deviceController = new DeviceController();
    this.routes();
  }

  public configuration(){
    this.app.set('port', process.env.PORT || 3000);
    this.app.use(bp.json());
    this.app.use(bp.urlencoded({ extended: true }));
  }

  public async routes(){
    this.app.use(`/api/devices/`, this.deviceController.router);
    this.app.use(`/api/iftm/`, this.iftmController.router);
    this.app.get("/", (_req: Request, res: Response) => {
      res.send("Tech sem fronteiras!");
    });
  }

  public start(){
    this.app.listen(this.app.get('port'), () => {
      console.log(`Server is listening ${this.app.get('port')} port.`);
    });
  }
}

const server = new Server();
server.start();