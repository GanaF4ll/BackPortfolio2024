"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const adminModel_1 = require("../models/adminModel");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
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
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const admin = yield adminModel_1.Admin.findOne({ email: req.body.email });
        if (!admin ||
            !(yield bcrypt_1.default.compare(req.body.password, admin.password))) {
            res.status(401).json({ message: "Incorrect email or password" });
            return;
        }
        const adminData = {
            id: admin._id,
            email: admin.email,
        };
        const token = jsonwebtoken_1.default.sign(adminData, process.env.TOKEN_SECRET, {
            expiresIn: "48h",
        });
        res.status(200).json({ token });
    }
    catch (error) {
        console.error(error);
        res
            .status(500)
            .json({ message: "An error occurred during the connection attempt" });
    }
});
exports.login = login;
