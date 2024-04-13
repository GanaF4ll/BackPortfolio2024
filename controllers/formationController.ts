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
    res
      .status(201)
      .json({
        message: `Formation created: ${formation.name}, ID: ${formation.id}`,
      });
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

export const update_a_formation = async (req: Request, res: Response) => {
  try {
    const formation = await Formation.findByIdAndUpdate(
      req.params.formationId,
      req.body,
      { new: true }
    );
    res.status(200).json(formation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Formation not updated" });
  }
};

export const delete_a_formation = async (req: Request, res: Response) => {
  try {
    const formation = await Formation.findByIdAndDelete(req.params.formationId);
    res.status(200).json({ message: "Formation deleted : ", formation });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Formation not deleted" });
  }
};
