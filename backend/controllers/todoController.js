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

export const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200).json(todos);
  } catch (error) {
    console.log(error);
  }
};

export const toggleDoneTodo = async (req, res) => {
  try {
    const todoRef = await Todo.findById(req.params.id);
    const updatedTodo = await Todo.findOneAndUpdate(
      { _id: req.params.id }, // 1st para filter obj
      { done: !todoRef.done }, // 2nd para update obj
      { new: true } // now this sends the updated doc
    );

    res.status(200).json(updatedTodo);
  } catch (error) {
    console.log(error);
  }
};
