import express from "express";
import cors from "cors";
import todoRouter from "./routes/route.js";
import { Connection } from "./database/db.js";

const PORT = 8000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/todos", todoRouter);

Connection();
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
