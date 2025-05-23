const promise1=new Promise((reslove,reject)=>{
    setTimeout(()=>{
        reslove('Promise 1 resolved')
    },2000)
})
const promise2=new Promise((reslove,reject)=>{
    setTimeout(()=>{
        reslove('Promise 2 resolved')
    },1000)
})
const promise3=new Promise((reslove,reject)=>{
    setTimeout(()=>{
        reslove('Promise 3 resolved')
    },3000)
})
Promise.race([promise1,promise2,promise3]).then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log(error)
})