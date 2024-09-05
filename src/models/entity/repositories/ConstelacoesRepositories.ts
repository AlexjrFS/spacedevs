import {AppDataSource} from "../../DataBase";
import { Constelacoes } from "../Constelacoes";

const ConstelacoesRepositorio = AppDataSource.getRepository(Constelacoes);

export default ConstelacoesRepositorio;