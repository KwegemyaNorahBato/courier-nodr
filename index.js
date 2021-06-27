const express = require('express');
const app = express();
const dotenv=require('dotenv');
const mongoose =require('mongoose');
//import routes
const authRoute=require('./routes/auth');
const postRoute=require('./routes/posts ');
const LoginRoute=require('./routes/Login');
//const authRoute=require('./routes/auth');
//const postRoute=require('./routes/posts ');


dotenv.config();

//Connect To DB
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true , useFindAndModify: false},
     ()=> console.log('connected to db')
     );


//Middleware
app.use(express.json());

//Route Middlewares 
app.use('/api/user',authRoute);
app.use('/api/posts',postRoute);
app.use('/api/user',LoginRoute);


//ROUTES 
app.get('/', (req,res)=> {
    res.send('Register');
    res.send('Login');

});



app.listen(3000 , ()=> console.log('Server Up and running'));
//module.exports=router;
