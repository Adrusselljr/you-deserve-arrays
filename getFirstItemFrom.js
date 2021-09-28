const prompt = require("prompt-sync")({ sigint:true })

const arr = JSON.parse(prompt('Enter an array: '));

console.log(arr)
console.log(arr[0])