const router=require('express').Router();
const User= require('../models/User');
const jwt=require ('jsonwebtoken');
const bcrypt=require('bcryptjs');

router.post('/Login',async (req,res)=> {
    User.find({ email: req.body.email})
    .exec()
    .then(user => {
        if (user.length < 1) {
            return res.status(401).json(
             "invalid user"
            )
        }

            bcrypt.compare(req.body.pass, user[0].password, (err, result)=>{
                if (err) {
                    return res.status(401).json(
                         "invalid user"
                    )
                }
                if (result) {
                  const token = jwt.sign(
                      {
                        email: user[0].email,
                    }, 
                   
                    );
            return res.status(200).json({
                message:   "User created",
                token:token
            })
                }
                res.status(401).json(
                     "invalid user"
                )
            
            })
            
                })
                .catch( err => {
                    console.log(err);
                    res.status(500).json({
                        error:err
                    });
                });
            });
            
            module.exports = router;
   
