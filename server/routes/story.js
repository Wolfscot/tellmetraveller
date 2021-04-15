const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.story.get);

router.post('/', auth(), controllers.story.post);

router.put('/:id', auth(), controllers.story.put);

router.delete('/:id', auth(), controllers.story.delete);

module.exports = router;
