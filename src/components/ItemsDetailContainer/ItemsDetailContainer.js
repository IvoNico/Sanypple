import { useState, useEffect } from "react"
import dataProducts from "../../Utils/Products/Products"
import  ItemsDetail  from "../ItemsDetail/ItemsDetail"



export function ItemsDetailsContainer () {
    const [data, setData] = useState({})

    useEffect(()=>{
        const getItem = () =>{
            return new Promise ((resolve) =>{
                setTimeout(()=>{
                    resolve(dataProducts)
                }, 2000)
            })
        }
        getItem().then(res => setData(res.find(producto => producto.id === '1')))
    }, [data])
    console.log(data)
    return <section>
            {
                <ItemsDetail {...data}/>
            }
        </section>
} 

export default ItemsDetailsContainer