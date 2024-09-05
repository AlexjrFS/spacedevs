import { Planetas } from "../models/entity/Planetas";
import PlanetasRepositorio from "../models/entity/repositories/PlanetasRepositories";

export default class PlanetasService{
  private constructor(){

  }
  
  private static instance: PlanetasService;
  public static getInstance(){
    if(this.instance) return this.instance;
    else return new PlanetasService();
    
  }

  public async findPlanetaById(id:number) : Promise<Planetas | null> {
    const planeta = await PlanetasRepositorio.findOneBy({id}); 
    return planeta
  }

  public async findAllPlanetas() {
    const planetas = await PlanetasRepositorio.find(); 
    const mapPlanetas = planetas.map(planetas =>({
      id: planetas.id,
      nome: planetas.nome
    }));
    return planetas
  }
  
}