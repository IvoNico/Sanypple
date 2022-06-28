

const PromiseProduct = (time, data)=>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(data){
                resolve(data)
            }else{
                reject("Error al cargar los productos")
            }
        }
        )
    }, time)
}

export default PromiseProduct;