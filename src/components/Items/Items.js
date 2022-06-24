import React from 'react'
import { Link } from 'react-router-dom';
import './items.css'

const Items = ({image, name, price, id}) =>{
    return <Link  to={`/item/${id}`} className="itemsCard" >
        <article>
            <img className="imageItems" src={image} alt="imagen de producto" />
            <div className="infoItems">
                <h3> {name} </h3>
                <h4> {price} </h4>
                <button className="btnItems">Comprar</button>
            </div>
        </article>
    </Link>
}

export default Items;