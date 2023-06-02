const express = require('express');
const router = express.Router();
const Admin = require('../models/adminModel');

router.post('/login', async (req,res) => {
    const {adminname,admincode,password} = req.body;
    try {
        const admin = await Admin.find({adminname,admincode,password});
        if(admin.length > 0){
           const currentAdmin = {
            adminname : admin[0].adminname,
            admincode : admin[0].admincode,
            password : admin[0].password,
             _id : admin[0]._id
           }
           res.status(200).send(currentAdmin);
        }else{
          res.status(400).json({
             message : 'Login Failed'
          })
        }
    } catch (error) {
       res.status(404).json({
          message : 'Something Went Wrong'
       })
    }
 });

 module.exports = router;