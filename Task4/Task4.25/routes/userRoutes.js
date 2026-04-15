const express=require('express');
const router=express.Router();
const userController=require('../controllers/userController');
const auth=require('../middleware/auth');
router.get('/',userController.getUsers);
router.post('/',auth,userController.addUser);
module.exports=router;