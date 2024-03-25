const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')

const Admin = require('../model/admin.model');
const hashpassword = require('../middleware/hashpassword.js')

router.post('/adminsignin', async (req, res) => {
    const get_account = await Admin.exists({email: req.body.email})
    
    if(get_account){
        let get_result = await Admin.find({email: req.body.email});
        bcrypt.compare(req.body.pass, get_result[0].pass, (e, r) => {
            if(r) {
                res.status(200).json({message: 'success'})
            }
            else {
                res.status(401).json({message: "password not verified"})
            }
        })
        return
    }
    else {
        res.status(401).json({message: "password not verified"})
    }
    
})

router.post('/addadmin',hashpassword, async (req, res) => {
    let d = {
        email: req.body.email,
        pass: req.hash
    }
    
    try{
        const add_admin = await Admin.create(d);
        res.status(201).json(add_admin);
    } catch(error){
        res.status(400).json({message: error.message})
    }   

})

router.get('/getAdmin', async (req, res) => { 
    try{
        const getAdmin = await Admin.find();
        res.status(200).json(getAdmin);
    } catch(error){
        res.status(400).json({message: error.message})
    }   

})


router.delete('/deleteadmin/:id', async (req, res) => {
    try{
        await Admin.findByIdAndDelete({_id: req.params.id});
        res.status(200).json({message: "deleted successfully"});
    } catch(error){
        res.status(500).json({message: error.message})
    }   
})



module.exports = router
