const express = require("express");
const router = express.Router();
const tagController = require("../controllers/tagController");

router.post("/add", tagController.create_a_tag);
router.get("/all", tagController.list_all_tags);

export default router;
