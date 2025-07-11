function sayHello(name) {
    return  `Hello ${name}`
}

const add = function (a,b) {
    return a + b
  }

const mul = (a, b) => a * b

function createDate(day = 1, month = 1, year = 2025) {
    return `${day}/${month}/${year}`
}

createDate()                        //1/1/2025
createDate(5, 10 , 1980)            
createDate(9)                       //9/1/2025
createDate(6,12)                    //6/12/25


//Rest

function max(...rest) {
    let maxVal = -Infinity

    for (let n of rest) {
        if(n > maxVal) maxVal = n
    }
    return maxVal
}

