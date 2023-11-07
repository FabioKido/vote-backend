const { Router } = require('express')

const UserController = require('../controllers/UserController')

const router = Router()

router.get('/users', UserController.index)
router.post('/user', UserController.store)

module.exports = router

