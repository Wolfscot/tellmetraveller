const Destination = require('../models/Destination');

module.exports = {
    get: {
        all: (req, res, next) => {
            Destination.find()
                .then(destinations => {
                    res.json(destinations);
                });
        },

        details: (req, res, next) => {
            const {id} = req.params;
            Destination.findById(id)
                .then(destination => {
                    res.json(destination);
                })
        },

    },

    post: (req, res, next) => {
        const {
            title,
            city,
            country,
            imageURL,
            type,
            story,
            votes
        } = req.body;

        Destination.create({
            title,
            city,
            country,
            imageURL,
            type,
            story,
            votes:0})
            .then((createdDestination) => {
                return Promise.all([
                    Destination.findOne({_id: createdDestination._id})
                ]);
            })
            .then(([modifiedObj, destinationObj]) => {
                res.send(destinationObj);
            })
            .catch(next);
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
            votes
            
        } = req.body;

        Destination.updateOne({_id: id}, {
             title,
            city,
            country,
            imageURL,
            type,
            story,
            votes})
            .then((updatedDestination) => res.send(updatedDestination))
            .catch(next);
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        Destination.deleteOne({_id: id})
            .then((removedDestination) => res.send(removedDestination))
            .catch(next)
    }
};