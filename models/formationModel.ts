import mongoose, { Schema } from "mongoose";

const FormationSchema: Schema = new Schema({
  name: { type: String, required: true },
  summary: { type: [String], required: false },
  dateDebut: { type: Date, required: true },
  dateFin: { type: Date, required: false },
});

export const Formation = mongoose.model("Formation", FormationSchema);
