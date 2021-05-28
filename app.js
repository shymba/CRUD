let express = require('express');
let app = express();
let mongoose = require('mongoose');
let User = require('./models/users').User;

mongoose.connect('mongodb://localhost/CRUD', { useNewUrlParser: true });

app.get('/users', async (req, resp) => {
    let users = await User.find();
    resp.send(users);
})

app.use(express.static('public')); //main page

app.listen(3000, () => console.log('Listening 3000...')); //local server 