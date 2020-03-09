var express = require('express');
var router = express.Router();
var tymediaController = require('../../controller/media/tymedia');

router.get('/', tymediaController.IndexPage);
router.get('/project', tymediaController.ProjectPage);
// router.get('/project.html',tymediaController,projects)



//exporting the route
module.exports = router;