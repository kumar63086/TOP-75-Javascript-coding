const sentence = "Find the longest word in this sentence";

function longestWord(sentence) {
    let words = sentence.split(" ");
    let longest = "";
    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest; // Moved outside the loop
}

console.log(longestWord(sentence));
// Output: "sentence"