import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";

export const connectToDB = async () => {
  try {
    const conn = await mongoose.connect(ENV_VARS.MONGO_URI);
    console.log("Connected to MongoDB:" + conn.connection.host);
  } catch (error) {
    console.log("Failed to connect to MongoDB" + error);
    process.exit(1);
  }
};
