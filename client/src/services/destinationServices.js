const url = 'http://localhost:5000/api/destinations';

export const getAllDestinations = (type = '') => {
    let destinationsUrl = url + ((type && type !== 'all') ? `?type=${type}` : '');

    return fetch(destinationsUrl)
        .then(res => res.json())
        .catch(error => console.log(error));
};

export const getOneDestination = (destinationId) => {    

    return fetch(`${url}/details/${destinationId}`)
        .then(res => res.json())
        .catch(error => console.log(error));
};

export const createDestination = (title, city, country, imageURL, type, story) => {
    let destination = {
        title,
        city,
        country,
        imageURL,
        type,
        story,
        votes: 0,
    };
    
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(destination)
    });
};
export const updateDestination = (destinationId, destination) => {
    return fetch(`${url}/${destinationId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(destination)
    });
};
export const deleteDestination = (destinationId) => {
    return fetch(`${url}/${destinationId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            
        },
    })
}
export const destination = (destinationId, votes) => {
    return fetch(`${url}/${destinationId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({votes})
    })
        .then(res => res.json());
}
