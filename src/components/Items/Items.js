import React from 'react'
import './items.css'

export const Items = ({image, name, price}) =>{
    return <article className="itemsCard">
        <img className="imageItems" src={image} alt="imagen de producto" />
        <div className="infoItems">
            <h3> {name} </h3>
            <h4> {price} </h4>
            <button className="btnItems">Comprar</button>
        </div>
        
    </article>
}

export default Items;