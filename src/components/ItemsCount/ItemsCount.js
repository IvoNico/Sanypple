import React, {useState} from 'react'



const ItemCount = ({stock, onAdd}) =>{
    const [count, setCount] = useState(0)
    
//SUMAR PRODUCTOS
    const AddProduct = () =>{
        if(count + 1){
            setCount(count + 1)
        }   
    }
//ELIMINAR PRODUCTOS
    const RemoveProducts = () =>{
        setCount(count - 1)
    }

//                disabled sirve para bloquear el boton si se da ciertos requisitos
    return <div> 
        <button disabled={count >= 10 ? true:null} onClick={AddProduct}>+</button>
        <span> {count} </span>
        <button disabled={count <= 0 ? true:null} onClick={RemoveProducts}>-</button>
    </div>
}

export default ItemCount




