// MITASK L

function getReversedString(str: string): string {
    let words = str.split(" ")
        .map(word => word.split("").reverse().join(""))
    return words.join(" ");
}

const result = getReversedString("Hello World");
console.log(result); // Output: "olleH dlroW"

// Architectural pattern: model-view-controller (MVC),  (DI) Dependency Injection, --> backend
// Architectural pattern:mvp, --> frontend
// Design pattern : middleware,  decorator pattern