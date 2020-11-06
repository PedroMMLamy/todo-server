/* const express = require("express")
const passport = require('passport')
const router = express.Router()
const TodoList = require("../models/TodoList")

const bcrypt = require("bcrypt")
const bcryptSalt = 10

router.post("/createTodo", (req, res, next) => {
  const { todos, userId } = req.body
  .catch(err => next(err))
})

router.post("/login", (req, res, next) => {
  const { username, password } = req.body

  User.findOne({ username })
    .then(userDoc => {
      if (!userDoc) {
        next(new Error("Incorrect Username "))
        return
      }

      if (!bcrypt.compareSync(password, userDoc.password)) {
        next(new Error("Incorrect Password"))
        return
      }

      req.logIn(userDoc, () => {
        userDoc.password = undefined
        res.json(userDoc)
      })
    })
    .catch(err => next(err))
})

router.post('/login-with-passport-local-strategy', (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
    if (err) {
      res.status(500).json({ message: 'please retry' })
      return
    }

    if (!theUser) {
      res.status(401).json(failureDetails)
      return
    }

    req.login(theUser, (err) => {
      if (err) {
        res.status(500).json({ message: 'please retry' })
        return
      }

      res.json(req.user)
    })
  })(req, res, next)
})

router.get("/logout", (req, res) => {
  req.logout()
  res.json({ message: 'Hope to see you soon!' })
})

module.exports = router
*/