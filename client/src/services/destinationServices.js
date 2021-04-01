const url = 'http://localhost:5000/destinations';

export const getAll = (type = '') => {
    let destinationsUrl = url + ((type && type !== 'all') ? `?type=${type}` : '');

    return fetch(destinationsUrl)
        .then(res => res.json())
        .catch(error => console.log(error));
};

// export const getOne = (petId) => {
//     return fetch(`${url}/${petId}`)
//         .then(res => res.json())
//         .catch(error => console.log(error));
// };

// export const create = (petName, description, imageURL, type) => {
//     let pet = {
//         name: petName,
//         description,
//         imageURL,
//         type,
//         likes: 0,
//     };
    
//     return fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(pet)
//     });
// };

// export const update = (petId, pet) => {
//     return fetch(`${url}/${petId}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(pet)
//     });
// };

// export const pet = (petId, likes) => {
//     return fetch(`${url}/${petId}`, {
//         method: 'PATCH',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({likes})
//     })
//         .then(res => res.json());
// }