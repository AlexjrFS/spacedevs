import { Request, Response } from "express";
import { AppDataSource } from "../models/DataBase";
import EstrelasService from "../service/EstrelasService";
import PlanetasService from "../service/PlanetaService";

export default class EstrelasController {
  private static instance: EstrelasController;

  private constructor(){}

  public static getInstance(){
    if(!EstrelasController.instance){
      EstrelasController.instance = new EstrelasController();
    }
    return EstrelasController.instance;
  }

  public async findEstrelaById(req: Request, res: Response){
    try{
      const estrelasService = EstrelasService.getInstance();
      const id = parseInt(req.params.id);
      if(!id){
        res.status(400).send({err:"estrela nao encontrada", id:{id}})
      }
      res.json(await estrelasService.findEstrelaById(id));
    } catch(err){
      console.log(err)
      return res.status(400).send({err:"nao foi possivel encontrar a estrela"})
    }
  }

  public async findEstrelasByPlanetas(req: Request, res: Response){
    try{
      const estrelasService = EstrelasService.getInstance();
      const id = parseInt(req.params.id);
      if(!id){
        res.status(400).send({err:"planeta não encontrado", id:{id}})
      }
      res.json(await estrelasService.findEstrelasByPlanetas(id))
    }catch(err){
      console.log(err)
      return res.status(400).send({err:"nao foi possivel encontrar o planeta"})
    }
  }
}