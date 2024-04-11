import express, { Router } from "express";
import * as projetController from "../controllers/projetController";
const router: Router = express.Router();

/**
 * @swagger
 * /projets/all:
 *   get:
 *     summary: Récupère la liste de tous les projets
 *     tags: [Projets]
 *     responses:
 *       200:
 *         description: La liste des projets
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Projet'
 */
router.get("/all", projetController.list_all_projets);
/**
 * @swagger
 * /projets/add:
 *   post:
 *     summary: Ajoute un nouveau projet
 *     tags: [Projets]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Projet'
 *     responses:
 *       200:
 *         description: Le projet a été créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Projet'
 *       500:
 *         description: Erreur lors de la création du projet
 */
router.post("/add", projetController.add_projet);
export default router;
