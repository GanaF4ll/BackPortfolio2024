const mongoose = require("mongoose");
const Schema = mongoose.Schema;
import e from "express";

let certificationSchema = new Schema({
  titre: { type: String, required: "true" },
  organisme: { type: String, required: "true" },
  date: { type: Date, required: "true" },
});

export const Certification = mongoose.model(
  "Certification",
  certificationSchema
);
