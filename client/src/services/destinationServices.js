const url = 'http://localhost:5000/api/destinations';

export const getAll = () => {
    return fetch(`${url}`)
        .then(res => res.json())
        .catch(error => console.log(error));
}

export const getOne = (destinationId) => {
    return fetch(`${url}/details/${destinationId}`)
        .then(res => res.json())
        .catch(error => console.log(error));
}

export const create = (
    title,
    city,
    country,
    imageURL,
    type,
    story,
    creator
    ) => {
    let destination = {
        title:title,
        city:city,
        country:country,
        imageURL:imageURL,
        type:type,
        story:story,
        creator:creator
    };

    return fetch(`${url}/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
           
        },
        body: JSON.stringify(destination)
    });
};

export const update = (destinationId, destination) => {
    return fetch(`${url}/${destinationId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
           
        },
        body: JSON.stringify(destination)
    })
}

export const deleteDestination = (destinationId) => {
    return fetch(`${url}/${destinationId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            
        },
        // body: JSON.stringify(destination)
    })
}

