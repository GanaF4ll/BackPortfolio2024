import express, { Router } from "express";
import * as projetController from "../controllers/projetController";
const router: Router = express.Router();
import { checkToken } from "../middlewares/jwtMiddleware";

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
 *       401:
 *         description: Non autorisé
 */
router.get("/all", projetController.list_all_projets);

/**
 * @swagger
 * /projets/add:
 *   post:
 *     security:
 *       - bearerAuth: []
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
 *       401:
 *         description: Non autorisé
 *       500:
 *         description: Erreur lors de la création du projet
 */
router.post("/add", checkToken, projetController.add_projet);

/**
 * @swagger
 * /projets/update/{projetId}:
 *   put:
 *     security:
 *       - bearerAuth: []
 *     summary: Met à jour un projet existant
 *     tags: [Projets]
 *     parameters:
 *       - in: path
 *         name: projetId
 *         required: true
 *         schema:
 *           type: string
 *         description: L'ID du projet à mettre à jour
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Projet'
 *     responses:
 *       200:
 *         description: Le projet a été mis à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Projet'
 *       401:
 *         description: Non autorisé
 *       500:
 *         description: Erreur lors de la mise à jour du projet
 */
router.put("/update/:projetId", checkToken, projetController.update_a_projet);

/**
 * @swagger
 * /projets/delete/{projetId}:
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: Supprime un projet existant
 *     tags: [Projets]
 *     parameters:
 *       - in: path
 *         name: projetId
 *         required: true
 *         schema:
 *           type: string
 *         description: L'ID du projet à supprimer
 *     responses:
 *       200:
 *         description: Le projet a été supprimé avec succès
 *       401:
 *         description: Non autorisé
 *       500:
 *         description: Erreur lors de la suppression du projet
 */
router.delete(
  "/delete/:projetId",
  checkToken,
  projetController.delete_a_projet
);

export default router;
