import { DataSource } from "typeorm";
import { Planetas } from "./entity/Planetas";
import { Estrelas } from "./entity/Estrelas";
import  dotenv from 'dotenv';
import { Constelacoes } from "./entity/Constelacoes";
import { ConstelacoesEstrelas } from "./entity/ConstelacoesEstrelas";

dotenv.config()

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.HOST,
  port: 3306,
  username: process.env.USER,
  password: process.env.PASSWORD,
  database: "base",
  logging: true,
  entities: [Planetas, Estrelas, Constelacoes, ConstelacoesEstrelas],
  subscribers: [],
});

AppDataSource.initialize().then(async () => {
  console.log("Conexão com o banco de dados estabelecida");
}).catch(error => console.log("Erro na conexão:", error));