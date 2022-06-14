import { Router } from 'express';
import { getAllExperience } from "../controllers/portfolio/portfolio.controller";
import authRoutes from "./auth";
import customerRoutes from "./customer";
import contentRoutes from "./content";

const router = Router();

// Usuários
authRoutes(router);

// Clientes
customerRoutes(router);

// Conteúdo
contentRoutes(router);

// Portifolio
router.get('/api/portfolio', getAllExperience);


export default router;