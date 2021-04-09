// const controllers = require('../controllers/');
// const router = require('express').Router();
const { auth } = require('../utils');

// router.get('/', controllers.destination.get);

// router.post('/', auth(), controllers.destination.post);

// router.put('/:id', auth(), controllers.destination.put);

// router.delete('/:id', auth(), controllers.destination.delete);


const destinationController = require('../controllers/destination');
const router = require('express').Router();

router.get('/all', destinationController.get.all);

router.get('/details/:id', (auth), destinationController.get.details);

router.get('/my', (auth), destinationController.get.my);

router.post('/', (auth), destinationController.post.create);

router.put('/:id', (auth),destinationController.put);

router.delete('/:id', (auth), destinationController.delete);

module.exports = router;
