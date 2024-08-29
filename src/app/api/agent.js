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

const quotableAxios = axios.create({
    baseURL: 'https://api.quotable.io'
})

const responseBody = (response) => response.data;

const quotable = {
    // random: () => quotableAxios.get('/random').then(responseBody)
    random: () => {
        return {
            content: 'random content',
            uniqueId: 'randomId'
        }
    }
}

const agent = {
    quotable,
}

export default agent;