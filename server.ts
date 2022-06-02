import express, {Request, Response} from 'express'
import { IFTMController } from './src/presentation/controllers/IFTMController';
import bp from 'body-parser';
class Server {
  private iftmController: IFTMController;
  private app: express.Application;

  constructor(){
    this.app = express();
    this.configuration();
    this.iftmController = new IFTMController();
    this.routes();
  }

  public configuration(){
    this.app.set('port', 3000);
  }

  public async routes(){
    this.app.use(bp.json());
    this.app.use(bp.urlencoded({ extended: true }));
    this.app.use(`/api/iftm/`, this.iftmController.router);
    this.app.get("/", (req: Request, res: Response) => {
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