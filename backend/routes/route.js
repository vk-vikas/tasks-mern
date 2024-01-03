import express from "express";
import { addTodo, getAllTodos } from "../controllers/todoController.js";

const router = express.Router();

router.post("/", addTodo);
router.get("/", getAllTodos);

export default router;
