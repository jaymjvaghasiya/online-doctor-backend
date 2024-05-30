let express = require('express');
let router = express.Router();
let userController = require('../controller/UserController');

router.get('/user', userController.getAllUser);
router.post('/user', userController.createUser);
router.delete('/user/:id', userController.deleteUser);
router.put('/user/:id', userController.updateUser);
router.post('/login', userController.userLogin);

module.exports = router;