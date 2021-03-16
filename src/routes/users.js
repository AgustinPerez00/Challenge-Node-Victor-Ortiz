var express = require('express');
var router = express.Router();

const usersControllers = require ('../controllers/usersControllers')

/* GET  users -- endpoint:http://localhost:3000/api/users */
router.get('/',usersControllers.show);

/* POST  user -- endpoint:http://localhost:3000/api/users */
router.post('/',usersControllers.create);

/* POST  user -- endpoint:http://localhost:3000/api/users/login */
router.post('/login',usersControllers.login);

/* PUT user -- endpoint:http://localhost:3000/api/users/:id */
router.put('/:id',usersControllers.update);

/* DELETE user -- endpoint:http://localhost:3000/api/users/:id */
router.delete('/:id',usersControllers.delete);



module.exports = router;