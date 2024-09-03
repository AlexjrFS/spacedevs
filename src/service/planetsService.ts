import {Request} from 'express';
import { Planetas } from '../models/entity/Planetas';
import PlanetasRepository from '../models/entity/repositores/RepositorioPlanetas';

export default class planetasService{

  private static instance: planetasService;
    public static getInstance(){
      if(!planetasService.instance){
          planetasService.instance = new planetasService();
      };
      return planetasService.instance;
  }

  public async findPlanetaById(id:number) : Promise<Planetas | null> {
    const planeta = await PlanetasRepository.findOneBy({id}); 
    return planeta
  }

  public async listPlanetas(){
    const res =  await PlanetasRepository.find();

    const mapRes = res.map(res => ({
        id: res.id,
        name: res.name
    }));
    
    return mapRes
}
}