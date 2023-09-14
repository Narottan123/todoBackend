const todomodel = require("../models/model");

const getTodo = async (req, res) => {
  try {
    const todo = await todomodel.find();
    res.send(todo);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

const saveTodo = async (req, res) => {
  try {
    let { text } = req.body;
    let todo = await todomodel.create({ text });
    res.send(todo);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

const updateTodo = async (req, res) => {
  try {
    let { text, _id } = req.body;
    let todo = await todomodel.findByIdAndUpdate(_id, {
      $set: { text: text },
    });

    if (todo) {
      res.send(todo);
    } else {
      res.status(404).send("Todo not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

const deleteTodo = async (req, res) => {
  try {
    let { _id } = req.body;
    let todo = await todomodel.findByIdAndDelete(_id);

    if (todo) {
      res.send("Deleted Successfully");
    } else {
      res.status(404).send("Todo not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

module.exports = { getTodo, saveTodo, updateTodo, deleteTodo };
