var express = require('express');
var router = express.Router();

const moviesControllers = require ('../controllers/moviesControllers')
const { verificationToken } = require('../middlewares/index')

/* GET  movies -- endpoint:http://localhost:3000/api/movies/id_director */
router.get('/',moviesControllers.show);

/* GET  movies -- endpoint:http://localhost:3000/api/movies/searchByTitle */
router.get('/searchByTitle/:title',moviesControllers.searchByTitle);

/* POST  movie -- endpoint:http://localhost:3000/api/movies */
router.post('/',verificationToken,moviesControllers.create);

/* PUT  movie -- endpoint:http://localhost:3000/api/movies */
router.put('/:id',moviesControllers.update);

/* PUT  movie -- endpoint:http://localhost:3000/api/movie/assignDirector */
router.put('/assigndirector/:id',moviesControllers.assignDirector);

/* DELETE  movie -- endpoint:http://localhost:3000/api/movie */
router.delete('/:id',moviesControllers.delete);

module.exports = router;
