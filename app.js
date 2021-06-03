let express = require('express');
let app = express();
let mongoose = require('mongoose');
let multer = require('multer');
let postRouter = require('./routes/users');
let postRouter2 = require('./routes/profiles');
let signInUserRouter = require('./routes/sign-in-users')


mongoose.connect('mongodb://localhost/CRUD', { useNewUrlParser: true });
app.use(express.json());

let imgStorage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'public/img'),
    filename: (req, file, cb) => cb(null, file.originalname)
})

app.use(multer({storage: imgStorage}).single('imgFile'));
app.use(express.static('public')); //main page

app.use('/users', postRouter);
app.use('/profiles', postRouter2);
app.use('/signinuser', signInUserRouter)

app.listen(3000, () => console.log('Listening 3000...')); //local server
