import React from 'react'
import ItemCount from '../ItemsCount/ItemsCount'

function ItemsListContainer ({title}) {
    return (<>
                <h1> {title} </h1>
                <ItemCount stock={10} initial={0} />
            </>)
}

export default ItemsListContainer