"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const formationRoute_1 = __importDefault(require("./routes/formationRoute"));
const competenceRoute_1 = __importDefault(require("./routes/competenceRoute"));
const tagRoute_1 = __importDefault(require("./routes/tagRoute"));
const certificationRoute_1 = __importDefault(
  require("./routes/certificationRoute")
);
const adminRoute_1 = __importDefault(require("./routes/adminRoute"));
const projetRoute_1 = __importDefault(require("./routes/projetRoute"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swaggerConfig_1 = __importDefault(require("./swagger/swaggerConfig"));
const mongodb_1 = require("mongodb");
require("dotenv").config({ path: "./.env" });
const app = (0, express_1.default)();
const port = 4444;
const uri = process.env.URI;
const client = new mongodb_1.MongoClient(uri, {});
mongoose_1.default
  .connect(uri, {})
  .then(() => console.log("Connected to MongoDB Cloud"))
  .catch((err) => console.error("Could not connect to MongoDB Cloud", err));
function main() {
  return __awaiter(this, void 0, void 0, function* () {
    try {
      yield client.connect();
      console.log("Connexion à la base de données réussie");
      const database = client.db("Portfolio2024");
      console.log("Base de données sélectionnée :", database.databaseName);
      const collections = [
        "projets",
        "formations",
        "competences",
        "certifications",
      ];
      const result = {};
      for (const collectionName of collections) {
        const collection = database.collection(collectionName);
        console.log("Collection sélectionnée :", collection.collectionName);
        const data = yield collection.find({}).toArray();
        result[collectionName] = data;
      }
      console.log("Résultat de la recherche :", result);
    } catch (error) {
      console.error("Erreur de connexion à la base de données :", error);
    }
  });
}
main().catch(console.error);
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use("/formations", formationRoute_1.default);
app.use("/competences", competenceRoute_1.default);
app.use("/tags", tagRoute_1.default);
app.use("/certifications", certificationRoute_1.default);
exports.default = swaggerConfig_1.default;
app.use("/projets", projetRoute_1.default);
app.use("/admin", adminRoute_1.default);
app.use(
  "/api-docs",
  swagger_ui_express_1.default.serve,
  swagger_ui_express_1.default.setup(swaggerConfig_1.default)
);
// app.listen(port, () => {
//   console.log(`BackPortfolio app is running on port ${port}`);
// });
function startServer() {
  return __awaiter(this, void 0, void 0, function* () {
    try {
      yield mongoose_1.default.connect(uri, {});
      console.log("Connected to MongoDB");
      app.listen(port, () => {
        console.log(`BackPortfolio app is running on port ${port}`);
      });
    } catch (error) {
      console.error("Failed to connect to MongoDB", error);
    }
  });
}
startServer();
