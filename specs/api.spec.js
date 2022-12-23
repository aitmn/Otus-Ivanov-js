import axios from 'axios';

describe('testing https://reqres.in/api', () => {

    test('Get request, list users', async () => {

        const config = {
            method: 'get',
            url: 'https://reqres.in/api/users?page=1',
            body: {
            }
        }
        const resp = await axios(config)
        //console.log(resp.data)
        expect(resp.status).toEqual(200)
        expect(resp.data.page).toEqual(1)
    })

    test('Post request, create new user', async () => {
        const config = {
            method: 'post',
            url: 'https://reqres.in/api/users',
            body: {
                name: 'Sasha',
                job: 'QA'
            }
        }

        const resp = await axios(config)
        //console.log(resp.config)
        expect(resp.status).toEqual(201)
    })
    test('Get request, fetches an unknown resource', async () =>{
        const config = {
            method: 'get',
            url: 'https://reqres.in/api/{resource}/2',
            data: {}
        }
        const resp = await axios(config)
        //console.log(resp.data.data)
        expect(resp.status).toEqual(200)
        expect(resp.data.data.id).toEqual(2)
    })

    test('Post request, registration succesfull', async () =>{
        const config = {
            method: 'post',
            url: 'https://reqres.in/api/register',
            data: {
                email: 'eve.holt@reqres.in',
                password: 'pistol'
            }
        }
        const resp = await axios(config)
        //console.log(resp)
        expect(resp.status).toEqual(200)
        expect(resp.data).toEqual({ id: 4, token: 'QpwL5tke4Pnpja7X4' })
    })

    test('Post request, login succesfull', async () =>{
        const config = {
            method: 'post',
            url: 'https://reqres.in/api/login',
            data: {
                email: 'eve.holt@reqres.in',
                password: 'cityslicka'
            }
        }
        const resp = await axios(config)
        //console.log(resp)
        expect(resp.status).toEqual(200)
        expect(resp.data.token).toEqual('QpwL5tke4Pnpja7X4')
    })

    test('Post request, register without password', async() =>{
        const config = {
            method: 'post',
            url: 'https://reqres.in/api/register',
            data: {
                email: 'eve.holt@reqres.in',
            }
        }
        try {
        const resp = await axios(config)
        }
        catch(e){
        //console.log(e.response)
        expect(e.response.status).toEqual(400)
        expect(e.response.data).toEqual({ error: 'Missing password' })
        }
    })

    test('Post request, register without email', async() =>{
        const config = {
            method: 'post',
            url: 'https://reqres.in/api/register',
            data: {
                password: 'cityslicka'
            }
        }
        try {
        const resp = await axios(config)
        }
        catch(e){
        //console.log(e.response)
        expect(e.response.status).toEqual(400)
        expect(e.response.data).toEqual({ error: 'Missing email or username' })
        }
    })
})
