const url = 'http://localhost:5000/api/story';

export const getAll = () => {
    return fetch(`${url}`)
        .then(res => res.json())
        .catch(error => console.log(error));
}

export const getOne = (storyId) => {
    return fetch(`${url}/details/${storyId}`)
        .then(res => res.json())
        .catch(error => console.log(error));
}

export const create = (
    title, city, country, imageURL, synopsis, category, creator
    ) => {
    let story = {
        title, city, country, imageURL, synopsis, category, creator
    };

    return fetch(`${url}/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
           
        },
        body: JSON.stringify(story)
    });
};

export const update = (storyId, story) => {
    return fetch(`${url}/${storyId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
           
        },
        body: JSON.stringify(story)
    })
}

export const deleteS = (storyId) => {
    return fetch(`${url}/${storyId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            
        },
        
    })
}

