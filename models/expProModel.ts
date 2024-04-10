const mongoose = require("mongoose");
const Schema = mongoose.Schema;
import e from "express";
import { TagClass } from "./tagModel";

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
    type: [TagClass],
    required: "false",
  },
});

export const ExpPro = mongoose.model("ExpPro", expProSchema);
