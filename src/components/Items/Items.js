import React from 'react'

export const Items = ({image, name, price}) =>{
    return <article>
        <img src={image} alt="imagen de producto" />
        <h5> {name} </h5>
        <h6> {price} </h6>
        <button>Comprar</button>
    </article>
}

export default Items;