import config from '../framework/config.api-dom'
import user from '../framework/services.api-dom'

describe('testing api-dom.tyumen-city.ru', () => {
    test('user auth', async() =>{
        const res = await user.auth(config.credentials)
          //console.log(res.body)
          expect(res.status).toEqual(200)
          expect(res.body.data.user.email).toEqual('Davayzapilivay@yandex.ru')
          expect(typeof res.body.data.access_token).toEqual('string')
    })
    test('user auth with wrong password', async() =>{
        const res = await user.wrongPass()
          
          //console.log(res.body.errors)
          expect(res.body.status).toEqual(false)
          expect(res.body.errors).toEqual([
            {
            code: 422, 
            description: "Неверные введенные данные", 
            message: "WRONG_CREDENTIALS"
            }
        ])
        })

    test('user auth with invalid email', async() =>{
        const res = await user.wrongEmail()
          //console.log(res.body)
          expect(res.body.status).toEqual(false)
          expect(res.body.errors).toEqual([
            {
              code: 422,
              field: 'email',
              message: 'VALIDATION_EXCEPTION',
              description: 'Поле «Email» должно быть действительным электронным адресом.'
            }
          ])
           })

    test('nonexistent user auth', async() =>{ 
        const res = await user.noExist()
        //console.log(res.body)
          expect(res.body.status).toEqual(false)
          expect(res.body.errors).toEqual([
            {
              code: 422,
              message: 'USER_NOT_FOUND',
              description: 'Пользователь не найден'
            }
          ])  
    })
    test('attach adress to user', async () =>{
        const token = await user.getAuthToken()
        const res = await user.addAdress(token)
        //console.log(res.body)
        expect(res.status).toEqual(200)
    }),
    test('check user adresses', async () =>{
        const token = await user.getAuthToken()
        const res = await user.checkAdresses(token)
        //console.log(res.body.data)
        expect(res.status).toEqual(200)
        expect(res.body.data).toContainEqual({"id": 30, "push": false, "text": "ул Амурская, д 75 к 1"})
    }),
    test('add new message', async () =>{
        const token = await user.getAuthToken()
        const res = await user.newMessage(token)
        //console.log(res.body)
        expect(res.body.data.title).toEqual('Кофейня «Тортобелка»')
    }),
    test('get objects by id', async () =>{
        const res = await user.getObjects()
        //console.log(res.body)
        expect (res.body.status).toEqual(true)
    }),
    test.only('get objects by wrong id', async () =>{
        const res = await user.wrongId()
        //console.log(res.body)
        expect(res.body.status).toEqual(false)
    })
})
