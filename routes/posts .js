const router=require('express').Router();
const verify= require('./verifyToken')
//router.get('/',verify,(req,res)=>{
   //res.json({posts:{title:'my first post'
   // ,description:'Random data that you shouldnt access unless your logged in'}})
//});



router.post('/register',(req,res)=>{
    res.send('Register');
});

router.post('/Login',(req,res)=>{
    res.send('Login');
});
module.exports=router;