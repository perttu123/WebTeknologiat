import mongoose from "mongoose";

const TodoItem = new mongoose.Schema({
    task: String,
});

const Todo = mongoose.model('Task', TodoItem);

export default Todo;