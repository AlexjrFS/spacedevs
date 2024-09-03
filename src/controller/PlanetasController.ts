import { Request, Response } from "express";
import { AppDataSource } from "../models/DataBase";

import planetasService from "../service/planetsService";


export default class PlanetasController {
  private static instance: PlanetasController;
  private constructor(){

  }

  public static getInstance(){
      if(!PlanetasController.instance){
        PlanetasController.instance = new PlanetasController();
      }
      return PlanetasController.instance;
  }

  public async listPlaneta(req: Request,res: Response){
      const planetaService = planetasService.getInstance();
      res.json(await planetaService.listPlanetas());
  }

  public async findPlanetaById(req: Request,res: Response){
      try{
      const planetaService = planetasService.getInstance();
      const id = req.params.id;
      if(!id){
          res.status(400).send({err:"planeta nao encontrado"})
      }
      res.json(await planetaService.findPlanetaById(id));
    }catch(err){
        console.log(err)
        return res.status(400).send({err:"nao foi possivel encontrar o planeta"})
    }
  }
}