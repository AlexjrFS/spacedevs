import { Router } from 'express';
import PlanetasController from '../controller/PlanetasController';
import planetasService from '../service/planetsService';

const planetaRouter = Router();
  planetaRouter.get('/dados-planeta',PlanetasController.getInstance().PlanetaById);
  // planetaRouter.get('/lista-planetas',PlanetasController.getInstance().listPlaneta);

export default planetaRouter;
