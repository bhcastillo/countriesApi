import bodyParser from 'body-parser';
import express, {Application} from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors'
import { countriesRouter } from './routers/countries';

export class App {

  port: number = 3000

  private app: Application


  constructor(){
    this.app = express()
    this.initConfig()
    this.routes()

  }

  private initConfig(){
    this.app.use(morgan("dev"))
    this.app.use(helmet())
    this.app.use(bodyParser.json())
    this.app.use(cors())
  }

  private routes (){
    this.app.use('', countriesRouter)
  }

  listen (){
    this.app.listen(this.port)
  }
}

