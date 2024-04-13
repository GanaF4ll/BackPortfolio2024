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
exports.delete_a_projet = exports.update_a_projet = exports.list_all_projets = exports.add_projet = void 0;
const projetModel_1 = require("../models/projetModel");
const add_projet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newProjet = new projetModel_1.Projet({
            name: req.body.name,
            summary: req.body.summary,
            description: req.body.description,
            projectLink: req.body.projectLink,
            pictures: req.body.pictures,
            tags: req.body.tags,
        });
        const projet = yield newProjet.save();
        res
            .status(201)
            .json({ message: `Projet created: ${projet.name}, ID : ${projet.id}` });
    }
    catch (error) {
        console.log(error);
        res
            .status(500)
            .json({ message: `Projet not created. Error: ${error.message}` });
    }
});
exports.add_projet = add_projet;
const list_all_projets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const projets = yield projetModel_1.Projet.find({});
        res.status(200).json(projets);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Projet not found" });
    }
});
exports.list_all_projets = list_all_projets;
const update_a_projet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const projet = yield projetModel_1.Projet.findByIdAndUpdate(req.params.projetId, req.body, { new: true });
        res.status(200).json(projet);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Projet not updated" });
    }
});
exports.update_a_projet = update_a_projet;
const delete_a_projet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const projet = yield projetModel_1.Projet.findByIdAndDelete(req.params.projetId);
        res.status(200).json({ message: "Projet deleted : ", projet });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Projet not deleted" });
    }
});
exports.delete_a_projet = delete_a_projet;
