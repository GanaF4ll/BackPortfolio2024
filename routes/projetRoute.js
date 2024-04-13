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
const projetController = __importStar(require("../controllers/projetController"));
const router = express_1.default.Router();
const jwtMiddleware_1 = require("../middlewares/jwtMiddleware");
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
router.post("/add", jwtMiddleware_1.checkToken, projetController.add_projet);
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
router.put("/update/:projetId", jwtMiddleware_1.checkToken, projetController.update_a_projet);
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
router.delete("/delete/:projetId", jwtMiddleware_1.checkToken, projetController.delete_a_projet);
exports.default = router;
