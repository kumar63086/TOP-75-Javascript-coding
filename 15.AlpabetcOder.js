const a="apple"
const b="kumar"
function AlpabetcOder(str) {
 return str.split('').sort().join('');
}

console.log(AlpabetcOder(a)); // Output: "aelpp"
console.log(AlpabetcOder(b)); // Output: "akmru"