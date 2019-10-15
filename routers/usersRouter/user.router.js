const router = require('express').Router();

let {userMiddleware} = require('../../middleware');
let {user} = require('../../controllers');

router.post('/', userMiddleware.checkUserValidityMiddleware, user.createUser);
router.get('/:user_id', userMiddleware.isUserPresentMiddleware, user.getById);
router.get('/', user.findAll);
router.patch('/:user_id', userMiddleware.checkEditUserValidityMiddleware, userMiddleware.isEditUserPresentMiddleware, user.editUser);

module.exports = router;