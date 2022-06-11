

const promiseProduct = ({time, data})=>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(data)
        })
    }, time)
}

export default promiseProduct;