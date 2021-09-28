const prompt = require("prompt-sync")({ sigint:true })

const arr = JSON.parse(prompt('Enter an array: '));

console.log(arr)

if(typeof arr[3] === "string") {
    console.log(arr[3].substring(1, 2))
}
else {
    console.log("Error!")
}