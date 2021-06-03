let SignInUser = require('../models/sign-in-users').SigInUser;
let express = require('express');
let router = express.Router();
let bcrypt = require('bcrypt');

router.post('/login', async (req, resp) => {
    let email = req.body.email;
    let password = req.body.password;
    let signInUser = await SignInUser.find().where({email: email});
    if(signInUser.length > 0) {
        let comparisonResult = await bcrypt.compare(password, signInUser[0].password)
        if(comparisonResult) {
            resp.send('Logged In');
        } else {
            resp.send('Rejected');
        }
    } else {
        resp.send('Rejected');
    }
})

router.post('/register', async (req, resp) => {
    let email = req.body.email;
    let password = req.body.password;
    let signInUser = await SignInUser.find().where({email: email});
    if(signInUser.length === 0) {
        let encryptedPass = await bcrypt.hash(password, 12);
        let newUser = new SignInUser({
            email: email,
            password: encryptedPass
        })
        await newUser.save();
        resp.send('Done');
    } else {
        resp.send('Rejected');
    }
})

module.exports = router;
