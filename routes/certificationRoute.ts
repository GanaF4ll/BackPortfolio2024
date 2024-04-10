import express, { Router } from "express";
import * as certificationController from "../controllers/certificationController";
const router: Router = express.Router();

router.get("/all", certificationController.list_all_certifications);
router.post("/add", certificationController.create_a_certification);

export default router;
