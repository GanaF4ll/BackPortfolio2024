const express = require("express");
const router = express.Router();
const tagController = require("../controllers/tagController");

/**
 * @swagger
 * /tags/all:
 *   get:
 *     summary: Récupère la liste de tous les tags
 *     tags: [Tags]
 *     responses:
 *       200:
 *         description: La liste des tags
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Tag'
 */
router.get("/all", tagController.list_all_tags);
/**
 * @swagger
 * /tags/add:
 *   post:
 *     summary: Ajoute un nouveau tag
 *     tags: [Tags]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tag'
 *     responses:
 *       200:
 *         description: Le tag a été créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tag'
 *       500:
 *         description: Erreur lors de la création du tag
 */
router.post("/add", tagController.create_a_tag);

/**
 * @swagger
 * /update/{tagId}:
 *   put:
 *     summary: Met à jour un tag existant
 *     tags: [Tags]
 *     parameters:
 *       - in: path
 *         name: tagId
 *         required: true
 *         schema:
 *           type: string
 *         description: L'ID du tag à mettre à jour
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tag'
 *     responses:
 *       200:
 *         description: Le tag a été mis à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tag'
 *       500:
 *         description: Erreur lors de la mise à jour du tag
 */
router.put("/update/:tagId", tagController.update_a_tag);

export default router;
