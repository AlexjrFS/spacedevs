import express, { Request, Response } from 'express';
import planetaRouter from './routes/RotasPlanetas';
import { AppDataSource } from './models/DataBase';
import "reflect-metadata";


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
// app.use('/api', routes);
app.use('/api/planetas',planetaRouter);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
  AppDataSource.initialize().then(r => console.log('Banco de Dados iniciado'));
});

