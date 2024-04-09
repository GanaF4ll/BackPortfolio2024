import mongoose, { Schema } from "mongoose";

const CompetenceSchema: Schema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  section: { type: String, required: true },
  color: { type: String, required: true },
});

export const Competence = mongoose.model("Competence", CompetenceSchema);
