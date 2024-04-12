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

/**
 * @swagger
 * /update/{formationId}:
 *   put:
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
 *       500:
 *         description: Erreur lors de la mise à jour de la formation
 */
router.put("/update/:formationId", formationController.update_a_formation);
/**
 * @swagger
 * /delete/{formationId}:
 *   delete:
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
 *       500:
 *         description: Erreur lors de la suppression de la formation
 */
router.delete("/delete/:formationId", formationController.delete_a_formation);
export default router;
