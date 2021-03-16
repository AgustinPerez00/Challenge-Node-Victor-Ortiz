var express = require('express');
var router = express.Router();

const directorControllers = require ('../controllers/directorControllers')

/* GET  director -- endpoint:http://localhost:3000/api/director */
router.get('/',directorControllers.show);

/* POST  director -- endpoint:http://localhost:3000/api/director */
router.post('/',directorControllers.create);

/* DELETE  director -- endpoint:http://localhost:3000/api/director */
router.post('/:id',directorControllers.delete);

module.exports = router;