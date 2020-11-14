/* const express = require('express');
const { isLoggedIn } = require('../bin/middleware')
const router = express.Router();
const TodoList = require('../models/TodoList')


router.get("/whatever", (req, res, next) => {
  res.json({user:req.user})
})

router.get("/user/getAllTodos", isLoggedIn, (req, res, next) => { 
  console.log('pedro', req.query)
  TodoList.findOne({userId:req.user._id}).then((todoList) => {
    res.json({todoList})
  })
})


router.post('/replaceAllTodos', isLoggedIn, (req, res, next) =>{
  console.log('replace todos from user', req.user ,' with req.body',req.body)
  TodoList.findOneAndUpdate({
    userId:req.user._id
  }, {$set: {todos:req.body.todos}}, {upsert:true}).then(todoList => {
    todoList.save(()=>{
      res.json({success:true})
    })
  }).catch(err=>{ console.log(err) })
})



module.exports = router;
*/