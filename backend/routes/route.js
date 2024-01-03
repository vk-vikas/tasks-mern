import express from "express";
import {
  addTodo,
  getAllTodos,
  toggleDoneTodo,
} from "../controllers/todoController.js";

const router = express.Router();

router.post("/", addTodo);
router.get("/", getAllTodos);
router.get("/:id", toggleDoneTodo);

export default router;
