import { Formation } from "../models/formationModel";
import { Request, Response } from "express";

export const add_formation = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const newFormation = new Formation({
      // id: req.body.id,
      name: req.body.name,
      summary: req.body.summary,
      dateDebut: req.body.dateDebut,
      dateFin: req.body.dateFin,
    });
    const formation = await newFormation.save();
    res.status(201).json({ message: `Formation created: ${formation.name}` });
  } catch (error: any) {
    console.error(error);
    res
      .status(500)
      .json({ message: `Formation not created. Error: ${error.message}` });
  }
};

export const list_all_formations = async (req: Request, res: Response) => {
  try {
    const formations = await Formation.find({});
    res.status(200).json(formations);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Formation not found" });
  }
};
