// // Задание 1
// // через if/else
function kolobok(name){

    if (name === 'дедушка')
    return console.log('я от дедушки ушел')

    if (name === 'заяц')
    return console.log('я от зайца ушел')

    if (name === 'лиса')
    return console.log('меня съели')

    else 
    return console.log ('ты не из сказки')
}

kolobok('дедушка')
kolobok('заяц')
kolobok('лиса')
kolobok('собака')

// //через switch

function kolobok(name){
    switch(name){
    case 'дедушка':
        return console.log('я от дедушки ушел')
    case 'заяц':
        return console.log('я от зайца ушел')
    case 'лиса':
        return console.log('меня съели') 
    default:
        return console.log('ты не из сказки')  
  }
}

kolobok('дедушка')
kolobok('заяц')
kolobok('лиса')
kolobok('попугай')


