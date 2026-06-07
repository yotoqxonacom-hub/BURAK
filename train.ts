console.log("==============================");
console.log("MITASKs have been done:");
console.log("==============================");

//MITASK Q

//function hasProperty(obj: object, str: string): boolean {
//   return str in obj;
//}

//const result1 = hasProperty({ name: "BMW", model: "M3" }, "model");
//console.log("result1:", result1);

//const result2 = hasProperty({ name: "BMW", model: "M3" }, "year");
//console.log("result2:", result2);



//MITASK P

//function objectToArray(obj: Record<string, any>): [string, any][] {
//return Object.entries(obj);
//}

// Misol:
//const result = objectToArray({ a: 546, b: 29 });
//console.log("result:", result);







//MITASK O

//function calculateSumOfNumbers(arr: any[]): number {
//   return arr.reduce((sum, item) => {
//      if (typeof item === "number") {
//            return sum + item;
//     }
//     return sum;
//  }, 0);
//}

// Misol:
//const result = calculateSumOfNumbers([15, "10", { son: 23 }, true, 95]);
//console.log("Natija:", result); // Natija: 110

// Natija:

//MITASK N
//function palindromCheck(word: string): boolean {
// let reversed = word.split("").reverse().join("");
// return word === reversed;
//}

//const result = palindromCheck("dod");
//console.log("result:", result);

//const result1 = palindromCheck("Ali");
//console.log("result1:", result1);



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

/* Project standarts:
- Logging standarts
- Naming standarts
     function, methods, variables ==>CAMEL
     class ==> Paskal
     folders ==> kebab
     css ==> Snake
     Error handling
 */

/*
1 - Traditional API
2 - Rest API
3 - GraphQL API
 */

/*
Traditional fd => SSR => EJS
Modern FD => SPA => React
 */