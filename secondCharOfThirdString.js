const prompt = require("prompt-sync")({ sigint:true })

const arr = JSON.parse(prompt('Enter an array: '));

console.log(arr)

if(typeof arr[2] === "string") {
    console.log(arr[2][1])
}
else {
    console.log("Error!")
}