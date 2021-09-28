const prompt = require("prompt-sync")({ sigint:true })

const arr = JSON.parse(prompt('Enter an array: '));

console.log(arr)
console.log(arr[3])

if(arr[3] === undefined) {
    console.log(arr[arr.length - 1])
}