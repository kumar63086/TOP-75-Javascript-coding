function palindrome(str){
   const reversed = str.split('').reverse().join('');
   return str === reversed;
}
console.log(palindrome("madam")); // Output: true
console.log(palindrome("hello")); // Output: false
console.log(palindrome("racecar")); // Output: true
console.log(palindrome("poop")); // Output: true
console.log(palindrome("12321")); // Output: true