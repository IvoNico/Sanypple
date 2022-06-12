import React from 'react'

export const ItemsBanners = ({image, title, subtitle, alt, clase})=>{
    return <article className={clase}>
        <h2> {title} </h2>
        <h4> {subtitle} </h4>
        <img src={image}  alt={alt}/>
    </article>
}

export default ItemsBanners