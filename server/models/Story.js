const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const storySchema = new Schema({

    title: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    synopsis: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },

    creator: {
        type: ObjectId,
        ref: "User"
    }
    

});

module.exports = new Model('Story', storySchema);