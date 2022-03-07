let favMovie = (movie, name) => console.log(`My name is ${name} and my favorite movie is ${movie}`);

favMovie('Shawshank', 'Turner');


let getFirstName = (fullName) => {console.log(firstName[0])}


let getFirstNameConcise = fullName => console.log(firstName[0])

let str = ('Turner Wilson May')

let firstName = str.split(' ')

getFirstName(firstName)
getFirstNameConcise(firstName)

let doMath = (x, y) => ({
    exponent: x ** y,
    product: x * y,
})

let result = doMath(4,2);
console.log(`${result.exponent}`);
console.log(`${result.product}`);


let person = (name, location, favFood) => console.log(`${name}, ${location}, ${favFood}`)

let arr = ["Turner", "Birmingham", "Tacos"]

person(...arr)

let myName = "Turner"

let newFunc = (word) => {
let spread = [...word];
for (i=0; i < word.length; i++) {
    console.log(spread[i]); }}

newFunc('Squirrel')