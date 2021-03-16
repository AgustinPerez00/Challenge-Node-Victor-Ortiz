const mongoose = require ('mongoose');
const {Schema} = mongoose;


const TvShowSchema = new Schema(
    {
        title:
        {
            type:String,
            unique:true,
            required:true
        },

        description:
        {
            type:String,
            required:true
        },

        genre:
        {
            type:String,
        },

        season:{
            type:Number,
            required:true
        },
        episode:{
            type:Number,
            required:true
        },
        director:
        [{
            ref:"Director",
            type:Schema.Types.ObjectId,
            autopopulate: true

        }],
        actors:
        [{
            type:String,
            required:true
        }]
    })

    TvShowSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('TvShow', TvShowSchema);
