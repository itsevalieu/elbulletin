const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the schema
const postSchema = new Schema({
    _id: {
        type: Schema.ObjectId,
        auto: true
    },
    article: {
        type: Schema.Types.ObjectId,
        ref: 'Article'
    },
    project: {
        type: Schema.Types.ObjectId,
        ref: 'Project'
    }
});

// Create a model
const Post = mongoose.model('post', postSchema);

// Export the model
module.exports = Post;