import { Request, Response } from 'express'

export class HealthController {
  static getHealth = async (_: Request, res: Response): Promise<Response> => {
    return res.status(200).json('OK')
  }
}
