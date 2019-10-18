const router = require('express').Router();

let {houseMiddleware, checkAccessTokenMiddleware} = require('../../middleware');
let {house} = require('../../controllers');

router.post('/', houseMiddleware.checkNewHouseValidityMiddleware, house.createHouse);
router.get('/:house_id', houseMiddleware.isHousePresentMiddleware, house.getById);
router.get('/', house.findAll);
router.patch('/:house_id',
    checkAccessTokenMiddleware,
    houseMiddleware.checkEditHouseValidityMiddleware,
    houseMiddleware.isEditHousePresentMiddleware,
    house.editHouse);
router.delete('/:houses_id',
    checkAccessTokenMiddleware,
    houseMiddleware.isHousePresentMiddleware,
    house.deleteHouseById)

module.exports = router;