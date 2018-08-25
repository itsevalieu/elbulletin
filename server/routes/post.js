//Dependencies
const express = require('express');
const router = require('express-promise-router')();

const PostControllers = require('../controllers/post.js');

//Routes
router.route('/').get(PostControllers.getPost);

router.route('/').post(PostControllers.postPost);

router.route('/:id').put(PostControllers.updatePost);

router.route('/:id').delete(PostControllers.deletePost);

module.exports = router;