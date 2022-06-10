import React from 'react'
import ItemCount from '../ItemsCount/ItemsCount'

function ItemsListContainer ({title}) {
    return (<>
                <h1> {title} </h1>
                <ItemCount/>
            </>)
}

export default ItemsListContainer