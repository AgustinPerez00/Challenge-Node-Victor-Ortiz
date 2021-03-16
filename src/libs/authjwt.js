const jwt = require('jsonwebtoken');
const UserSchema = require ('../database/models/UserModel');

module.exports ={ 
    
    verificationToken:

    async (req, res, next) => {

        try {
            //we received a token
        let token = req.headers["x-access-token"];

 
             //if it doesn't exist
            if(!token){
                    return res.status(403).json
                    ({message:"you did not provide token"})
            }
 
             //if it exists we decode to extract an id
            if(token){
                        const decoded = jwt.verify(token,`${process.env.SECRET}`)
                        req.userId = decoded.id;
                        //we look for the user with that id
                        const user = await UserSchema.findById(req.userId, {password:0})
                        
                        //if it is not in the db
                        if(!user){
                            return res.status(404).json({message:'user does not exist in db'})
                        }   
            }
 
         next()
     
        }   catch (error) {
                return res.status(401).
                json({message:'Invalid Token'})
            }
        
    }
}