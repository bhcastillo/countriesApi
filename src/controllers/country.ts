import { Request, Response } from 'express'
import axios                 from 'axios'

import { config } from '../config'

export class CountriesController {
  static async getCountry (req: Request, res: Response): Promise<Response> {
    const { country } = req.query

    const getCountry = await axios.get(config.URLS.GET_COUNTRY(country as string))
    return res.json({ data: getCountry.data })
  }
}
