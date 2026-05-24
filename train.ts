console.log("MITASKs have been done:");
console.log("=======================");

//MITASK M  
function getSquareNumber(numbers: [2, 4, 6]) {
    return numbers.map(num => num * num)
}

const result = getSquareNumber([2, 4, 6]);
console.log("result:", result);


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