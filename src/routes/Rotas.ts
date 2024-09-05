import express from "express";
import PlanetasController from "../controller/PlanetaController";
import EstrelasController from "../controller/EstrelasController";
import ConstelacoesController from "../controller/ConstelacoesController";

const Rotas = express.Router()

Rotas.get("/get-planeta/:id", PlanetasController.getInstance().findPlanetaById);

Rotas.get("/get-all-planetas", PlanetasController.getInstance().findAllPlanetas);

Rotas.get("/get-estrela/:id", EstrelasController.getInstance().findEstrelaById);

Rotas.get("/get-estrelas-by-planetas/:id", EstrelasController.getInstance().findEstrelasByPlanetas);

Rotas.get("/get-constelacoes-by-planetas/:id", ConstelacoesController.getInstance().findConstelacoesByPlanetas);

Rotas.get("/get-estrelas-by-constelacoes/:id", ConstelacoesController.getInstance().findEstrelasByConstelacoes);

Rotas.post("/save-estrelas-by-constelacoes/", ConstelacoesController.getInstance().saveConstelacaoAndEstrelas);

Rotas.post("/save-constelacoes/", ConstelacoesController.getInstance().saveConstelacao);
export default Rotas;