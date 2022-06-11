import React from 'react'
import Items  from '../Items/Items'

function ItemsList ({products}) {
    console.log(products)
    return (
        products.map(p =>
            <Items {...p} />
        )
    )
}


export default ItemsList