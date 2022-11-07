const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.post('/verify-email', async (req, res, next) => {
    try {
      console.log('web hook called')
      await User.update({emailVerified: true}, {where:{email: req.body.email}})
    } catch (err) {
      next(err)
    }
  })
  
  router.post('/verify-phone', async (req, res, next) => {
      try {
        await User.update({phoneVerified: true}, {where:{phone: req.body.phone}})
      } catch (err) {
        next(err)
      }
    })