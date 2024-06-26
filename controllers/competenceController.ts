import { Competence } from "../models/competenceModel";
import { Request, Response } from "express";

export const add_competence = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const newCompetence = new Competence({
      name: req.body.name,
      image: req.body.image,
      section: req.body.section,
      color: req.body.color,
    });
    const competence = await newCompetence.save();
    res
      .status(201)
      .json({
        message: `Competence created: ${competence.name}, ID: ${competence.id}`,
      });
  } catch (error: any) {
    console.error(error);
    res
      .status(500)
      .json({ message: `Competence not created. Error: ${error.message}` });
  }
};

export const list_all_competences = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const competences = await Competence.find({});
    res.status(200).json(competences);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Competence not found" });
  }
};

export const update_a_competence = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const competence = await Competence.findByIdAndUpdate(
      req.params.competenceId,
      req.body,
      { new: true }
    );
    res.status(200).json(competence);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Competence not updated" });
  }
};

export const delete_a_competence = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const competence = await Competence.findByIdAndDelete(
      req.params.competenceId
    );
    res.status(200).json({ message: "Competence deleted : ", competence });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Competence not deleted" });
  }
};
