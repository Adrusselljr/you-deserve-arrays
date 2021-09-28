const prompt = require("prompt-sync")({ sigint:true })

const arr = JSON.parse(prompt('Enter an array: '));

console.log(arr)

if(typeof arr[] === "string") {
    console.log(arr[2].substring(1, 2))
}
else {
    console.log("Error!")
}