const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the schema
const articleSchema = new Schema({
    _id: {
        type: Schema.ObjectId,
        auto: true
    },
    title: {
        type: String
    },
    author: {
        type: String
    },
    year: {
        type: String
    },
    category: {
        type: String,
        enum: ['creative', 'literature', 'technical', 'research', 'project']
    },
    summary: {
        type: String
    },
    body: {
        type: String
    }
});

// Create a model
const Article = mongoose.model('article', articleSchema);

// Export the model
module.exports = Article;