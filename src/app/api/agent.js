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
    baseURL: 'http://api.quotable.io'
})

const jsonServerAxios = axios.create({
    baseURL : 'https://my-json-server.typicode.com/stanko-ingemark/hang_the_wise_man_frontend_task'
})



const responseBody = (response) => response.data;

const quotable = {
    random: () => quotableAxios.get('/random').then(responseBody)
}


const highscores = {
    list: () => jsonServerAxios.get('/highscores').then(responseBody),
    submit: (data) => jsonServerAxios.post('/highscores', data).then(responseBody)
}

const jsonServer = {
    highscores
}

const agent = {
    quotable,
    jsonServer
}

export default agent;