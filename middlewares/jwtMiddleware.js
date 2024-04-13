"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkToken = void 0;
const jwt = require("jsonwebtoken");
require("dotenv").config();
const checkToken = (req, res, next) => {
    // Log all headers
    console.log("Headers:", req.headers);
    // Récupérer le token d'authentification de l'en-tête de la requête
    let token = req.headers["authorization"];
    // Log the token
    console.log("Token:", token);
    if (!token) {
        return res.status(403).send({ message: "Aucun token fourni!" });
    }
    // Vérifier le token
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
        if (err) {
            console.log("JWT verification error:", err);
            return res.status(401).send({ message: "Non autorisé!" });
        }
        req.body.admin = decoded;
        next();
    });
};
exports.checkToken = checkToken;
