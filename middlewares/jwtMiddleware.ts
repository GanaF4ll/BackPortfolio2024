import { Admin } from "./../models/adminModel";
const jwt = require("jsonwebtoken");
require("dotenv").config();
import { Request, Response, NextFunction } from "express";

export const checkToken = (req: Request, res: Response, next: NextFunction) => {
  // Log all headers
  console.log("Headers:", req.headers);

  // Récupérer le token d'authentification de l'en-tête de la requête
  let token = req.headers["authorization"] as string;

  // Log the token
  console.log("Token:", token);

  if (!token) {
    return res.status(403).send({ message: "Aucun token fourni!" });
  }
  // Vérifier le token
  jwt.verify(token, process.env.TOKEN_SECRET, (err: any, decoded: any) => {
    if (err) {
      console.log("JWT verification error:", err);
      return res.status(401).send({ message: "Non autorisé!" });
    }
    req.body.admin = decoded;
    next();
  });
};
