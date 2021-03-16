const mongoose = require ('mongoose');
const {Schema} = mongoose;



const DirectorSchema = new Schema(
    {
        name:
        {
            type:String,
            unique:true,
            required:true
        }

        
    }
        
       
)

DirectorSchema.plugin(require('mongoose-autopopulate'));


module.exports = mongoose.model('Director', DirectorSchema);