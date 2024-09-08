import { Constelacoes } from "../models/entity/Constelacoes";
import ConstelacoesRepositorio from "../models/entity/repositories/ConstelacoesRepositories";
import ConstelacoesEstrelasRepositorio from "../models/entity/repositories/ConstelacoesEstrelasRepositorio";
import { ConstelacoesEstrelas } from "../models/entity/ConstelacoesEstrelas";
import ConstelacoesController from "../controller/ConstelacoesController";
import { Column } from "typeorm";

export default class ConstelacoesService{
  private constructor(){}
  
  private static instance: ConstelacoesService;
  public static getInstance(){
    if(this.instance) return this.instance;
    else return new ConstelacoesService();
  }

  public async findConstelacoesByPlanetas(planeta_id:number){
    const constelacoes = await ConstelacoesRepositorio.findBy({planeta_id});
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


  public async saveConstelacaoAndEstrelas(constelacaoEstrelas: ConstelacoesEstrelas): Promise<ConstelacoesEstrelas> {
    try {
      const newconstelacaoEstrelas = new ConstelacoesEstrelas();
  
      if (typeof constelacaoEstrelas.estrela_id === 'number' && constelacaoEstrelas.estrela_id > 1) {
        newconstelacaoEstrelas.constelacao_id = constelacaoEstrelas.constelacao_id;
        newconstelacaoEstrelas.estrela_id = constelacaoEstrelas.estrela_id;
        
      } else if (Array.isArray(constelacaoEstrelas.estrela_id)) {
        for (let index = 0; index < constelacaoEstrelas.estrela_id.length; index++) {
          
          const estrelaId = constelacaoEstrelas.estrela_id[index];
          if (estrelaId !in this.findEstrelasByConstelacoes(newconstelacaoEstrelas.constelacao_id)){
            const novaEntrada = new ConstelacoesEstrelas();
            novaEntrada.constelacao_id = constelacaoEstrelas.constelacao_id;
            novaEntrada.estrela_id = estrelaId;
            await ConstelacoesEstrelasRepositorio.save(novaEntrada);
          } 
        }
  
        return Promise.resolve(newconstelacaoEstrelas);
      }
      const savedConstelacaoAndEstrelas = await ConstelacoesEstrelasRepositorio.save(newconstelacaoEstrelas);
      return Promise.resolve(savedConstelacaoAndEstrelas);
    } catch (err) {
      console.log("erro");
      return Promise.reject(err);
  }
  }

  public async saveConstelacao(constelacao: Constelacoes):Promise<Constelacoes>{
    try{
      const newConstelacao = new Constelacoes();

      newConstelacao.id;
      newConstelacao.nome = constelacao.nome;
      newConstelacao.planeta_id = constelacao.planeta_id;

      const saveConstelacao = await ConstelacoesRepositorio.save(newConstelacao);

      return Promise.resolve(saveConstelacao);
    } catch (err) {
      console.log("erro");
      return Promise.reject(err);
  }
  }

  public async deleteConstelacao(id:number):Promise<void>{
    await ConstelacoesRepositorio.delete(id);
    await ConstelacoesEstrelasRepositorio.delete({constelacao_id:id});
  }

  public async findAllConstelacoes() {
    const constelacoes = await ConstelacoesRepositorio.find(); 
    const mapConstelacoes = constelacoes.map(constelacoes =>({
      id: constelacoes.id,
      nome: constelacoes.nome,
      planeta_id: constelacoes.planeta_id,
    }));
    return mapConstelacoes
  }

  public async updateConstelacao(id:number,constelacao:Constelacoes):Promise<void>{
    const constelacaoAlterada = await ConstelacoesRepositorio.findOneBy(({id}));
    if(constelacaoAlterada){
        constelacaoAlterada.nome = constelacao.nome;
        await ConstelacoesRepositorio.save(constelacaoAlterada);
    }
    Promise.resolve();
  }

  
}