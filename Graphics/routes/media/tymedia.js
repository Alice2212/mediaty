var express = require('express');
var router = express.Router();
var tymediaController = require('../../controller/media/tymedia');

router.get('/', tymediaController.indexPage);
router.get('/project', tymediaController.projectPage);
router.get('/contact', tymediaController.contactPage);
router.get('/services', tymediaController.servicesPage);
router.get('/about', tymediaController.aboutPage);

//handling submit for contact form
router.post('/form', tymediaController.contactForm)




//exporting the route
module.exports = router;