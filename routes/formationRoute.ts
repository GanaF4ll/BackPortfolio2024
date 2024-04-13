import express, { Router } from "express";
import * as formationController from "../controllers/formationController";
import { checkToken } from "../middlewares/jwtMiddleware";

const router: Router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Formation:
 *       type: object
 *       properties:
 *         // Ajoutez ici les propriétés de la formation (exemple)
 *         title:
 *           type: string
 *         description:
 *           type: string
 */

/**
 * @swagger
 * /api/formations/all:
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
 *       401:
 *         description: Non autorisé
 */

router.get("/all", formationController.list_all_formations);

/**
 * @swagger
 * /api/formations/add:
 *   post:
 *     security:
 *       - bearerAuth: []
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
 *       401:
 *         description: Non autorisé
 *       500:
 *         description: Erreur lors de la création de la formation
 */

router.post("/add", checkToken, formationController.add_formation);

/**
 * @swagger
 * /update/{formationId}:
 *   put:
 *     security:
 *       - bearerAuth: []
 *     summary: Met à jour une formation existante
 *     tags: [Formations]
 *     parameters:
 *       - in: path
 *         name: formationId
 *         required: true
 *         schema:
 *           type: string
 *         description: L'ID de la formation à mettre à jour
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Formation'
 *     responses:
 *       200:
 *         description: La formation a été mise à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Formation'
 *       401:
 *         description: Non autorisé
 *       400:
 *         description: Erreur lors de la mise à jour de la formation
 */

router.put(
  "/update/:formationId",
  checkToken,
  formationController.update_a_formation
);

/**
 * @swagger
 *  /api/formations/delete/{formationId}:
 *   delete:
 *     security:
 *      - bearerAuth: []
 *     summary: Supprime une formation existante
 *     tags: [Formations]
 *     parameters:
 *       - in: path
 *         name: formationId
 *         required: true
 *         schema:
 *           type: string
 *         description: L'ID de la formation à supprimer
 *     responses:
 *       200:
 *         description: La formation a été supprimée avec succès
 *       401:
 *         description: Non autorisé
 *       500:
 *         description: Erreur lors de la suppression de la formation
 */

router.delete(
  "/delete/:formationId",
  checkToken,
  formationController.delete_a_formation
);

export default router;
