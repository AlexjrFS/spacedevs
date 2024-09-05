import {AppDataSource} from "../../DataBase";
import { Planetas } from "../Planetas";

const PlanetasRepositorio = AppDataSource.getRepository(Planetas);

export default PlanetasRepositorio