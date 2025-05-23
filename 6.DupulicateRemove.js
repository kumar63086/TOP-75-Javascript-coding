const array=[1,1,2,3,4,5,3,2,]
const arr="Hello World"
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates(array));


function RemoveDuplicates(arr) {
const result=[]
for (let i=0;i<arr.length;i++){
    let isDuplicate=false
    for (let j=0;j<result.length;j++){
        if (arr[i]===result[j]){
            isDuplicate=true
            break
        }
    }
    if (!isDuplicate) {
        result.push(arr[i])
    }
}
return result   
}
console.log(RemoveDuplicates(arr));
