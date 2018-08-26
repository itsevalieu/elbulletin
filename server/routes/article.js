//Dependencies
const express = require('express');
const router = require('express-promise-router')();

const ArticleControllers = require('../controllers/article.js');

//Routes
router.route('/').get(ArticleControllers.getArticle);

router.route('/:id').get(ArticleControllers.getSpecificArticle);

router.route('/').post(ArticleControllers.postArticle);

router.route('/:id').put(ArticleControllers.updateArticle);

router.route('/:id').delete(ArticleControllers.deleteArticle);

module.exports = router;