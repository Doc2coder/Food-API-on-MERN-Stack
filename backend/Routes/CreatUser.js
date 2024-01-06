const express = require('express')
const router = express.Router()
const  User  = require('../models/User'); // Make sure the structure matches
const { query, matchedData, validationResult, body } = require('express-validator');


router.post("/creatuser", [
    body('email').isEmail(),
    body('name').isLength({ min: 5 }),
    body('password', 'Incorrect Password').isLength({min: 5 })
],
async (req, res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }




    try { 
       await User.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
            location: req.body.location
        }).then(res.json({success:true}));

    } catch (error) {
        console.log(error)
        res.json({success:false});
    }
})

module.exports = router;