const { Router } = require('express')
const otherRoutes = require('./otherRoutes')
const userRoutes = require('./userRoutes')
const router = Router()

router.use('/user', userRoutes)
router.use ('/other', otherRoutes)

module.exports = router