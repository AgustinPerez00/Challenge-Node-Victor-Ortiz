const mongoose = require ('mongoose');
const {Schema} = mongoose;
const bcrypt = require("bcryptjs");


const UserSchema = new Schema(
    {
        name:
        {
            type:String,
            unique:true,
            required:true
        },
        email:
        {
            type:String,
            unique:true,
            required:true
        },
        password:
        {
            type:String,
            required:true
        }
        
    },
    {
      timestamps: true,
      versionKey: false,
    }
        
       
)

  UserSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  };
  
  UserSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
  }

module.exports = mongoose.model('User', UserSchema);
