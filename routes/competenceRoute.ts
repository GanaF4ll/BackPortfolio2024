import express, { Router } from "express";
import * as competenceController from "../controllers/competenceController";
const router: Router = express.Router();

router.get("/all", competenceController.list_all_competences);
router.post("/add", competenceController.add_competence);

export default router;
