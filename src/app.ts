import bodyParser               from 'body-parser'
import express, { Application } from 'express'
import helmet                   from 'helmet'
import morgan                   from 'morgan'
import cors                     from 'cors'

import { countriesRouter } from './routers/countries'
import { indexRouter }     from './routers'
import { config }          from './config'

export class App {
  port: number = config.PORT

  private readonly app: Application

  constructor () {
    this.app = express()
    this.initConfig()
    this.routes()
  }

  private initConfig (): void {
    this.app.use(morgan('dev'))
    this.app.use(helmet())
    this.app.use(bodyParser.json())
    this.app.use(cors())
  }

  private routes (): void {
    this.app.use('', indexRouter)
    this.app.use('/api', countriesRouter)
  }

  listen (): void {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`)
    })
  }
}
