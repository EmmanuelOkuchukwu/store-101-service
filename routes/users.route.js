const express = require('express');
const router = express.Router();
const users = require('../service/users.service');

router.get('/getusers', users.get_users);
router.post('/createuser', users.create_user);
router.get('/getuser/:id', users.get_user);
router.delete('/deleteuser/:id', users.delete_user);
router.put('/updateuser/:id', users.update_user);

module.exports = router;
