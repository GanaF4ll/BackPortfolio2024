import express from "express";
import mongoose from "mongoose";
import formationRouter from "./routes/formationRoute";
import competenceRouter from "./routes/competenceRoute";
import tagRouter from "./routes/tagRoute";
import projetRouter from "./routes/projetRoute";

const app = express();
const port = 4444;

mongoose.connect("mongodb://127.0.0.1:27017/BackPortfolio2024");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use the imported routers
app.use("/formations", formationRouter);
app.use("/competences", competenceRouter);
app.use("/tags", tagRouter);
app.use("/projets", projetRouter);

app.listen(port, () => {
  console.log(`BackPortfolio app is running on port ${port}`);
});
