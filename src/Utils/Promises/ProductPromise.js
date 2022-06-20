

const promiseProduct = (time, data)=>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>
            resolve(data)
        )
    }, time)
}

export default promiseProduct;