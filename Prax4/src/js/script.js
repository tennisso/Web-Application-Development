let userName = "Andrew"
let userAge = 21
let userPets = ["Cat", "Dog"]
let userBalance = 1200
const EVERY_DAY_SPENDING = 15.3
let everyDaySpendingPerPet = 2.4
let daysSurvived = 0


//console.log("Text", variable) allows you to write to the console

console.log("User Name", userName)
console.log("User Age", userAge)
console.log("User balance", userBalance)
console.log("Every day spending per pet", everyDaySpendingPerPet)
console.log("Days survived", daysSurvived)

while (userBalance > 0) {
	let spending = EVERY_DAY_SPENDING + everyDaySpendingPerPet * userPets.length
	userBalance -= spending
	daysSurvived++
}

console.log("User have sufficient money for " + daysSurvived + " days")

function nameVertical(name) {
    console.log(name)
    for (let index = 0; index < name.length; index++) {
        const element = name[index];
        console.log(element)
    }
}

nameVertical("Thomas")

function code(n) {
    return (n < 100) ? "Not a valid code":
        (n < 200) ? "Informational responses":
        (n < 300) ? "Successful responses":
        (n < 400) ? "Redirection messages":
        (n < 500) ? "Client error responses":
        (n < 600) ? "Server error responses":
        "Not a valid code"
}
// for example n = 121
console.log(code(121));

function compareVariables(var1, var2) {
    console.log("var1 = ", var1)
    console.log("var2 = ", var2)
    type1 = typeof var1
    type2 = typeof var2
    if (var1 === var2) {
        console.log("The two variables have the same value and type")
    } else if (var1 == var2) {
        console.log("The two variables have the same value but not the same type")
        console.log("the type of var1 is " + type1 + " type")
        console.log("the type of var2 is " + type2 + " type")
    } else {
        console.log("The two variables do not have the same value nor the same type")
    }
}

// After completing the function pass different values instead of var1 and var2 to test your function

compareVariables(5, "5");
compareVariables(10, 10);
compareVariables(5, 7);

function fibonacci(n) {
    let fib = [0, 1];
    while (true) {
        let next = fib[fib.length - 1] + fib[fib.length - 2];
        if (next > n) break;
        fib.push(next);
    
    }
    console.log("Fibonacci Sequence: ", fib.join(", "));
}

fibonacci(35)