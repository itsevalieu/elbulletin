const Post = require('../models/Post.js');

module.exports = {
    getPost: async (req, res, next) => {
        const data = await Post.find({});
        res.status(200).json({data});
    },
    postPost: async (req, res, next) => {
        const { 
           article,
           project
        } = req.body;

        //create new document
        const newPost = new Post({
            article,
            project
        });
        await newPost.save();
        //respond with message
        res.status(200).json({success: 'Successfully added to database!'});
    },
    updatePost: async (req, res, next) => {
        const { 
            article,
            project
        } = req.body;

        const foundPost = await Post.findByIdAndUpdate({
            _id: req.params.id
        }, { 
            $set: {
               article,
               project
            }
        }, (err) => {
            if(err) return err;
        });
        res.status(200).send({success: 'Successfully updated'});
    },
    deletePost: async (req, res, next) => {
        const foundPost = await Post.findByIdAndDelete({_id: req.params.id}); 
        res.status(200).json({success: 'Successfully deleted.'});
    }
}