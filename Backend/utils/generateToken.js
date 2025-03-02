import jwt from "jsonwebtoken";
import { ENV_VARS } from "../config/envVars.js";

export const generateToken = (id,res) => {
    const token = jwt.sign({ id }, ENV_VARS.JWT_SECRET, {expiresIn: "30d"});
    res.cookie("jwt-netflix", token, { 
        maxage: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        samesite: "strict",
        secure: ENV_VARS.NODE_ENV !== "development",
     });
};