let Profile = require('../models/profiles').Profile;
let uniqid = require('uniqid');
let express = require('express');
let router = express.Router();

//change app to router

router.get('/', async (req, resp) => {
    let profiles = await Profile.find();
    resp.send(profiles);
})

router.post('/', async (req, resp) => {
    let reqBody = req.body;
    let newProfile = new Profile({
        id: uniqid(),
        userName: reqBody.userName,
        email: reqBody.email
    })
    await newProfile.save();
    resp.send('Created');
});

router.delete('/:id', async (req, resp) => {
    let id = req.params.id;
    await User.deleteOne({id: id});
    resp.send('Deleted!');
})

module.exports = router;
