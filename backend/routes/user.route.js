const router = require('express').Router()
const controller = require("../controllers/user.controller")
const { isAuthenticated } = require('../middlewares/security/authentication')

router.post("/register",controller.register)
router.post("/login",controller.login)
router.get("/oauth2/google",controller.genGoogleUrl)
router.get("/oauth2/code/google",controller.googleOAuth2)
router.get("/profile",isAuthenticated,controller.profile)
// router.get("/logout",controller.logout)
module.exports = router