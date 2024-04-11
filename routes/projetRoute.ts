import express, { Router } from "express";
import * as projetController from "../controllers/projetController";
const router: Router = express.Router();

router.get("/all", projetController.list_all_projets);
router.post("/add", projetController.add_projet);

export default router;
