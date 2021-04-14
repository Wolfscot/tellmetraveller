const controllers = require('../controllers/');
// const router = require('express').Router();
const { auth } = require('../utils/auth')

// router.get('/', controllers.destination.get);

// router.post('/', auth(), controllers.destination.post);

// router.put('/:id', auth(), controllers.destination.put);

// router.delete('/:id', auth(), controllers.destination.delete);


const destinationController = require('../controllers/destination');
const router = require('express').Router();

router.get('/all', controllers.destination.get.all);

router.get('/details/:_id',  controllers.destination.get.details);

// router.get('/my', (auth), destinationController.get.my);

router.post('/', controllers.destination.post.create);

router.put('/:id', controllers.destination.put);

router.delete('/:id',  controllers.destination.delete);

module.exports = router;
