const models = require('../models');

module.exports = {
    get: {
        all: (req, res, next) => {
            models.Destination.find().populate('creatorId')
                .then(journals => {
                    res.json(journals);
                });
        },

        details: (req, res, next) => {
            const {id} = req.params;
            models.Destination.findById(id)
                .then(journal => {
                    res.json(journal);
                })
        },
        my: (req, res, next) => {
            const { id } = req.body;
            models.Destination.find({creatorId: id})
                .then(destinations => {
                    res.json(destinations);
                });
        },
    },

    post: {        

        create: (req, res, next) => {
            const {
                title,
                city,
                country,
                imageURL,
                type,
                story,
                votes,
                creatorId
            } = req.body;

            models.Destination.create({ 
                title,
                city,
                country,
                imageURL,
                type,
                story,
                votes,
                creatorId})
                .then((createdDestination) => {
                    return Promise.all([
                        models.User.updateOne({_id: creatorId}, {$push: {destinations: createdDestination}}),
                        models.Destination.findOne({_id: createdJournal._id})
                    ]);
                })
                .then(([modifiedObj, DestinationObj]) => {
                    res.send(DestinationObj);
                })
                .catch(next);
        },
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const {
            title,
            city,
            country,
            imageURL,
            type,
            story,
           
            
        } = req.body;

        models.Destination.updateOne({_id: id}, {
            title,
            city,
            country,
            imageURL,
            type,
            story
           })
            .then((updatedDestination) => res.send(updatedDestination))
            .catch(next);
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.Destination.deleteOne({_id: id})
            .then((removedDestination) => res.send(rremovedDestination))
            .catch(next)
    }
};