const BASE_URL = 'https://swapi.dev/api/';

const Request = (url, method, payload) => {
    return fetch(url, {
        method: method,
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
    .then((res) => res.json())
    .catch((error) => {
        console.error('Error:', error);
    });
};
  
export const getData = (url) => {
    return Request(BASE_URL + url, 'GET');
};

export const getDataById = (url, id) => {
    const newUrl = BASE_URL + url + '/' + id;
    return Request(newUrl, 'GET');
};
  