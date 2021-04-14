const basicUrl = 'http://localhost:5000/api/destinations';

export const getAll = () => {
    return fetch(`${basicUrl}/all`)
        .then(res => res.json())
        .catch(error => console.log(error));
}

export const getOne = (destinationId) => {
    return fetch(`${basicUrl}/details/${destinationId}`)
        .then(res => res.json())
        .catch(error => console.log(error));
}

export const create = (title,
    city,
    country,
    imageURL,
    type,
    story,
    creator) => {
    let destination = {
        title,
        city,
        country,
        imageURL,
        type,
        story,
        creator
    };

    return fetch(`${basicUrl}/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
           
        },
        body: JSON.stringify(destination)
    });
};

export const update = (destinationId, destination) => {
    return fetch(`${basicUrl}/${destinationId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
           
        },
        body: JSON.stringify(destination)
    })
}

export const deleteDestination = (destinationId) => {
    return fetch(`${basicUrl}/${destinationId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            
        },
        // body: JSON.stringify(destination)
    })
}

