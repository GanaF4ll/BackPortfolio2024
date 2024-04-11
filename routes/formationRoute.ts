import express, { Router } from "express";
import * as formationController from "../controllers/formationController";
const router: Router = express.Router();

/**
 * @swagger
 * /formations/all:
 *   get:
 *     summary: Récupère la liste de toutes les formations
 *     tags: [Formations]
 *     responses:
 *       200:
 *         description: La liste des formations
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Formation'
 */
router.get("/all", formationController.list_all_formations);
/**
 * @swagger
 * /formations/add:
 *   post:
 *     summary: Ajoute une nouvelle formation
 *     tags: [Formations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Formation'
 *     responses:
 *       200:
 *         description: La formation a été créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Formation'
 *       500:
 *         description: Erreur lors de la création de la formation
 */
router.post("/add", formationController.add_formation);
export default router;
