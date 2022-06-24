import { useState, useEffect } from "react"
import {  useParams } from "react-router-dom"
import dataProducts from "../../Utils/Products/Products"
import  ItemsDetail  from "../ItemsDetail/ItemsDetail"



function ItemsDetailsContainer () {
    const [data, setData] = useState({})
    const {id} = useParams()
    useEffect(()=>{
        const getItem = () =>{
            return new Promise ((resolve) =>{
                setTimeout(()=>{
                    resolve(dataProducts)
                }, 2000)
            })
        }
        getItem().then(res => setData(res.find(producto => producto.id === id)))
    }, [id])
    console.log(data)
    return <section>
            {
                <ItemsDetail {...data}/>
            }
        </section>
} 

export default ItemsDetailsContainer