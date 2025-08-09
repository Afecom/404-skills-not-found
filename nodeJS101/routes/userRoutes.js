const { Router } = require('express')
const { login } = require('../controllers/controller')
const router = Router()

router.use("/login", login)

module.exports = router