const UserSchema = require ('../database/models/UserModel');
const {sign} = require ('jsonwebtoken');


module.exports = {
    show : async(req, res, next)=> {
        const users = await UserSchema.find();
        res.json(users);         
    },

    create : async(req,res,next)=>{
      const {name, password, email} = req.body
      const newUser = new UserSchema({
        name, 
        password, 
        email
      });

    // encrypting password
    newUser.password = await UserSchema.encryptPassword(newUser.password);

      const saveUser = await newUser.save();
      
      /**GENERACION DEL TOKEN**/
      const token = sign({id:saveUser._id},`${process.env.SECRET}`)

        res.json({
          status: 'saved User',
          token:token
        })
          },

    login:async(req,res,next)=>{

      //Request body email can be an email or username
    const userFound = await UserSchema.findOne(
      { email: req.body.email })

      if (!userFound){
        return res.status(400).json({ message: "User not found" });
      } 
    
      const matchPassword = await UserSchema.comparePassword(
        req.body.password,
        userFound.password
      );

      if (!matchPassword){
        return res.status(401).json({ token:null, message: "Wrong password" });
      } 

     /**GENERACION DEL TOKEN**/
     const token = sign({id:userFound._id},`${process.env.SECRET}`)

    res.json({token})
},
          
     update : (req, res, next)=> {
            
      res.json({'update':'user'});          
    },
         
    delete: async (req, res, next) => {
      await UserSchema.findByIdAndRemove(req.params.id);
      res.json({
        status: 'user deleted'
      });
    }

    

  }