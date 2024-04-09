import express, { Router } from "express";
import * as formationController from "../controllers/formationController";
const router: Router = express.Router();

router.get("/all", formationController.list_all_formations);
router.post("/add", formationController.add_formation);

export default router;
