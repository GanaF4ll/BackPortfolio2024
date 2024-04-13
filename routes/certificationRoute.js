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
const certificationController = __importStar(require("../controllers/certificationController"));
const router = express_1.default.Router();
// import * as adminController from "../controllers/adminController";
const jwtMiddleware_1 = require("../middlewares/jwtMiddleware");
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
router.post("/add", jwtMiddleware_1.checkToken, certificationController.create_a_certification);
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
router.put("/update/:certificationId", jwtMiddleware_1.checkToken, certificationController.update_a_certification);
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
router.delete("/delete/:certificationId", jwtMiddleware_1.checkToken, certificationController.delete_a_certification);
exports.default = router;
