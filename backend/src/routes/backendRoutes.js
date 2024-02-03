import express from 'express'
import User from '../models/User.js';

const router = express.Router();

router.get('/', async (req, res)=>{
    const data = await User.find();
    res.json(data);
})

router.put('/editUser/:id', async (req, res)=>{
    const userData = req.body;
    const userId = req.params.id; 
    const aa = User.updateOne ({id: userId}, { $set: userData });
    res.status(202).json({ message: 'Request accepted' });
    await aa;
})

router.post('/create', async (req, res)=>{
    const data = req.body;
    await User.create(data);
    const data2 = await User.find();
    res.json(data2)
})

router.delete('/delete/:id', async (req, res)=>{
    const deleteUser = req.params.id;
    const aa = User.findOneAndDelete({ id: deleteUser });
    res.status(202).json({ message: 'Request accepted' });
    await aa;
})

export default router;