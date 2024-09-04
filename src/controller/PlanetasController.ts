import { Request, Response } from "express";
import { AppDataSource } from "../models/DataBase";

import planetasService from "../service/planetsService";


export default class PlanetasController {
  private static instance: PlanetasController;

  public static getInstance(){
      if(!PlanetasController.instance){
        PlanetasController.instance = new PlanetasController();
      }
      return PlanetasController.instance;
  }

  public async PlanetaById(req: Request,res: Response){
    try{
      const planetaService = planetasService.getInstance();
      const id = parseInt(req.params.id);
      return res.json(await planetaService.findPlanetaById(id));
    }catch(err){
        console.log(err)
        return res.status(400).send({err:"nao foi possivel encontrar o planeta"})
    }
  }

  // public async listPlaneta(req: Request,res: Response){
  //   const planetaService = planetasService.getInstance();
  //   res.json(await planetaService.listPlanetas());
  // }
}