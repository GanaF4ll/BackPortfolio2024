"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create_a_tag = void 0;
const Tag = require("../models/tagModel");
const create_a_tag = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newTag = new Tag({
            key: req.body.key,
            color: req.body.color,
        });
        const tag = yield newTag.save();
        res.status(201).json({ message: `Tag created: ${tag.key}` });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Tag not created" });
    }
});
exports.create_a_tag = create_a_tag;
exports.list_all_tags = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tags = yield Tag.find({});
        res.status(200).json(tags);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Tag not found" });
    }
});
exports.update_a_tag = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tag = yield Tag.findByIdAndUpdate(req.params.tagId, req.body, {
            new: true,
        });
        res.status(200).json(tag);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Tag not updated" });
    }
});
