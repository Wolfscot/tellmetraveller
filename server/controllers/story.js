const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        const id = req.query.id
        const category = req.query.category

        if (id) {
            models.Story.findById(id)
                .then((story) => res.send(story))
                .catch(next);
                return;
        }
        if (story) { models.Story.find({ category: `${category}` })
            .then((stories) => res.send(stories))
            .catch(next);
            return;
        }
        models.Story.find()
            .then((stories) => res.send(stories))
            .catch(next);
            return;
  },

    post: (req, res, next) => {
        const {title, city, country, imageURL, synopsis, category } = req.body;
        const { _id } = req.user;       
        models.Story.create({ title, city, country, imageURL, synopsis, category, creator: _id })
            .then((createdStory) => {
            return Promise.all([
                models.User.updateOne({ _id }, { $push: { stories: createdStory } }),
                models.Story.findOne({ _id: createdStory._id })
            ]);
          })
            .then(([modifiedObj, questionObj]) => {
                res.send(questionObj);
          })
          .catch(next);
  },

  put: (req, res, next) => {
    const id = req.params.id;
    const { title, city, country, imageURL, synopsis, category } = req.body;
    models.Story.updateOne({ _id: id }, { title, city, country, imageURL, synopsis, category })
      .then((updatedStory) => res.send(updatedStory))
      .catch(next)
  },

  delete: (req, res, next) => {
    const id = req.params.id;
    models.Story.deleteOne({ _id: id })
      .then((removedStory) => res.send(removedStory))
      .catch(next)
  }
};