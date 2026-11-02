const express=require('express');
const router=express.Router();
const inventoryController=require('../controllers/inventoryController');
const validateInventory=require('../middlewares/validateInventory');

router.post('/',inventoryController.createInventory);
router.get('/',inventoryController.getAllInventories);
router.get('/:id',inventoryController.getInventoryById);
router.put('/:id',validateInventory,inventoryController.updateInventoryById);
router.patch('/:id',inventoryController.partialUpdateInventoryById);
router.delete('/:id',inventoryController.deleteInventoryById);

module.exports=router;