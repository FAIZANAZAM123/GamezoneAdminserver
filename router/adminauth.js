const express = require('express');
const router = express.Router();

const adminController = require('../Controllers/AdminController');
const authenticate = require('../Middleware/authenticate');


router.post("/adminregister", adminController.adminregister);
router.post("/adminsignin", adminController.adminsignIn);

// router.get("/getall", adminController.getall);


router.get("/getallusers", adminController.getallusers);

router.get("/authadmin", authenticate);

router.get("/contact", authenticate, adminController.getContact);

router.get("/logout", authenticate, adminController.logout);
router.post('/approveuser/:userId', adminController.approveUser);


module.exports = router;