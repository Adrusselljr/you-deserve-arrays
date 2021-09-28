const prompt = require("prompt-sync")({ sigint:true })

const arr = JSON.parse(prompt('Enter an array: '));

console.log(arr)

if(arr.length >= 10) {
    console.log(true)
}
else {
    console.log(false)
}