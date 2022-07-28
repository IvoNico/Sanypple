import { Link } from "react-router-dom";
import './Pag404.css'

export const Page404 = () =>{
    return <section className="pag404">
        <img src="../image/Banners-logo/page404.svg" alt="Imagen de una computadora sin funcionan representando error404"/>
        <Link to='/' className='linkInicio'>¡Vuelve al incio y continua con tu compra!</Link>
    </section>
}