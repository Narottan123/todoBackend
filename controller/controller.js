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

module.exports = { getTodo, saveTodo };
   
   
