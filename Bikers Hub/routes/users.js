const bcrypt      = require('bcrypt');
const User      = require('../model/models');
const express   = require('express');
const router    = express.Router();

router.post("/", async (request, response) => 
{
  let user = await User.findOne({ email: request.body.email });
    if (user) 
      return response.status(400).send('Bu Kullanıcı Zaten Var !!!!!');
    
    else 
    {  
      const user = new User({
        username: request.body.username,
        email: request.body.email,
        password: request.body.password
      });
      const salt      = await bcrypt.genSalt(10);
      user.password   = await bcrypt.hash(user.password, salt);
      
      console.log(request.body.email)
        User.create(user, (error,userObj)=>{response.redirect('/home')})
    }
});


module.exports = router;