const promise1=new Promise((reslove,reject)=>{

    setTimeout(()=>{
        let sucess=true
        if(sucess){
            reslove("Success")
        }else{
            reject("Failed")
        }
    },2000)
})

const promise2=new Promise((reslove,reject)=>{

    setTimeout(()=>{
        reslove("Success")
    },100)
})
const promise3=new Promise((reslove,reject)=>{

    setTimeout(()=>{
        reslove("Success")
    },200)
})
Promise.all([promise1,promise2,promise3]).then((values)=>{
    console.log(values)
}).catch((error)=>{
    console.log(error)
})