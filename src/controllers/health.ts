import { Request, Response } from "express"

export class HealthController {
  static getHealth = (_:Request, res:Response)=>{

    return res.status(200).json("OK")
  }
}