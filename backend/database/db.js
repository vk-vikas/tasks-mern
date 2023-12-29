import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const MONGODB_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@todolist-mern.m6vtmwh.mongodb.net/?retryWrites=true&w=majority`;

export const Connection = () => {
  mongoose.connect(MONGODB_URL, { useNewUrlParser: true });
  mongoose.connection.on("connected", () => console.log("db connected"));
};
