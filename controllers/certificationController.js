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
exports.delete_a_certification = exports.update_a_certification = exports.list_all_certifications = exports.create_a_certification = void 0;
const certificationModel_1 = require("../models/certificationModel");
const create_a_certification = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newCertification = new certificationModel_1.Certification({
            titre: req.body.titre,
            organisme: req.body.organisme,
            date: req.body.date,
        });
        const certification = yield newCertification.save();
        res
            .status(201)
            .json({
            message: `Certification created: ${certification.titre}, ID: ${certification.id}`,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Certification not created" });
    }
});
exports.create_a_certification = create_a_certification;
const list_all_certifications = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const certifications = yield certificationModel_1.Certification.find({});
        res.status(200).json(certifications);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Certification not found" });
    }
});
exports.list_all_certifications = list_all_certifications;
const update_a_certification = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const certification = yield certificationModel_1.Certification.findByIdAndUpdate(req.params.certificationId, req.body, { new: true });
        res.status(200).json({ message: "Certification updated", certification });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Certification not updated" });
    }
});
exports.update_a_certification = update_a_certification;
const delete_a_certification = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const certification = yield certificationModel_1.Certification.findByIdAndDelete(req.params.certificationId);
        res
            .status(200)
            .json({ message: "Certification deleted : ", certification });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Certification not deleted" });
    }
});
exports.delete_a_certification = delete_a_certification;
