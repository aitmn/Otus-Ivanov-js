import supertest from 'supertest'
import config from './config.api-dom'

const {url} = config



const user = {
    auth: (payload) => {
        return supertest(url)
        .post('/api/v1/auth/signin')
        .set('Accept','application/json')
        .send(payload)
    },
    async getAuthToken() {
        const payload = config.credentials
        const res = await this.auth(payload)
        return res.body.data.access_token
    },
    wrongPass: () => {
        return supertest(url)
        .post('/api/v1/auth/signin')
        .set('Accept','application/json')
        .send({email : 'davayzapilivay@yandex.ru',
            password : 'sas19uf0n'})
    },
    wrongEmail: () => {
        return supertest(url)
        .post('/api/v1/auth/signin')
        .set('Accept','application/json')
        .send({email : 'davayzapilivayyandex.ru',
            password : 'sas9uf0n'})  
    },
    noExist: () => {
        return supertest(url)
        .post('/api/v1/auth/signin')
        .set('Accept','application/json')
        .send({email : '1@test.test.ru',
            password : '1111111'})  
    },
    addAdress: (access_token) =>{
        return supertest(url)
        .get('/api/v1/users/attachAddress?id=30')
        .set('Accept','application/json')
        .set('Authorization', `Bearer ${access_token}`)
        .send()
    },
    checkAdresses: (access_token) =>{
        return supertest(url)
        .get('/api/v1/users/myAddresses')
        .set('Accept','application/json')
        .set('Authorization', `Bearer ${access_token}`)
        .send()
    },
    newMessage: (access_token) =>{
        return supertest(url)
        .post('/api/v1/reports/send')
        .set('Accept','application/json')
        .set('Authorization', `Bearer ${access_token}`)
        .send({
            "kind_id": 20,
            "fk_address": 17185,
            "fk_poligon": 17185,
            "sender": "ios",
            "info_id": "text",
            "form_176": "Testing"
        })
    },
    getObjects: () => {
        return supertest(url)
        .get('/api/v1/poligons/suggest?kind_id=20')
        .set('Accept','application/json')
        .send()
    },
    wrongId: () => {
        return supertest(url)
        .get('/api/v1/poligons/suggest?kind_id=100500')
        .set('Accept','application/json')
        .send()
}
}
export default user