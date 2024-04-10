import mongoose, { Schema } from "mongoose";
import { TagClass } from "./tagModel";

const ProjetSchema: Schema = new Schema({
  name: { type: String, required: true },
  summary: { type: String, required: true },
  description: { type: String, required: true },
  projectLink: { type: String, required: true },
  pictures: { type: [String], required: true },
  tags: { type: [TagClass], required: true },
});

export const Projet = mongoose.model("Projet", ProjetSchema);
