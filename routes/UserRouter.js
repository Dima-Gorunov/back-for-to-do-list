const Router = require('express')
const router = new Router()

const userController = require('../controllers/userController')

router.post('/registration',)
router.post('/login',)
router.get('/auth', userController.checkAuth)

module.exports = router