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
exports.delete_a_formation = exports.update_a_formation = exports.list_all_formations = exports.add_formation = void 0;
const formationModel_1 = require("../models/formationModel");
const add_formation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newFormation = new formationModel_1.Formation({
            // id: req.body.id,
            name: req.body.name,
            summary: req.body.summary,
            dateDebut: req.body.dateDebut,
            dateFin: req.body.dateFin,
        });
        const formation = yield newFormation.save();
        res
            .status(201)
            .json({
            message: `Formation created: ${formation.name}, ID: ${formation.id}`,
        });
    }
    catch (error) {
        console.error(error);
        res
            .status(500)
            .json({ message: `Formation not created. Error: ${error.message}` });
    }
});
exports.add_formation = add_formation;
const list_all_formations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const formations = yield formationModel_1.Formation.find({});
        res.status(200).json(formations);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Formation not found" });
    }
});
exports.list_all_formations = list_all_formations;
const update_a_formation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const formation = yield formationModel_1.Formation.findByIdAndUpdate(req.params.formationId, req.body, { new: true });
        res.status(200).json(formation);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Formation not updated" });
    }
});
exports.update_a_formation = update_a_formation;
const delete_a_formation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const formation = yield formationModel_1.Formation.findByIdAndDelete(req.params.formationId);
        res.status(200).json({ message: "Formation deleted : ", formation });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Formation not deleted" });
    }
});
exports.delete_a_formation = delete_a_formation;
