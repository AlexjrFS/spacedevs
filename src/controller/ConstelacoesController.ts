import { Request, Response } from "express";
import { AppDataSource } from "../models/DataBase";
import ConstelacoesService from "../service/ConstelacoesService";

export default class ConstelacoesController {
  private static instance: ConstelacoesController;

  private constructor(){}

  public static getInstance(){
    if(!ConstelacoesController.instance){
      ConstelacoesController.instance = new ConstelacoesController();
    }
    return ConstelacoesController.instance;
  }

  public async findConstelacoesByPlanetas(req: Request, res: Response){
    try{
      const constelacoesService = ConstelacoesService.getInstance();
      const id = parseInt(req.params.id);
      if(!id){
        res.status(400).send({err:"nao foi possivel encontrar o planeta e suas cosntelacoes", id:{id}})
      }
      res.json(await constelacoesService.findConstelacoesByPlanetas(id))
    }catch(err){
      console.log(err)
      return res.status(400).send({err:"nao foi possivel encontrar o planeta e suas cosntelacoes"})
    }
  } 

  public async findEstrelasByConstelacoes(req: Request, res: Response){
    try{
      const constelacoesService = ConstelacoesService.getInstance();
      const id = parseInt(req.params.id);
      if(!id){
        res.status(400).send({err:"nao foi possivel encontrar as estrelas e suas cosntelacoes", id:{id}})
      }
      res.json(await constelacoesService.findEstrelasByConstelacoes(id))
    }catch(err){
      console.log(err)
      return res.status(400).send({err:"nao foi possivel encontrar as estrelas e suas cosntelacoes"})
    }
  }
}