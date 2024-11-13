import mongoose from "mongoose";
import env from "dotenv";

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODBURL);
    console.log("databse connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1); // Exit the process with failure
  }
};

export default connectDatabase;
