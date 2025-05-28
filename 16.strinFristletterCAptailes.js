const string= "hello world from javascript";
function firstLetterCap(str) {
    return str.split(' ').map(words=>words.charAt(0).toUpperCase() +words.slice(1)).join(' ');
}
console.log(firstLetterCap(string)); // Output: "Hello World From Javascript"