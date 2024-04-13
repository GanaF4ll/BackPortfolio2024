"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// swagger/swaggerConfig.ts
const swaggerJsdoc = require("swagger-jsdoc");
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Portfolio API",
            version: "2.0.0",
            description: "Sends data to my Portfolio Website and lets me update it as I wish",
        },
    },
    apis: [
        "./routes/certificationRoute.ts",
        "./routes/competenceRoute.ts",
        "./routes/formationRoute.ts",
        "./routes/projetRoute.ts",
        "./routes/tagRoute.ts",
    ],
};
const swaggerSpec = swaggerJsdoc(options);
exports.default = swaggerSpec;
