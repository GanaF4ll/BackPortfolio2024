import express, { Router } from "express";
import * as adminController from "../controllers/adminController";
const router: Router = express.Router();

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Crée un nouvel administrateur
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Admin'
 *     responses:
 *       201:
 *         description: L'administrateur a été créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Admin'
 *       500:
 *         description: Erreur lors de la création de l'administrateur
 */
// router.post("/register", adminController.register);
/**
 * @swagger
 * /login:
 *   post:
 *     summary: Connecte un administrateur existant
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Admin'
 *     responses:
 *       200:
 *         description: L'administrateur a été connecté avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Admin'
 *       401:
 *         description: Erreur lors de la connexion de l'administrateur
 */
router.post("/login", adminController.login);
export default router;
