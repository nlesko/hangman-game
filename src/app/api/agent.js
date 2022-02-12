import axios from 'axios';

const quotableAxios = axios.create({
    baseURL: 'http://api.quotable.io'
})

const jsonServerAxios = axios.create({
    baseURL : 'https://my-json-server.typicode.com/stanko-ingemark/hang_the_wise_man_frontend_task'
})

const responseBody = (response) => response.data;

const quotable = {
    random: quotableAxios.get('/random').then(responseBody)
}


const highscores = {
    list: () => jsonServerAxios.get('/highscores').then(responseBody),
    submit: (data) => jsonServer.post('/highscores', data).then(responseBody)
}

const jsonServer = {
    highscores
}

const agent = {
    quotable,
    jsonServer
}

export default agent;