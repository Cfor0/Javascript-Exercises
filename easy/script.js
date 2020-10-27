let name1 = "John";
let name2 = "Richard";

function nameLength(a, b) {
    if (a.length > b.length) {
        let lengthDiff = a.length - b.length;
        console.log(a + " is longer than " + b + " by " +lengthDiff + " characters")
    return;
    } else {
        let lengthDiff = b.length - a.length;
        console.log(b + " is longer than " + a + " by " +lengthDiff + " characters")

    }
}
nameLength(name1, name2)