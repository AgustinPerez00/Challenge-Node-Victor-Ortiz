const MovieSchema = require ('../database/models/MovieModel');


module.exports = {
    show : async(req, res, next)=> {
      const Movies = await MovieSchema.find()
      res.json(Movies);        
    
    },
    searchByTitle : async(req, res, next)=> {
      const MoviesOne = await MovieSchema.find({
        title: req.params.title 
      });
      
      res.json(MoviesOne);
    },

    create: async(req,res,next)=>{

      const { title, director,description ,actors } = req.body
      
                  const movie = await new MovieSchema({
                  title,director,description,actors                   
                  });
                  
                  await movie.save();
                  res.json([{
                    status: `${title} saved`
                  },{
                    data:{
                      movie
                    }
                  }]);
      
                },

    update:async(req,res,next)=>{

      await MovieSchema.findByIdAndUpdate(req.params.id, req.body);
      res.json({
        status: 'Movie update'
      });
    },

        delete:async(req,res,next)=>{
      await MovieSchema.findByIdAndRemove(req.params.id);
      res.json({
        status: 'movie deleted'
          });
            },

      assignDirector:async(req,res,next)=>{
        const { director } = req.body;

        await MovieSchema.findByIdAndUpdate(req.params.id,{
          $push: { director : director}
        });
        res.json({
          status: `${director} assigned to the movie `
        });
      },

     
      
}
