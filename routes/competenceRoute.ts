import express, { Router } from "express";
import * as competenceController from "../controllers/competenceController";
const router: Router = express.Router();
import { checkToken } from "../middlewares/jwtMiddleware";

/**
 * @swagger
 * /competences/all:
 *   get:
 *     summary: Récupère la liste de toutes les compétences
 *     tags: [Competences]
 *     responses:
 *       200:
 *         description: La liste des compétences
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Competence'
 *       401:
 *         description: Non autorisé
 */
router.get("/all", competenceController.list_all_competences);

/**
 * @swagger
 * /competences/add:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Ajoute une nouvelle compétence
 *     tags: [Competences]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Competence'
 *     responses:
 *       200:
 *         description: La compétence a été créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Competence'
 *       401:
 *         description: Non autorisé
 *       500:
 *         description: Erreur lors de la création de la compétence
 */
router.post("/add", checkToken, competenceController.add_competence);

/**
 * @swagger
 * /update/{competenceId}:
 *   put:
 *     security:
 *       - bearerAuth: []
 *     summary: Met à jour une compétence existante
 *     tags: [Competences]
 *     parameters:
 *       - in: path
 *         name: competenceId
 *         required: true
 *         schema:
 *           type: string
 *         description: L'ID de la compétence à mettre à jour
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Competence'
 *     responses:
 *       200:
 *         description: La compétence a été mise à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Competence'
 *       401:
 *         description: Non autorisé
 *       500:
 *         description: Erreur lors de la mise à jour de la compétence
 */
router.put(
  "/update/:competenceId",
  checkToken,
  competenceController.update_a_competence
);

/**
 * @swagger
 * /delete/{competenceId}:
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: Supprime une compétence existante
 *     tags: [Competences]
 *     parameters:
 *       - in: path
 *         name: competenceId
 *         required: true
 *         schema:
 *           type: string
 *         description: L'ID de la compétence à supprimer
 *     responses:
 *       200:
 *         description: La compétence a été supprimée avec succès
 *       401:
 *         description: Non autorisé
 *       500:
 *         description: Erreur lors de la suppression de la compétence
 */
router.delete(
  "/delete/:competenceId",
  checkToken,
  competenceController.delete_a_competence
);

export default router;
