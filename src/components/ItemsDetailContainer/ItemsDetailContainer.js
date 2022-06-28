import { useState, useEffect } from "react"
import {  useParams } from "react-router-dom"
import dataProducts from "../../Utils/Products/Products"
import  ItemsDetail  from "../ItemsDetail/ItemsDetail"



function ItemsDetailsContainer () {
    const [data, setData] = useState({})
    const {id} = useParams()
    useEffect(()=>{
        const getItem = () =>{
            return new Promise ((resolve, reject) =>{
                setTimeout(()=>{
                    if(data){resolve(dataProducts)}
                    else{ reject('Error al cargar el producto')}
                }, 2000)
            })
        }
        getItem().then(res => setData(res.find(producto => producto.id === id)))
                .catch(err => {'Error' (err)})
    }, [data, id])
    return <section>
            {
                <ItemsDetail {...data}/>
            }
        </section>
} 

export default ItemsDetailsContainer