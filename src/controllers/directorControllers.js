const DirectorSchema = require('../database/models/DirectorModel');


module.exports = {
  show: async (req, res, next) => {
    const Director = await DirectorSchema.find();

    res.json(Director);

  },

  create: async (req, res, next) => {

    //console.log(req.files)
    const { name } = req.body

    const director = await new DirectorSchema({
      name
    });

    await director.save();
    res.json([{
      status: 'director saved'
    },
  {data:{
    director
  }}
  ]);

  },

  delete: async (req, res, next) => {
    await DirectorSchema.findByIdAndRemove(req.params.id);
    res.json({
      status: 'Director deleted'
    });
  }
}
