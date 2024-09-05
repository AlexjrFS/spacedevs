import {AppDataSource} from "../../DataBase";
import { ConstelacoesEstrelas } from "../ConstelacoesEstrelas";

const ConstelacoesEstrelasRepositorio = AppDataSource.getRepository(ConstelacoesEstrelas);

export default ConstelacoesEstrelasRepositorio;