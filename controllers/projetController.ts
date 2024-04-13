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
    res
      .status(201)
      .json({ message: `Projet created: ${projet.name}, ID : ${projet.id}` });
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

export const update_a_projet = async (req: Request, res: Response) => {
  try {
    const projet = await Projet.findByIdAndUpdate(
      req.params.projetId,
      req.body,
      { new: true }
    );
    res.status(200).json(projet);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Projet not updated" });
  }
};

export const delete_a_projet = async (req: Request, res: Response) => {
  try {
    const projet = await Projet.findByIdAndDelete(req.params.projetId);
    res.status(200).json({ message: "Projet deleted : ", projet });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Projet not deleted" });
  }
};
