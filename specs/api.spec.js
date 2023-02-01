import config from '../framework/config'
import user from '../framework/services'


describe('testing https://reqres.in/api', () => {

    test('Get request, list users', async () => {
        const resp = await user.list()
        //console.log(resp.status, resp._body.page)
        expect(resp.status).toEqual(200)
        expect(resp._body.page).toEqual(1)
    }),

    test('Post request, create new user', async () => {
        const resp = await user.create()
        //console.log(resp.status, resp._body)
        expect(resp.status).toEqual(201)
        
    }),
    test('Get request, fetches an unknown resource', async () =>{
        const resp = await user.resource()
        //console.log(resp._body.data.id, resp.status)
        expect(resp.status).toEqual(200)
        expect(resp._body.data.id).toEqual(2)
    }),

    test('Post request, registration succesfull', async () =>{
        const resp = await user.reg(config.data)
        //console.log(resp.status, resp._body)
        expect(resp.status).toEqual(200)
        expect(resp._body).toEqual({ id: 4, token: 'QpwL5tke4Pnpja7X4' })
    }),

    test('Post request, login succesfull', async () =>{
        const resp = await user.login(config.data)
        //console.log(resp._body, resp.status)
        expect(resp.status).toEqual(200)
        expect(resp._body.token).toEqual('QpwL5tke4Pnpja7X4')
    }),

    test('Post request, register without password', async() =>{
        const resp = await user.login({email: 'eve.holt@reqres.in'})
        //console.log(resp._body, resp.status)
        expect(resp.status).toEqual(400)
        expect(resp._body).toEqual({ error: 'Missing password' })
        
    }),

    test('Post request, register without email', async() =>{
        const resp = await user.login({password: 'pistol'})
        //console.log(resp._body, resp.status)
        expect(resp.status).toEqual(400)
        expect(resp._body).toEqual({ error: 'Missing email or username' })
        
    })
})



