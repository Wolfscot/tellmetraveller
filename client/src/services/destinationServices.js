const url = 'http://localhost:5000/destinations';

export const getAllDestinations = (type = '') => {
    let destinationsUrl = url + ((type && type !== 'all') ? `?type=${type}` : '');

    return fetch(destinationsUrl)
        .then(res => res.json())
        .catch(error => console.log(error));
};

export const getOneDestination = (destinationId) => {
    return fetch(`${url}/${destinationId}`)
        .then(res => res.json())
        .catch(error => console.log(error));
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