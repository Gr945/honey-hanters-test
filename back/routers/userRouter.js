const express = require("express");
const User = require("../bd/userShema");

const router = express.Router();

router
  .route("/")
  // роут инициализации всех юзеров
  .get(async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
  })

  //роут добавления юзеров
  .post(async (req, res) => {
    const { name, email, comment } = req.body;
    if (name && email && comment) {
     
      const newUser = await User.create({
       name, email, comment
      });
      res.status(200).json(newUser);
   
    } else {
      res.status(400).json({ createUser: false });
    }
  })


  // роут удаление юзеров
  .delete(async (req,res) => {
    
    const {id} = req.body
    const delUser = await User.findByIdAndDelete(id)
      res.status(200).json(delUser)
    
  })

 
module.exports = router;
