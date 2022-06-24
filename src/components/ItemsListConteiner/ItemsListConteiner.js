import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemCount from '../ItemsCount/ItemsCount'
import PromiseProduct from '../../Utils/Promises/ProductPromise'
import dataProducts from '../../Utils/Products/Products'
import ItemsList from '../ItemsList/ItemsList'
import ItemsBanners from '../ItemsBanner/ItemsBanner'
import './ItemsContainer.css'

function ItemsListContainer ({title}) {
    const [items, setItems] = useState([]) //Como lo que va a devolver es un array, se comienza con [vacio]
    const {categoryId} = useParams()
    useEffect(() =>{
        PromiseProduct(3000, dataProducts) //le pedimos a la App que cuando se monte nos traiga la promesa de productos
        .then(data => {categoryId ? data.filter(data => data.categoryId === categoryId) : setItems(data)}) //todas las promesas se resuelven con .then para setiar el resultado y se modifique (el array vacio en este caso)
    }, [categoryId])
    return (<>
                <h1> {title} </h1>
                <ItemCount stock={10} initial={0} />
                <section className="sectionBanners">
                    <ItemsBanners clase={"bannerApple"} title={"Apple"} subtitle={'Love the power'} image={'/image/Banners-logo/apple.jpg'} alt={"Banner de la marca Apple"}/>
                    <ItemsBanners clase={"bannerSony"} title={"Sony"} subtitle={'Never Off'} image={'/image/Banners-logo/Sony.webp'} alt={"Banner de la marca Sony"}/>
                    <ItemsBanners clase={"bannerSamsung"} title={"Samsung"} subtitle={'Discover the latest business innovations'} image={'/image/Banners-logo/samsung.webp'} alt={"Banner de la marca Samsung"}/>
                </section>
                <section  className="sectionItems">
                    <ItemsList  products={items} />
                </section>
                
            </>)
}

export default ItemsListContainer