const string="apple";
let counts={}
for(var i=0;i<string.length;i++){
    let chr=string[i];
    if(counts[chr]){
        counts[chr]++;
    }else{
        counts[chr]=1;
    }
}
console.log(counts); // Output: { a: 1, p: 2, l: 1, e: 1 }