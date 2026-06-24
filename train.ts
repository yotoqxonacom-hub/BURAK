console.log("==============================");
console.log("MITASKs have been done:");
console.log("==============================");

//MITASK W

function chunkArray<T>(arr: T[], size: number): T[][] {
    const result: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

// Misol:
const result = chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
console.log("result:", result);




//MITASK V

//function countChars(str: string): { [key: string]: number } {
// const result: { [key: string]: number } = {};

//   for (const char of str) {
//      if (result[char]) {
//          result[char] += 1;
//     } else {
//         result[char] = 1;
//    }
// }

// return result;
//}

//const result = countChars(" cut to the chase");
//console.log("result:", result);;




//MITASK U

//function sumOdds(n: number): number {
//   let count = 0;
//   for (let i = 1; i < n; i++) {
//      if (i % 2 !== 0) {
//        count++;
//    }
// }
// return count;
//}


//const result1 = sumOdds(9);
//console.log(result1);

//const result2 = sumOdds(11);
//console.log(result2);



//MITASK T

//function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
// const merged = [...arr1, ...arr2]; // ikkala arrayni qo‘shib yuboramiz
// return merged.sort((a, b) => a - b); // sonlarni tartiblaymiz
//}

// Misol:
//const result = mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])
//console.log("result:", result);


//MISTASK S

//function missingNumber(nums: number[]) {
//   let count = 0;
//   for (let i = 0; i <= nums.length; i++) {
//      if (!nums.includes(i)) {
//          return i;
//      }
//   }
//}

//console.log(missingNumber([0, 1, 3, 4])); // Output: 2



// MITASK R

//function calculateString(str: string): number {
//return str.split("").reduce((sum, char) => sum + Number(char), 0);
//}
//const result = calculateString("12345");
//console.log("result:", result);


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