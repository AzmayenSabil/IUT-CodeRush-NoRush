import { Router } from "express";
const router = Router();

/** import all controllers */
import * as authController from '../controllers/authController.js';
import * as cvController from '../controllers/cvController.js';
import { registerMail } from '../controllers/mailer.js'
import Auth, { localVariables } from '../middleware/auth.js';



/** POST Methods */
router.route("/register").post(authController.register); // register user
router.route('/registerMail').post(registerMail); // send the email
router.route('/authenticate').post(authController.verifyUser, (req, res) => res.end()); // authenticate user
router.route("/login").post(authController.verifyUser, authController.login); // login in app

router.route("/createCv").post(cvController.createCv); // post cv

/** GET Methods */
router.route("/user/:username").get(authController.getUser); // user with username
router.route('/generateOTP').get(authController.verifyUser, localVariables, authController.generateOTP) // generate random OTP
router.route("/verifyOTP").get(authController.verifyUser, authController.verifyOTP); // verify generated OTP
router.route("/createResetSession").get(authController.createResetSession); // reset all the variables

router.route("/getCv/:id").get(cvController.getCv) // get cv

/** PUT Methods */
router.route("/updateUser").put(Auth, authController.updateUser); // is use to update the user profile
router.route('/resetPassword').put(authController.verifyUser, authController.resetPassword); // use to reset password



export default router;