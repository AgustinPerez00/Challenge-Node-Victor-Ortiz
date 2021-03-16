var express = require('express');
var router = express.Router();

const tvShowControllers = require ('../controllers/tvShowControllers')
const { verificationToken } = require('../middlewares/index')

/* GET  TvShow -- endpoint:http://localhost:3000/api/tvShow/id_director */
router.get('/',tvShowControllers.show);

/* POST  TvShow -- endpoint:http://localhost:3000/api/tvShow */
router.post('/',verificationToken,tvShowControllers.create);

/* GET  TvShow -- endpoint:http://localhost:3000/api/TvShow/searchByActor */
router.get('/searchByActor/:actor',tvShowControllers.searchByActor);

/* PUT  TvShow -- endpoint:http://localhost:3000/api/tvShow */
router.put('/:id',tvShowControllers.update);

/* PUT  TvShow -- endpoint:http://localhost:3000/api/tvShow/assignDirector */
router.put('/assigndirector/:id',tvShowControllers.assignDirector);

/* DELETE  TvShow -- endpoint:http://localhost:3000/api/tvShow */
router.delete('/:id',tvShowControllers.delete);

module.exports = router;