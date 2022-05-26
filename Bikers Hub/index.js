const express     = require('express');
const app         = express();
const port        = 3000;
const handlebars  = require('express-handlebars');
const mongoose    = require('mongoose');
const bodyParser  = require('body-parser');
const users       = require('./routes/users');
const auth        = require('./routes/auth');


const uri = 'mongodb+srv://lockedfire:deneme123@idk.zmh56.mongodb.net/test';
const MongoClient     = require("mongodb").MongoClient;
const client          = new MongoClient(uri);
client.connect(err => 
{
  console.log("Connected to MongoDB server...");
  const ids = client.db("test").collection("users") 
    ids.find({}).toArray(function(err, result) 
    {
          console.log("find query executed...")    
          console.log(result)
    });
});

const db              = client.db("test");
const coll            = db.collection("users");

mongoose.connect(uri)
.then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));

////////////////// HANDLEBAR
app.set('view engine', 'hbs');
app.engine('hbs', handlebars.engine({layoutsDir: __dirname + '/views/layouts', extname: 'hbs',}));

////////////////// APP USE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use('/add_user', users);
app.use('/login', auth); 

app.use(express.static('public'))
app.use(express.static('images'))

////////////////// ROUTES
app.get('/', (req, res) =>          {res.render('main' , {layout: 'index'});});
app.get('/home', async(req, res) => {res.render('main' , {layout: 'home'} );});
app.get('/register', (req, res) =>  {res.render('main' , {layout: 'register'});});
app.get('/add-route', (req, res) => {res.render('main' , {layout: 'add-route'});});

app.listen(port, () => console.log(`App listening to port ${port}`))

module.exports = app;