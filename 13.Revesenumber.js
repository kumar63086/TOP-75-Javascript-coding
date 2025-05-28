const arr = [1,2,3,4,5,6,7,8,9,10];
function Reverse(arr){
    return arr.reverse();
}
console.log(Reverse(arr));

function reverseNumber(num){
    return Number( num.toString().split('').reverse().join(''));
}
console.log(reverseNumber('12345')); // Output: 54321
