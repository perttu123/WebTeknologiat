import express from 'express'
import Todo from '../models/Todo.js'
const router = express.Router();

router.get('/', async (req, res)=>{
    const data = await Todo.find();
    res.json(data);
});

router.post('/addTask', async (req, res) => {
    
    const input = req.body;
    await Todo.create(input);
    const updatedTasks = await Todo.find();
    res.json(updatedTasks);
});

router.delete('/delete/:id', async (req, res)=>{
    const taskID = req.params.id
    await Todo.findByIdAndDelete(taskID);
    const updatedTasks = await Todo.find();
    res.json(updatedTasks);
})

router.put('/edit/:id', async (req, res)=>{
    const taskID = req.params.id;
    const editTask = req.body;
    await Todo.findByIdAndUpdate(taskID, editTask);
    const updatedTasks = await Todo.find();
    res.json(updatedTasks);
})

export default router;