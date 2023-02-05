import config from '../framework/config.api-dom'
import user from '../framework/services.api-dom'

  describe('testing api-dom.tyumen-city.ru', () => {
    test('user auth', async() =>{
      reporter
              .feature('user auth')
      
        const res = await user.auth(config.credentials)
          //console.log(res.body)
          expect(res.status).toEqual(200)
          expect(res.body.data.user.email).toEqual('Davayzapilivay@yandex.ru')
          expect(typeof res.body.data.access_token).toEqual('string')
    }),
    test('user auth with wrong password', async() =>{
      reporter
              .feature('user auth')

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
        }),

    test('user auth with invalid email', async() =>{
      reporter
              .feature('user auth')

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
           }),

    test('nonexistent user auth', async() =>{ 
      reporter
              .feature('user auth')

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
    }),
    test('attach adress to user', async () =>{
      reporter
              .feature('user adress')

        const token = await user.getAuthToken()
        const res = await user.addAdress(token)
        //console.log(res.body)
        expect(res.status).toEqual(200)
    }),
    test('check user adresses', async () =>{
      reporter
              .feature('user adress')

        const token = await user.getAuthToken()
        const res = await user.checkAdresses(token)
        //console.log(res.body.data)
        expect(res.status).toEqual(200)
        expect(res.body.data).toContainEqual({"id": 30, "push": false, "text": "ул Амурская, д 75 к 1"})
    }),
    test('add new message', async () =>{
      reporter
              .feature('user messages')

        const token = await user.getAuthToken()
        const res = await user.newMessage(token)
        //console.log(res.body)
        expect(res.body.data.title).toEqual('Кофейня «Тортобелка»')
    }),
    test('get objects by id', async () =>{
      reporter
              .feature('objects')

        const res = await user.getObjects()
        //console.log(res.body)
        expect (res.body.status).toEqual(true)
    }),
    test('get objects by wrong id', async () =>{
      reporter
              .feature('objects')

        const res = await user.wrongId()
        //console.log(res.body)
        expect(res.body.status).toEqual(false)
    })
    test('get object by invalid id', async () =>{
      reporter
              .feature('objects')

        const res =await user.invalidId()
        expect(res.body.status).toEqual(false)      
    })
})
