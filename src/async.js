const add = (a, b)=>{
    return new Promise((res, rej)=>{
        if (a<0 || b<0){
            return rej("num must be above 0")
        }
        setTimeout(()=>res(a+b),2000)
    })
}

const dowork = async () => {
   const sum =  await add(2, -4)
   const sum2 =  await add(sum, 4)
   const sum3 =  await add(sum2, -2)
   return [sum, sum2, sum3]
}
dowork().then(res=>{
    console.log("res", res)
}).catch(err=>{
    console.log("err", err)
})