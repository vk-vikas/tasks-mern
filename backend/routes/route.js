import express from "express";
import {
  addTodo,
  deleteTodo,
  getAllTodos,
  toggleDoneTodo,
  updateTodo,
} from "../controllers/todoController.js";

const router = express.Router();

router.post("/", addTodo);
router.get("/", getAllTodos);
router.get("/:id", toggleDoneTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;
