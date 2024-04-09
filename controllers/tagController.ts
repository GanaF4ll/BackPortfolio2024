const Tag = require("../models/tagModel");
import { Request, Response } from "express";

export const create_a_tag = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const newTag = new Tag({
      key: req.body.key,
      color: req.body.color,
    });
    const tag = await newTag.save();
    res.status(201).json({ message: `Tag created: ${tag.key}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Tag not created" });
  }
};

exports.list_all_tags = async (req: Request, res: Response) => {
  try {
    const tags = await Tag.find({});
    res.status(200).json(tags);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Tag not found" });
  }
};
