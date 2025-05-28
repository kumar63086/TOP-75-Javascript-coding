function checkArray(elm){
    return Array.isArray(elm);
}
console.log(checkArray([1,2,3]));
console.log(checkArray("hello"));
console.log(checkArray(1));
console.log(checkArray(true));
console.log(checkArray(null));
console.log(checkArray(undefined));

console.log(typeof[]);//object
console.log(typeof{});  //object