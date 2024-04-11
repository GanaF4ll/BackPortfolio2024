import express from "express";
import mongoose from "mongoose";
import formationRouter from "./routes/formationRoute";
import competenceRouter from "./routes/competenceRoute";
import tagRouter from "./routes/tagRoute";
import certificationRouter from "./routes/certificationRoute";
import projetRouter from "./routes/projetRoute";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger/swaggerConfig";

const app = express();
const port = 4444;

mongoose.connect("mongodb://127.0.0.1:27017/BackPortfolio2024");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use the imported routers
app.use("/formations", formationRouter);
app.use("/competences", competenceRouter);
app.use("/tags", tagRouter);
app.use("/certifications", certificationRouter);
export default swaggerSpec;
app.use("/projets", projetRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`BackPortfolio app is running on port ${port}`);
});
