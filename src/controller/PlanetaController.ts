import { Request, Response } from "express";
import PlanetasService from "../service/PlanetaService";

export default class PlanetasController {
  private static instance: PlanetasController;

  private constructor(){}

  public static getInstance(){
    if(!PlanetasController.instance){
      PlanetasController.instance = new PlanetasController();
    }
    return PlanetasController.instance;
  }

  public async findPlanetaById(req: Request,res:Response){
    try{
      const planetaService = PlanetasService.getInstance();
      const id = parseInt(req.params.id);
      if(!id){
          res.status(400).send({err:"planeta nao encontrada", id:{id}})
      }
      res.json(await planetaService.findPlanetaById(id));
    }catch(err){
      console.log(err)
      return res.status(400).send({err:"nao foi possivel encontrar o planeta"})
    }
  }

  public async findAllPlanetas(req: Request, res:Response){
    const planetaService = PlanetasService.getInstance()
    res.json(await planetaService.findAllPlanetas())
  }
}