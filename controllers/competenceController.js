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
exports.delete_a_competence = exports.update_a_competence = exports.list_all_competences = exports.add_competence = void 0;
const competenceModel_1 = require("../models/competenceModel");
const add_competence = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newCompetence = new competenceModel_1.Competence({
            name: req.body.name,
            image: req.body.image,
            section: req.body.section,
            color: req.body.color,
        });
        const competence = yield newCompetence.save();
        res
            .status(201)
            .json({
            message: `Competence created: ${competence.name}, ID: ${competence.id}`,
        });
    }
    catch (error) {
        console.error(error);
        res
            .status(500)
            .json({ message: `Competence not created. Error: ${error.message}` });
    }
});
exports.add_competence = add_competence;
const list_all_competences = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const competences = yield competenceModel_1.Competence.find({});
        res.status(200).json(competences);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Competence not found" });
    }
});
exports.list_all_competences = list_all_competences;
const update_a_competence = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const competence = yield competenceModel_1.Competence.findByIdAndUpdate(req.params.competenceId, req.body, { new: true });
        res.status(200).json(competence);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Competence not updated" });
    }
});
exports.update_a_competence = update_a_competence;
const delete_a_competence = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const competence = yield competenceModel_1.Competence.findByIdAndDelete(req.params.competenceId);
        res.status(200).json({ message: "Competence deleted : ", competence });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Competence not deleted" });
    }
});
exports.delete_a_competence = delete_a_competence;
