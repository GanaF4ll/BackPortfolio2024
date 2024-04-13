import mongoose, { Schema } from "mongoose";

const AdminSchema: Schema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export const Admin = mongoose.model("Admin", AdminSchema);
