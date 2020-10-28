let num1 = prompt("Please enter first number.")
let operator = prompt("Please enter your operator(+, -, *, /).")
let num2 = prompt("Please enter second number.")

let userNum = parseInt(num1);
let userNum2 = parseInt(num2);


console.log(userNum)
console.log(operator)
console.log(userNum2)

switch (operator) {
    case "+":
        console.log(userNum + userNum2);
        break;
    case "-":
        console.log(userNum - userNum2);
        break;
    case "*":
        console.log(userNum * userNum2);
        break;
    case "/":
        console.log(userNum / userNum2);
        break;
    default:
        console.log("please enter a valid operator")
}