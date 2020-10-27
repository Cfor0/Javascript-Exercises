let userInput = prompt("Write something.")
console.log(userInput)

function processInput(a) {
    var upper = a.toLocaleUpperCase();
    var lower = a.toLocaleLowerCase();
    if (a === upper) {
        console.log("Why are you using all uppercase?")
    } else if (a === lower) {
        console.log("Why are you whispering?('lowercase')")
    } else {
        console.log("You are a regular person.")
    }
}
processInput(userInput);