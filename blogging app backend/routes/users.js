const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middlewares/auth');

router.post('/:id/follow', auth, userController.followUser);
router.post('/:id/block', auth, userController.blockUser);
router.get('/followers/:email', userController.getFollowers);

module.exports = router;
