const mongoose = require('mongoose');

const AnimeFavoriteSchema = mongoose.Schema({
    image:{
        type: String,
    },
    anime_name: {
        type: String,
        required:[true, 'please enter your favorite anime']
    },
    ratings: {
        type: Number,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    description: {
        type: String
    },
},
{
    timestamps: true, 
}
)

const Anime = mongoose.model('anime', AnimeFavoriteSchema);

module.exports = Anime;