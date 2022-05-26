const bcrypt = require('bcrypt');
//const _ = require('lodash');
const User = require('../model/models');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {

    let user = await User.findOne({ username: req.body.username });
    if (!user) {return res.status(400).send('Incorrect email or password.');}

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    
    if (!validPassword) {return res.status(400).send('Incorrect email or password.');}
    else{res.redirect('home');}
});
module.exports = router; 