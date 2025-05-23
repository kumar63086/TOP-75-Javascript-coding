const a=[-8,7,-3,24,22,0]

function ascendingOrder(a){
    return a.sort((a,b)=>a-b)
}
console.log(ascendingOrder(a))

//descendingOrder

function descendingOrder(arr){
    return arr.sort((a,b)=>b-a)
}
console.log(descendingOrder(a));

//not use inbulit functionality
function AscendingOrder(arr) {
    // Simple implementation of Bubble Sort
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(AscendingOrder(a));

//descendingOrder
function DescendingOrder(arr) {
    // Simple implementation of Bubble Sort
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] <arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(DescendingOrder(a));