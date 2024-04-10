import { Projet } from "../models/projetModel";
import { Request, Response } from "express";

export const add_projet = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const newProjet = new Projet({
      name: req.body.name,
      summary: req.body.summary,
      description: req.body.description,
      projectLink: req.body.projectLink,
      pictures: req.body.pictures,
      tags: req.body.tags,
    });
    const projet = await newProjet.save();
    res.status(201).json({ message: `Projet created: ${projet.name}` });
  } catch (error: any) {
    console.log(error);
    res
      .status(500)
      .json({ message: `Projet not created. Error: ${error.message}` });
  }
};

export const list_all_projets = async (req: Request, res: Response) => {
  try {
    const projets = await Projet.find({});
    res.status(200).json(projets);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Projet not found" });
  }
};
