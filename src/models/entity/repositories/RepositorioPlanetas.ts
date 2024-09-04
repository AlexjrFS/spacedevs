import { AppDataSource } from "../../DataBase";
import { Planetas } from "../Planetas";

const PlanetasRepository = AppDataSource.getRepository(Planetas)

export default PlanetasRepository