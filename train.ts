console.log("==============================");
console.log("MITASKs have been done:");
console.log("==============================");

function palindromCheck(word: string): boolean {
    let reversed = word.split("").reverse().join("");
    return word === reversed;
}

const result = palindromCheck("dod");
console.log("result:", result);

const result1 = palindromCheck("Ali");
console.log("result1:", result1);



//MITASK M
//function getSquareNumber(numbers: [2, 4, 6]) {
// return numbers.map(num => num * num)
//}

//const result = getSquareNumber([2, 4, 6]);
//console.log("result:", result);


// MITASK L

//function getReversedString(str: string): string {
//  let words = str.split(" ")
//      .map(word => word.split("").reverse().join(""))
//   return words.join(" ");
//}

//const result = getReversedString("Hello World");
//console.log(result); // Output: "olleH dlroW"

// Architectural pattern: model-view-controller (MVC),  (DI) Dependency Injection, --> backend
// Architectural pattern:mvp, --> frontend
// Design pattern : middleware,  decorator pattern