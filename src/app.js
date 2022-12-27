
const list = {
    Anna: 5,
    Lev: 4,
    Igor: 4,
    Sasha: 3,
    Semyon: 5,
    Albert: 2,
    Maria: 4
}

const scores = Object.values(list) //вернул значения в качестве массива

function getScore(scores){
    let sum = 0
    for (let i = 0; i < scores.length; i++)
    sum += scores[i]
    return sum
}
console.log(getScore(scores))