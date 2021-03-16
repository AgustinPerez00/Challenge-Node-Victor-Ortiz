const mongoose = require ('mongoose');
const {Schema} = mongoose;


const MovieSchema = new Schema(
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

    MovieSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('Movie', MovieSchema);
