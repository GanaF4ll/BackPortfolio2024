"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Certification = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let certificationSchema = new Schema({
    titre: { type: String, required: "true" },
    organisme: { type: String, required: "true" },
    date: { type: Date, required: "true" },
});
exports.Certification = mongoose.model("Certification", certificationSchema);
