import { Router } from "express";
import { HealthController } from "../controllers/health";

export const countriesRouter:Router = Router()


countriesRouter
  .route('/health')
  .get(HealthController.getHealth)