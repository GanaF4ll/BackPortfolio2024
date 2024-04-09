import mongoose, { Schema } from "mongoose";
import { Tag } from "./tagModel";

const ProjetSchema: Schema = new Schema({
  name: { type: String, required: true },
  summary: { type: String, required: true },
  description: { type: String, required: true },
  projectLink: { type: String, required: true },
  pictures: { type: [String], required: true },
});

export const Projet = mongoose.model("Projet", ProjetSchema);
