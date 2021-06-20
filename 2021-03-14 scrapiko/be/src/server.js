const express = require('express')
const app = express()
const env = require('dotenv');
// const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const { urlencoded } = require('body-parser');
const nodemailer = require('./utils/nodemailer');

//mongodb connection
mongoose.connect(
    // 'mongodb+srv://vinay21:2VZohKEEPVDPoQ7D@cluster0.lxhhh.mongodb.net/scrapiko?retryWrites=true&w=majority', 
    
    'mongodb+srv://ecom123:ecommerce21@cluster0.w5oua.mongodb.net/Ecommerce?retryWrites=true&w=majority',
    {useUnifiedTopology:true,
    useCreateIndex:true})
    .then(() => console.log('---connected to the Database'))
    .catch((error) => console.error(' --> --> --> unable to connect Data base', error , '<-- <-- <--'))

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:false}))

app.use(express.json());
app.use(express.urlencoded({extended:false}))

const users = [
    {    "name": "Vinay", "age":"27"},
    {"name":"Vijay", "age":"32"}
]
app.get('/', (req, res, next)=>{
    res.status(200).send('hello vinay111')
})

app.get('/users', ( req,res) =>{
    res.send(users)
})
const port = process.env.PORT || 2021;

app.listen(port, () => console.log(`----port is ${port}---`))