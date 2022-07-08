import React, {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ItemsCount = ({stock, initial, onAdd}) =>{
    const [count, setCount] = useState(initial)
    const notify = () => toast('Producto agregado!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme:"dark",
        colorProgress: "green"
        });
        
//SUMAR PRODUCTOS
    const AddProduct = () =>{
        if(count <= stock ){
            setCount(count + 1)
            notify();
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
        <button onClick={()=> onAdd(count)} >Agregar al carrito</button>
        <ToastContainer />
    </div>
}

export default ItemsCount




