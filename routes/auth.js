const router=require('express').Router();
const User= require('../models/User');
const jwt=require ('jsonwebtoken');
const bcrypt=require('bcryptjs');
//const { Router } = require('express');
 //const  { registerValidation, loginValidation }=require ('../validation');


router.post('/register',async (req,res)=> {
    
    //LET'S VALIDATE THE DATA BEFORE WE ARE A USER
  // const {error}=registerValidation(req,body);
   //if (error) return res.status(400).send(error.details[0].message)
 
    //checking if the user is already in the database 
    //const emailExist=await User.findOne ({email:req.body.email});
    //if (emailExist)return res.status(400).send('Email already exists');

    //Hash passwords
    const salt=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(req.body.password, salt);
    
    //create new user
    const user = new User({
        name :req.body.name,
        email:req.body.email,
        password:hashedPassword
    });
try {
    const savedUser=await user.save();
    return res.status(201).send('User created')

}catch(err){
    res.status(400).send(err);
}
});

module.exports=router;
