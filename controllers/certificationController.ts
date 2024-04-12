import { Certification } from "../models/certificationModel";
import { Request, Response } from "express";

export const create_a_certification = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const newCertification = new Certification({
      titre: req.body.titre,
      organisme: req.body.organisme,
      date: req.body.date,
    });
    const certification = await newCertification.save();
    res
      .status(201)
      .json({ message: `Certification created: ${certification.titre}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Certification not created" });
  }
};

export const list_all_certifications = async (req: Request, res: Response) => {
  try {
    const certifications = await Certification.find({});
    res.status(200).json(certifications);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Certification not found" });
  }
};

export const update_a_certification = async (req: Request, res: Response) => {
  try {
    const certification = await Certification.findByIdAndUpdate(
      req.params.certificationId,
      req.body,
      { new: true }
    );
    res.status(200).json(certification);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Certification not updated" });
  }
};
