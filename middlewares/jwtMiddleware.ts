import { Admin } from "./../models/adminModel";
const jwt = require("jsonwebtoken");
require("dotenv").config();

export const tokenValidator = async (req: any, res: any, next: any) => {
  const token = req.header("Authorization").split(" ")[1];
  console.log("Token extrait :", token);
  if (!token) {
    return res.status(401).send(process.env.TOKEN_SECRET);
  }

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.admin = verified;
    next();
  } catch (err) {
    console.error("Erreur de validation du token :", err);
    res.status(400).send(process.env.TOKEN_SECRET);
  }
};
