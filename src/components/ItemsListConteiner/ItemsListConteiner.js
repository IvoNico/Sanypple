import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
import ItemsList from '../ItemsList/ItemsList'
import ItemsBanners from '../ItemsBanner/ItemsBanner'
import './ItemsContainer.css'

function ItemsListContainer ({title}) {
    const [items, setItems] = useState([]) //Como lo que va a devolver es un array, se comienza con [vacio]
    const {categoryId} = useParams()
    useEffect(() =>{
        const db = getFirestore();
        if(categoryId){
            const productsCollection = query(
                collection(db, "productos"),
                where('category', '==', categoryId)
            )
            getDocs(productsCollection).then((snapshot) =>{
                setItems(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()})))
            })
            .catch(err => console.log(`Error en la busqueda del producto ${err}`))
        }else{
            const productsCollection = query(
                collection(db, "productos")
            )
            getDocs(productsCollection).then((snapshot) =>{
                setItems(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()})))
            })
            .catch(err => console.log(`Error en la busqueda del producto ${err}`))
        }
    }, [categoryId])
    return (<>
                <h1> {title} </h1>
                <section className="sectionBanners">
                    <ItemsBanners clase={"bannerSamsung"} title={"Samsung"} subtitle={'Love the power'} image={'/image/Banners-logo/samsung.webp'} alt={"Banner de la marca Apple"}/>
                    
                </section>
                <section  className="sectionItems">
                    <ItemsList  products={items} />
                </section>
                
            </>)
}

export default ItemsListContainer