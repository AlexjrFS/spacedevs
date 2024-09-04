import { DataSource } from "typeorm";
import { Planetas } from "./entity/Planetas"
import  dotenv from 'dotenv'

dotenv.config()

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.HOST,
  port: 3306,
  username: process.env.USER,
  password: process.env.PASSWORD,
  database: "base",
  logging: true,
  entities: [Planetas],
  subscribers: [],
  migrations: []
});

AppDataSource.initialize().then(async () => {
  console.log("Conexão com o banco de dados estabelecida");
}).catch(error => console.log("Erro na conexão:", error));