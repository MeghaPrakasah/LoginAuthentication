
const express = require('express')
const verifiedToken = require ('../MiddleWare/authMiddleware')
const router = express.Router()

router.get('/',verifiedToken,(req,res)=>{
    res.status(200).json({message : "Protected route access"})
})
module.exports = router
