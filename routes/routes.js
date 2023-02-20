var express = require('express');

var userController = require('../src/user/userController');
const router = express.Router();

// ruta para login
router.route('/user/login').post(userController.loginUserControllerFunc);
// ruta para crear usuario
router.route('/user/create').post(userController.createUserControllerFunc);
//obtener todos los usuarios
router.route('/user').get(userController.allUserControllerFunc);
// obtener un usuario
router.route('/user/search/:id').get(userController.oneUSerControllerFunc);
// borrar un usuario
router.route('/user/delete/:id').delete(userController.deleteUserControllerFunc);
// actualizar usurio 
router.route('/user/update/:id').put(userController.updateUserControllerFunc);


module.exports = router;
