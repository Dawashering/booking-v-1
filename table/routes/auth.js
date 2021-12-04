const express = require("express");
const Route = express.Router(); 
const authController = require('../controllers/auth');

const router = express.Router();

router.post('/data', authController.data);
router.post('/delete', authController.delete);
router.get('/',authController.data);

module.exports = router;