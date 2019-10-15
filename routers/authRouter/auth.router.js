const router = require('express').Router();

let {userMiddleware} = require('../../middleware');
let {user} = require('../../controllers');

router.post('/', userMiddleware.checkExistUserMiddleware, user.auth);

module.exports = router;