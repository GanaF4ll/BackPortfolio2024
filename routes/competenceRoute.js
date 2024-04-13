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
const competenceController = __importStar(require("../controllers/competenceController"));
const router = express_1.default.Router();
const jwtMiddleware_1 = require("../middlewares/jwtMiddleware");
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
router.post("/add", jwtMiddleware_1.checkToken, competenceController.add_competence);
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
router.put("/update/:competenceId", jwtMiddleware_1.checkToken, competenceController.update_a_competence);
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
router.delete("/delete/:competenceId", jwtMiddleware_1.checkToken, competenceController.delete_a_competence);
exports.default = router;
