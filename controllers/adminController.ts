import { Admin } from "../models/adminModel";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
require("dotenv").config({ path: "../.env" });

// export const register = async (req: Request, res: Response) => {
//   const { email, password } = req.body;
//   const hashedPassword = await bcrypt.hash(password, 10);
//   const admin = new Admin({
//     email,
//     password: hashedPassword,
//   });

//   try {
//     const savedAdmin = await admin.save();
//     res.status(201).json({ message: `admin created: ${admin.email}` });
//     res.send(savedAdmin);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "admin creation failed" });
//   }
// };

export const login = async (req: Request, res: Response) => {
  try {
    const admin = await Admin.findOne({ email: req.body.email });

    if (
      !admin ||
      !(await bcrypt.compare(req.body.password, admin.password as string))
    ) {
      res.status(401).json({ message: "Incorrect email or password" });
      return;
    }

    const adminData = {
      id: admin._id,
      email: admin.email,
    };

    const token = jwt.sign(adminData, process.env.JWT_KEY as string, {
      expiresIn: "48h", // Token duration
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred during the connection attempt" });
  }
};
