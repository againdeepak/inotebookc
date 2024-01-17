const express = require('express');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');
const JWT_SECRET = 'Deepakisgoodb$oy';

// Route 1
// create a user using : POST "/api/auth/createuse". No login 
router.post('/createuser', [
    body('name', "Enter a valid name").isLength({ min: 3 }),
    body('email', "Enter valid email").isEmail(),
    body('password', "Enter valid password").isLength({ min: 5 }),
], async (req, res) => {
    let success=false;
    // if there are errors, return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({success, errors: errors.array() });
    }
    //check wheather the user exit already
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({success, error: "sorry user with this email is already exits" })
        }
        const salt = await bcrypt.genSalt(10);
        secPass = await bcrypt.hash(req.body.password, salt);

        //create new user
        user = await User.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email,
            date: req.body.date,
        })
        // .then(user => res.json(user))
        // .catch(err=>{console.log(err)
        // res.json({error:'Please enter a unique value for email',message:err.message})})
        const data = {
            user: {
                id: user.id

            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        success=true;
        res.json({success, authtoken });
        // res.json(user);
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error ocuured");
    }
})


// Route 2
// Authentication a user using , No login required
router.post('/login', [
    body('email', "Enter valid email").isEmail(),
    body('password', "Password can't be blank").exists(),

], async (req, res) => {
    let success=false;
    //if any erros occurs send bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "Please try to login with correct credentials" });
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            success=false;
            return res.status(400).json({ success,error: "Please try to login with correct credentials" });
        }
        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        success=true;
        res.json({success,authtoken});
        // res.json(user);
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server Error ocuured");
    }

})

// Route 3 : get loggedin user details using POST "/api/auth/getuser". login required
router.post('/getuser', fetchuser, async (req, res) => {
    try {
        userId = req.user.id;
        const user = await User.findById(userId).select("-password")
        res.send(user);
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server Error ocuured");
    }
})

module.exports = router