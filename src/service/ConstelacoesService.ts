import { Constelacoes } from "../models/entity/Constelacoes";
import ConstelacoesRepositorio from "../models/entity/repositories/ConstelacoesRepositories";
import ConstelacoesEstrelasRepositorio from "../models/entity/repositories/ConstelacoesEstrelasRepositorio";

export default class ConstelacoesService{
  private constructor(){}
  
  private static instance: ConstelacoesService;
  public static getInstance(){
    if(this.instance) return this.instance;
    else return new ConstelacoesService();
  }

  public async findConstelacoesByPlanetas(id:number){
    const constelacoes = await ConstelacoesRepositorio.findBy({id});
    const mapConstelacoes = constelacoes.map(constelacoes =>({
      id: constelacoes.id,
      nome: constelacoes.nome,
      id_planetas: constelacoes.planeta_id
    }));
    return mapConstelacoes
  }

  public async findConstelacao(id:number): Promise<Constelacoes | null>{
    const constelacoes = await ConstelacoesRepositorio.findOneBy({id});
    return constelacoes
  }

  public async findEstrelasByConstelacoes(id:number){
    const constelacao = await ConstelacoesRepositorio.findOneBy({id});
    const constelacao_id = constelacao?.id;
    const estrelasConstelacoes = await ConstelacoesEstrelasRepositorio.findBy({constelacao_id});
    const mapEstrelasConstelacoes = estrelasConstelacoes.map(estrelasConstelacoes =>({
      id: estrelasConstelacoes.id,
      constelacao_id: estrelasConstelacoes.constelacao_id,
      estrela_id: estrelasConstelacoes.estrela_id
    }));
    
    return mapEstrelasConstelacoes
  }
}