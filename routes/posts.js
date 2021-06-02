let User = require('../models/users').User;
let path = require('path');
let uniqid = require('uniqid');
let express = require('express');
let router = express.Router();

//change app to router

router.get('/', async (req, resp) => {
    let users = await User.find();
    resp.send(users);
});

router.post('/', async (req, resp) => {
    let reqBody = req.body;
    let imgPath = req.file.path.substring(req.file.path.indexOf(path.sep), req.file.path.length);
    let newUser = new User({
        id: uniqid(),
        name: reqBody.name,
        gender: reqBody.gender,
        birthday: reqBody.birthday,
        city: reqBody.city,
        imageURL: imgPath
    })
    await newUser.save();
    resp.send('Created');
});

router.delete('/:id', async (req, resp) => {
    let id = req.params.id;
    await User.deleteOne({id: id});
    resp.send('Deleted!');
})

module.exports = router;
