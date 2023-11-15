import express from 'express';

// import {registerController,logincontroller,testcontroller, forgotPasswordController} from '../controllers/authController.js';

import {registerController,registerControllerW,registerControllerA,logincontroller,logincontrollerW,logincontrollerA} from '../controllers/authController.js';

// import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';

//router object

const router =express.Router();

//Routing

//REGISTER||METHOD POSt
router.post('/register',registerController)
router.post('/registerw',registerControllerW)
router.post('/registera',registerControllerA)

// //LOGIN||POST
router.post('/login',logincontroller)
router.post('/loginw',logincontrollerW)
router.post('/logina',logincontrollerA)
// router.post('/loginw',logincontrollerW)
// router.post('/logina',logincontrollerA)

// // //forgot password
// router.post("/forgot-password",forgotPasswordController)
// router.post("/forgot-passwordw",forgotPasswordControllerW)
// router.post("/forgot-passworda",forgotPasswordControllerA)



export default router;

