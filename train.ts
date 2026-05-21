// MITASK L

function getReversedString(str: string): string {
    let words = str.split(" ")
        .map(word => word.split("").reverse().join(""))
    return words.join(" ");
}

const result = getReversedString("Hello World");
console.log(result); // Output: "olleH dlroW"