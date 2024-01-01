import Todo from "../models/todo.js";

export const addTodo = async (req, res) => {
  try {
    const newTodo = await Todo.create({
      title: req.body.data,
      createdAt: Date.now(),
    });

    await newTodo.save();

    res.status(200).json(newTodo);
  } catch (err) {
    console.log(err.message);
  }
};
