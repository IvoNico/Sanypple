import React, {useState} from 'react'



const ItemsCount = ({stock, initial, onAdd}) =>{
    const [count, setCount] = useState(initial)
    
//SUMAR PRODUCTOS
    const AddProduct = () =>{
        if(count <= stock ){
            setCount(count + 1)
        }   
    }
//ELIMINAR PRODUCTOS
    const RemoveProducts = () =>{
        if(count >= initial)
        setCount(count - 1)
    }



//                disabled sirve para bloquear el boton si se da ciertos requisitos
    return <div> 
        <button disabled={count >= stock ? true:null} onClick={AddProduct}>+</button>
        <span> {count} </span>
        <button disabled={count <= initial ? true:null} onClick={RemoveProducts}>-</button>
        <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
}

export default ItemsCount




