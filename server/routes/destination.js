const controllers = require('../controllers/');

const { auth } = require('../utils/auth')
const router = require('express').Router();


router.get('/all', controllers.destination.get.all);

router.get('/details/:id',  controllers.destination.get.details);

// router.get('/my', (auth), destinationController.get.my);

router.post('/', controllers.destination.post.create);

router.put('/:id', controllers.destination.put);

router.delete('/:id',  controllers.destination.delete);

module.exports = router;
