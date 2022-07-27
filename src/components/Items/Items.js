import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Spinner from '../../Utils/Loading/Spinner'
import './items.css'

const Items = ({image, name, price, id}) =>{
    const [loading, SetLoading] = useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            SetLoading(false)
        }, 5000)
    }, [])
    return<>
        { loading ? <Spinner className="itemsCard"/> :
        <Link  to={`/item/${id}`} className="itemsCard" >
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
    
    </>
}

export default Items;