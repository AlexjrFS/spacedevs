import express, { Request, Response } from 'express';
import { AppDataSource } from './models/DataBase';
import "reflect-metadata";
import Rotas from './routes/Rotas';

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', Rotas);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
  AppDataSource.initialize().then(r => console.log('Banco de Dados iniciado'));
});

