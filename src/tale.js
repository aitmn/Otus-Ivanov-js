// Задание 1

function kolobok(name){
    switch(name){
    case 'дедушка':
        return ('я от дедушки ушел')
    case 'заяц':
        return ('я от зайца ушел')
    case 'лиса':
        return ('меня съели') 
    default:
        return ('ты не из сказки')  
  }
}
const name = kolobok('заяц')
console.log(name)

//Задание 2

function newYear(characterName){
   switch (characterName){
    case 'Дед Мороз':
        return (`${characterName}! ${characterName}! ${characterName}!`)
    case 'Снегурочка':
        return (`${characterName}! ${characterName}! ${characterName}!`)
    default:
        return ('Деда Мороза не существует')
   }
}
const characterName = newYear('Снегурочка')
console.log(characterName)