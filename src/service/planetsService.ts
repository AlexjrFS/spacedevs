import { Planetas } from '../models/entity/Planetas';
import PlanetasRepository from '../models/entity/repositories/RepositorioPlanetas';
import { AppDataSource } from '../models/DataBase';

export default class planetasService{

  private static instance: planetasService;
    public static getInstance(){
      if(!planetasService.instance){
          planetasService.instance = new planetasService();
      };
      return planetasService.instance;
  }

  public async findPlanetaById(id:number) : Promise<Planetas | null> {

    const planeta = await PlanetasRepository.findOneBy({ id });
    return planeta;
  } 
}