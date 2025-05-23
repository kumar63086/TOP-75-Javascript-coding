const FristName="John";

function Vowels(str){
    const matchVowels= str.match(/[aeiouAEIOU]/g)
    return matchVowels ? matchVowels.length : 0;
}
console.log(Vowels(FristName));


//not use inbulit functionality
function getVowls(str) {
    let result = '';
    let Vowels = "aeiouAEIOU";

    for (var i = 0; i < str.length; i++) {
        if (Vowels.indexOf(str[i]) !== -1) {
            result += str[i];
        }
    }

    return result;
}

console.log(getVowls("Hello World")); // Output: "eoo"
