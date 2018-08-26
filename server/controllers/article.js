const Article = require('../models/Article.js');
const Post = require('../models/Post.js');

module.exports = {
    getArticle: async (req, res, next) => {
        const data = await Article.find({});
        res.status(200).json({data});
    },
    getSpecificArticle: async (req, res, next) => {
        console.log(req.params.id);
        const article_id = await Post.findOne({_id: req.params.id})
            .then((post) => {
                return post.article;
            });
        res.status(200).json({article_id});
    },
    postArticle: async (req, res, next) => {
        const {
            title,
            author,
            year,
            category,
            summary,
            body
        } = req.body;

        //create new document
        const newArticle = new Article({
            title,
            author,
            year,
            category,
            summary,
            body
        });
        await newArticle.save(function(err) {
            if (err) return err;

            //create post for article
            const newPost = new Post({
                title: newArticle.title,
                summary: newArticle.summary,
                category: newArticle.category,
                article: newArticle._id
            });

            //save post
            newPost.save(function (err) {
                if (err) return err;
            });
        });
        //respond with message
        res.status(200).json({success: 'Successfully added to database!'});
    },
    updateArticle: async (req, res, next) => {
        const { 
            title,
            author,
            year,
            category,
            summary,
            body
        } = req.body;

        const foundArticle = await Article.findByIdAndUpdate({
            _id: req.params.id
        }, { 
            $set: {
                title,
                author,
                year,
                category,
                summary,
                body
            }
        }, (err) => {
            if(err) return err;
        });
        res.status(200).send({success: 'Successfully updated'});
    },
    deleteArticle: async (req, res, next) => {
        const foundArticle = await Article.findByIdAndDelete({_id: req.params.id}); 
        res.status(200).json({success: 'Successfully deleted.'});
    }
}