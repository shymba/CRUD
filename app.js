let express = require('express');
let app = express();
let mongoose = require('mongoose');
let User = require('./models/users').User;
let Profile = require('./models/profiles').Profile;
let multer = require('multer');
let path = require('path');
let uniqid = require('uniqid');


mongoose.connect('mongodb://localhost/CRUD', { useNewUrlParser: true });
app.use(express.json());

let imgStorage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'public/img'),
    filename: (req, file, cb) => cb(null, file.originalname)
})

app.use(multer({storage: imgStorage}).single('imgFile'));

app.get('/users', async (req, resp) => {
    let users = await User.find();
    resp.send(users);
});

app.get('/profiles', async (req, resp) => {
    let profiles = await Profile.find();
    resp.send(profiles);
})

app.post('/users', async (req, resp) => {
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

app.post('/profiles', async (req, resp) => {
    let reqBody = req.body;
    let newProfile = new Profile({
        id: uniqid(),
        userName: reqBody.userName,
        email: reqBody.email
    })
    await newProfile.save();
    resp.send('Created');
})

app.use(express.static('public')); //main page

app.listen(3000, () => console.log('Listening 3000...')); //local server
