import express, { Router } from "express";
import * as certificationController from "../controllers/certificationController";
const router: Router = express.Router();
// import * as adminController from "../controllers/adminController";
import { checkToken } from "../middlewares/jwtMiddleware";

/**
 * @swagger
 * /certifications/all:
 *   get:
 *     security:
 *       - bearerAuth: []
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
 *       401:
 *         description: Non autorisé
 */
router.get("/all", certificationController.list_all_certifications);

/**
 * @swagger
 * /certifications/add:
 *   post:
 *     security:
 *       - bearerAuth: []
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
 *       401:
 *         description: Non autorisé
 *       500:
 *         description: Erreur lors de la création de la certification
 */
router.post("/add", checkToken, certificationController.create_a_certification);

/**
 * @swagger
 * /update/{certificationId}:
 *   put:
 *     security:
 *       - bearerAuth: []
 *     summary: Met à jour une certification existante
 *     tags: [Certifications]
 *     parameters:
 *       - in: path
 *         name: certificationId
 *         required: true
 *         schema:
 *           type: string
 *         description: L'ID de la certification à mettre à jour
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Certification'
 *     responses:
 *       200:
 *         description: La certification a été mise à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Certification'
 *       401:
 *         description: Non autorisé
 *       400:
 *         description: Erreur lors de la mise à jour de la certification
 */
router.put(
  "/update/:certificationId",
  checkToken,
  certificationController.update_a_certification
);

/**
 * @swagger
 * /delete/{certificationId}:
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: Supprime une certification existante
 *     tags: [Certifications]
 *     parameters:
 *       - in: path
 *         name: certificationId
 *         required: true
 *         schema:
 *           type: string
 *         description: L'ID de la certification à supprimer
 *     responses:
 *       200:
 *         description: La certification a été supprimée avec succès
 *       401:
 *         description: Non autorisé
 *       400:
 *         description: Erreur lors de la suppression de la certification
 */
router.delete(
  "/delete/:certificationId",
  checkToken,
  certificationController.delete_a_certification
);

export default router;
