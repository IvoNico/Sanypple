import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
import ItemsList from '../ItemsList/ItemsList'
import UncontrolledExample from '../../Utils/Carrousel/Carrousel'
import './ItemsContainer.css'

function ItemsListContainer () {

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
    
                <h1 className="listContainerTitle"> Sanypple Technology </h1>
                <section className="sectionBanners">
                    <UncontrolledExample image={'../image/Banners-logo/Apple-banner.svg'}
                    image2={'../image/Banners-logo/Samsung-banner.svg'} image3={'../image/Banners-logo/Sony-banner.svg'}/>
                </section>
                <section  className="sectionItems">
                    <h2>Productos {categoryId} </h2>
                    <div className="itemsList">
                        <ItemsList  products={items}/> 
                    </div>
                </section>
                
            </>)
}
export default ItemsListContainer