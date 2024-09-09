import axios from 'axios';



axios.interceptors.response.use(async response => {    
    return response;
}, (error) => {
    const { status } = error.response;

    switch (status) {
        case 400:
            console.log('Bad request', error)
            break;        
        case 404:
            console.log('Not found');
            break;
        case 500:
            console.log('Error: server error', error)
            break;
        default:
            console.log('Unknown error', error);
            break;
    }
    return Promise.reject(error);
})

const randomWordAxios = axios.create({
    baseURL: 'https://random-word-api.herokuapp.com'
})

const responseBody = (response) => response.data[0];

const randomWord = {
    random: () => randomWordAxios.get('/word').then(responseBody)
}

const agent = {
    randomWord,
}

export default agent;