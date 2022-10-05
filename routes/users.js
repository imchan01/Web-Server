const express = require('express');
const { model } = require('mongoose');
const Model = require('../model/model');
const router = express.Router();

//Post Method
router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get all Method
router.get('/getAll', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})
module.exports = router;
//Push method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const update = req.body;
        const option = {new:true};

        const data = await Model.findByIdAndUpdate(id,update,option);
        res.send(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})
//Delete method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const data = await Model.findByIdAndDelete(id);
        res.send('Finish delete')
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }

})