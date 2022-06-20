import React from 'react'
import Items  from '../Items/Items'

function ItemsList ({products}) {
    return (
        products.map(p =>
            <Items key={p.id} {...p} />
        )
    )
}


export default ItemsList