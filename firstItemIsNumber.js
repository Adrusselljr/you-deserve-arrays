const prompt = require("prompt-sync")({ sigint:true })

const arr = JSON.parse(prompt('Enter an array: '));

console.log(arr)

if(typeof arr[0] === "number") {
    console.log(true)
}
else {
    console.log(false)
}