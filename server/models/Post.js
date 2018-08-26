const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the schema
const postSchema = new Schema({
    _id: {
        type: Schema.ObjectId,
        auto: true
    },
    title: {
        type: String
    },
    summary: {
        type: String
    },
    article: {
        type: Schema.Types.ObjectId,
        ref: 'Article'
    },
    category: {
        type: String,
        enum: ['creative', 'literature', 'technical', 'research', 'project']
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