import express from "express";
import mongoose from "mongoose";
import formationRouter from "./routes/formationRoute";
import competenceRouter from "./routes/competenceRoute";
import tagRouter from "./routes/tagRoute";
import certificationRouter from "./routes/certificationRoute";
import projetRouter from "./routes/projetRoute";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger/swaggerConfig";
import { MongoClient, Db, Collection } from "mongodb";

require("dotenv").config({ path: "./.env" });

const app = express();
const port = 4444;
const uri = process.env.URI as string;
const client = new MongoClient(uri, {});

mongoose
  .connect(uri, {})
  .then(() => console.log("Connected to MongoDB Cloud"))
  .catch((err) => console.error("Could not connect to MongoDB Cloud", err));
async function main() {
  try {
    await client.connect();
    console.log("Connexion à la base de données réussie");
    const database: Db = client.db("Portfolio2024");
    console.log("Base de données sélectionnée :", database.databaseName);
    const collections = [
      "projets",
      "formations",
      "competences",
      "certifications",
    ];
    const result: Record<string, any> = {};
    for (const collectionName of collections) {
      const collection: Collection = database.collection(collectionName);
      // console.log("Collection sélectionnée :", collection.collectionName);
      const data = await collection.find({}).toArray();
      result[collectionName] = data;
    }

    console.log("Résultat de la recherche :", result);
  } catch (error) {
    console.error("Erreur de connexion à la base de données :", error);
  }
}
main().catch(console.error);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/formations", formationRouter);
app.use("/competences", competenceRouter);
app.use("/tags", tagRouter);
app.use("/certifications", certificationRouter);
export default swaggerSpec;
app.use("/projets", projetRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// app.listen(port, () => {
//   console.log(`BackPortfolio app is running on port ${port}`);
// });
async function startServer() {
  try {
    await mongoose.connect(uri, {});
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`BackPortfolio app is running on port ${port}`);
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
}
startServer();
