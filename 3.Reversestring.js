const str="Hello World";
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString(str));

//not use inbulit functionality
function Reversestring(str){
    let reversedString = '';
    for(let i=str.length-1;i>=0;i--){
        reversedString += str[i];
    }
    return reversedString;
}
console.log(Reversestring(str));