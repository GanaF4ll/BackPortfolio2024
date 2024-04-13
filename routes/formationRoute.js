"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const formationController = __importStar(require("../controllers/formationController"));
const jwtMiddleware_1 = require("../middlewares/jwtMiddleware");
const router = express_1.default.Router();
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
router.post("/add", jwtMiddleware_1.checkToken, formationController.add_formation);
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
router.put("/update/:formationId", jwtMiddleware_1.checkToken, formationController.update_a_formation);
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
router.delete("/delete/:formationId", jwtMiddleware_1.checkToken, formationController.delete_a_formation);
exports.default = router;
