"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpPro = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const tagModel_1 = require("./tagModel");
let expProSchema = new Schema({
    entreprise: {
        type: String,
        required: "true",
    },
    poste: {
        type: String,
        required: "true",
    },
    dateDebut: {
        type: Date,
        required: "true",
    },
    dateFin: {
        type: Date,
        required: "true",
    },
    description: {
        type: [String],
        required: "true",
    },
    stack: {
        type: [tagModel_1.TagClass],
        required: "false",
    },
});
exports.ExpPro = mongoose.model("ExpPro", expProSchema);
