const { Router } = require('express')
const { about, contact } = require('../controllers/controller')
const router = Router()

router.use("/about", about)
router.use("/contact", contact)

module.exports = router