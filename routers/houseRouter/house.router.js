const router = require('express').Router();

let {houseMiddleware} = require('../../middleware');
let {house} = require('../../controllers');

router.post('/', houseMiddleware.checkNewHouseValidityMiddleware, house.createHouse);
router.get('/:house_id', houseMiddleware.isHousePresentMiddleware, house.getById);
router.get('/', house.findAll);
router.patch('/:house_id', houseMiddleware.checkEditHouseValidityMiddleware, houseMiddleware.isEditHousePresentMiddleware, house.editHouse);

module.exports = router;