//require router from express for use
const router = require('express').Router()
//controllers
const mainController = require('../controllers/main')

//GET requests
router.get('/', mainController.main)

//POST requests



//export our router
module.exports = router