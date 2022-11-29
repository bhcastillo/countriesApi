import { Router }           from 'express'
import { HealthController } from '../controllers/health'

export const indexRouter: Router = Router()

indexRouter
  .route('/health')
  .get(HealthController.getHealth)
