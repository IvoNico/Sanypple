import { useState, useEffect } from "react"
import {  useParams } from "react-router-dom"
import {doc, getDoc, getFirestore} from 'firebase/firestore'
import dataProducts from "../../Utils/Products/Products"
import  ItemsDetail  from "../ItemsDetail/ItemsDetail"



function ItemsDetailsContainer () {
    const [data, setData] = useState({})
    const {id} = useParams()
    useEffect(()=>{
        const db = getFirestore()
        const getItem = doc(db, "productos", id);
        getDoc(getItem).then((snapshot)=>{
            if(snapshot.exists()){
                setData({id: snapshot.id, ...snapshot.data()})
            }
        })
    }, [data, id])
    return <section>
            {
                <ItemsDetail {...data}/>
            }
        </section>
} 

export default ItemsDetailsContainer