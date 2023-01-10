import config from "./config";
import supertest from 'supertest';
const {url} = config;


const user = {
    login: (payload) => {
        return supertest(url)
        .post('/api/login')
        .send(payload)
    },
    reg: (id) => {
        return supertest(url)
        .post('/api/register')
        .send(id)
    },
    resource: () => {
        return supertest(url)
        .get('/api/{resource}/2')
        .send()
    },
    create: () => {
        return supertest(url)
        .post('/api/users')
        .send({
            name: 'Sasha',
            job: 'QA'
        })
    },
    list: (usersList) => {
        return supertest(url)
        .get('/api/users?page=1')
        .send(usersList)
    }
}




export default user

