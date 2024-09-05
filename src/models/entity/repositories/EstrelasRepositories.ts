import {AppDataSource} from "../../DataBase";
import { Estrelas } from "../Estrelas";

const EstrelasRepositorio = AppDataSource.getRepository(Estrelas);

export default EstrelasRepositorio;