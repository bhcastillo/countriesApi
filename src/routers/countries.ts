import { Router }              from 'express'
import { CountriesController } from '../controllers/country'

export const countriesRouter: Router = Router()

countriesRouter
  .route('/country')
  .get(CountriesController.getCountry)
