import express, { Router } from "express";
import * as certificationController from "../controllers/certificationController";
const router: Router = express.Router();

/**
 * @swagger
 * /certifications/all:
 *   get:
 *     summary: Récupère la liste de toutes les certifications
 *     tags: [Certifications]
 *     responses:
 *       200:
 *         description: La liste des certifications
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Certification'
 */
router.get("/all", certificationController.list_all_certifications);
/**
 * @swagger
 * /certifications/add:
 *   post:
 *     summary: Ajoute une nouvelle certification
 *     tags: [Certifications]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Certification'
 *     responses:
 *       200:
 *         description: La certification a été créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Certification'
 *       500:
 *         description: Erreur lors de la création de la certification
 */
router.post("/add", certificationController.create_a_certification);
export default router;
