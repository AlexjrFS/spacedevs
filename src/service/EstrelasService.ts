import { Estrelas } from "../models/entity/Estrelas";
import ConstelacoesRepositorio from "../models/entity/repositories/ConstelacoesRepositories";
import EstrelasRepositorio from "../models/entity/repositories/EstrelasRepositories";
import PlanetasRepositorio from "../models/entity/repositories/PlanetasRepositories";


export default class EstrelasService{
  private constructor(){

  }
  
  private static instance: EstrelasService;
  public static getInstance(){
    if(this.instance) return this.instance;
    else return new EstrelasService();
    
  }


  public async findEstrelaById(id:number): Promise<Estrelas | null>{
    const estrela = await EstrelasRepositorio.findOneBy({id});
    return estrela
  }
  
  public async findEstrelasByPlanetas(id:number){
    const planeta = await PlanetasRepositorio.findOneBy({id});
    const id_conexao = planeta?.id
    const EstrelasByPlanetas = await EstrelasRepositorio.findBy({id_conexao});
    const mapEstrelasByPlanetas = EstrelasByPlanetas.map(EstrelasByPlanetas =>({
      id: EstrelasByPlanetas.id,
      nome: EstrelasByPlanetas,
      ascensao_reta: EstrelasByPlanetas.ascensao_reta, 
      decliacao: EstrelasByPlanetas.decliacao,
      blur_radius: EstrelasByPlanetas.blur_radius,
      spread_radius: EstrelasByPlanetas.spread_radius, 
      id_conexao: EstrelasByPlanetas.id_conexao,
    }));
    return mapEstrelasByPlanetas
  }

}