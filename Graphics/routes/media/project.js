var express = require('express');
var router = express.Router();
var tymediaController = require('../../controller/media/tymedia');

router.get('/', tymediaController.IndexPage);



//exporting the route
module.exports = router;
