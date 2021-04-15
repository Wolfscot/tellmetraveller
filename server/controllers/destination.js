const models = require('../models');

module.exports = {
    get: {
        all: (req, res, next) => {
            models.Destination.find().populate('creatorId')
                .then(destinations => {
                    res.json(destinations);
                });
        },

        details: (req, res, next) => {
            const {id} = req.params;
            models.Destination.findById(id)
                .then(destination => {
                    res.json(destination);
                })
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
                .then(([modifiedObj, destinationObj]) => {
                    res.send(destinationObj);
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
            
            creatorId
           
            
        } = req.body;

        models.Destination.updateOne({_id: id}, {
            title,
            city,
            country,
            imageURL,
            type,
            story,
            
            creatorId
           })
            .then((updatedDestination) => res.send(updatedDestination))
            .catch(next);
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.Destination.deleteOne({_id: id})
            .then((removedDestination) => res.send(removedDestination))
            .catch(next)
    }
};