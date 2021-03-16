const TvShowchema = require ('../database/models/TvShowModel');


module.exports = {
    show : async(req, res, next)=> {
      const TvShow = await TvShowchema.find()
      res.json(TvShow);        
    
    },
    searchByActor : async(req, res, next)=> {
      console.log(req.params.actor)
       const Actor = await TvShowchema.find({
        actors: req.params.actor
      });
      
      res.json(Actor); 
    },
        
    create: async(req,res,next)=>{

      const { title, season, description, genre, director,episode,actors  } = req.body
      
                  const tvShow = await new TvShowchema({
                    title, season, description, genre, director,episode,actors                   
                  });
                  
                  await tvShow.save();
                  res.json([
                    {
                    status: `${title} saved`
                  },
                    {
                      data:{tvShow}
                    }  
                ]);
      
                },

    update:async(req,res,next)=>{

      await TvShowchema.findByIdAndUpdate(req.params.id, req.body);
      res.json({
        status: 'tvShow update'
      });
    },

        delete:async(req,res,next)=>{
      await TvShowchema.findByIdAndRemove(req.params.id);
      res.json({
        status: 'tvShow deleted'
          });
            },

      assignDirector:async(req,res,next)=>{
        const { director } = req.body;

        await TvShowchema.findByIdAndUpdate(req.params.id,{
          $push: { director : director}
        });
        res.json({
          status: `${director} assigned to the tv Show`
        });
      },

      
}