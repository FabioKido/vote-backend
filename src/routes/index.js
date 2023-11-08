const { Router } = require('express')

const UserController = require('../controllers/UserController')
const ParticipantController = require('../controllers/ParticipantController')

const router = Router()

router.get('/users', UserController.index)
router.post('/user', UserController.store)
router.delete('/user/:id', UserController.destroy)

router.get('/participants', ParticipantController.index)
router.post('/participant', ParticipantController.store)
router.put('/participant/:id', ParticipantController.update)
router.delete('/participant/:id', ParticipantController.destroy)

module.exports = router