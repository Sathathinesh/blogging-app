const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const auth = require('../middlewares/auth');

router.post('/', auth, blogController.createBlog);
router.get('/', auth, blogController.getAllBlogs);
router.get('/:id', auth, blogController.getBlogById);

module.exports = router;
