
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../Model/user');
const Admin = require('../Model/user');
const router = express.Router();

//user registrartion
router.post('/register',async(req,res)=>{
    try {
        const {username,password} = req.body;
        const hashedPassword = await bcrypt.hash(password,10);
        const user = new User({
            user : username ,
            password : hashedPassword
        });
        await user.save();
        res.status(201).json({message : "User created successfully"});
    } 
    catch (error) {
        res.status(500).json({error : "Registration faild"});
    }
});


//user login


router.post('/login',async(req,res)=>{
    try {
        const {username,password} = req.body;
        const user = await User.findOne({
            user:username
        })
        if(!user){
            return res.status(401).json({error : "Login failed"});
        }

        const passwordMatch = await bcrypt.compare(password,user.password);

        if (!passwordMatch) {
            return res.status(401).json({error : "Invalid Password match"});
        }
        
        const token = jwt.sign({userId : user._id },"secretKey",{expiresIn : '1h'});

        res.status(200).json({token});
    } 
    catch (error) {
       console.log(error)
        //res.status(500).json({error : "Login faild"});
    }
});


//admin resister

router.post('/admin-register',async(req,res)=>{
    try {
        const {username,password} = req.body;
        const hashedPassword = await bcrypt.hash(password,10);
        const admin = new Admin({
            user : username ,
            password : hashedPassword
        });
        await admin.save();
        res.status(201).json({message : "Admin created successfully"});
    } 
    catch (error) {
        console.log(error)
       // res.status(500).json({error : "Registration faild"});
    }
});


//admin login


router.post('/login-admin',async(req,res)=>{
    try {
        const {username,password} = req.body;
        const admin = await Admin.findOne({
            user:username
        })
        if(!admin){
            return res.status(401).json({error : "Login failed"});
        }

        const passwordMatch = await bcrypt.compare(password,user.password);

        if (!passwordMatch) {
            return res.status(401).json({error : "Invalid Password match"});
        }
        
        const token = jwt.sign({userId : admin._id },"secretKey",{expiresIn : '1h'});

        res.status(200).json({token});
    } 
    catch (error) {
       console.log(error)
        //res.status(500).json({error : "Login faild"});
    }
});





router.post('/forgotPassword', async(req,res)=>{
    try {
        const {username,password} = req.body;
        const user = await User.findOne({
            user:username
        })
        // console.log(user);
        if (user) {

            const updatedPassword = await User.findByIdAndUpdate(user._id, {password:password}, {
                new:true
            });
            
            return res.status(200).json({message : "Upadated"});
        }





        res.status(200);
    } catch (error) {
        console.log(error)
        
    }
})




module.exports = router;